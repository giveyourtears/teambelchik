import React, { Component } from "react";
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";
import Logout from "./LogoutModal";
import Delete from "./DeleteModal/index";
import { createBrowserHistory } from "history";
import { Service } from "../../services/Services";

class ProductAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    let str = createBrowserHistory().location.pathname.split("/");
    let path = str[str.length - 1];
    if (path === "") path = str[str.length - 2];
    Service.getProductsBySubCategory(path).then(response =>
      this.setState({ products: response, path: path })
    );
  }

  delete = (id) =>{
    Service.deleteProduct(id);
    this.setState({
      products: this.state.products.filter(product => product.id !== id)
    })
  }
  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />

            <div className="container-fluid">
              <section id="articles" className="text-center py-5">
                <div className="container">
                  <h2 className="h1-responsive font-weight-bold mb-5">
                    Продукты
                  </h2>
                  <div className="row">
                    <a
                      className="btn btn-primary col-lg-1 col-md-12 mb-3 ml-3"
                      href="/addProduct"
                    >
                      Добавить
                    </a>
                  </div>
                  <div className="row">
                    {this.state.products.map((item, index) => (
                      <div className="col-lg-3 col-md-12 mb-3" key={index}>
                        <div className="card card-cascade narrower">
                          <div className="view view-cascade">
                            <a href={`/products/${item.url}`}>
                              <img
                                className="card-img-top"
                                src={`/product/${item.url}/${item.url}0.jpg`}
                                alt="product"
                              />
                            </a>
                            <div className="mask img-gradient" />
                          </div>
                          <div className="card-body card-body-cascade">
                            <h4 className="font-weight-bold card-title">
                              {item.name}
                            </h4>
                            <a
                              className="btn btn-warning mr-3"
                              href={`/editProduct?product=${item.url}`}
                            >
                              Изменить
                            </a>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={()=>this.delete(item.id)}
                            >
                              Удалить
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Logout />
        <Delete />
      </div>
    );
  }
}
export default ProductAdmin;
