import React, { Component } from "react";
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";
import Logout from "./LogoutModal";
import Delete from "./DeleteModal/index";
import { Service } from "../../services/Services";

class CategoryAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { category: [] };
    Service.getAllCategory().then(resp => this.setState({ category: resp }));
  }

  delete = (id) =>{
    Service.deleteCategory(id);
    this.setState({
        category: this.state.category.filter(category => category.id !== id)
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
                    Категории
                  </h2>
                  <div className="row">
                    <a
                      className="btn btn-primary col-lg-1 col-md-12 mb-3 ml-3"
                      href="/addCategory"
                    >
                      Добавить
                    </a>
                  </div>
                  <div className="row">
                    {this.state.category.map((item, index) => (
                      <div className="col-lg-3 col-md-12 mb-3" key={index}>
                        <div className="card card-cascade narrower">
                          <div className="view view-cascade">
                            <div className="mask img-gradient" />
                          </div>
                          <div className="card-body card-body-cascade">
                            <h4 className="font-weight-bold card-title">
                              {item.name}
                            </h4>
                            <a
                              className="btn btn-warning mr-3"
                              href={`/editCategory?category=${item.url}`}
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
export default CategoryAdmin;
