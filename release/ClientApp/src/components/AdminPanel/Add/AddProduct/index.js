import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", color: "", size: "", isHot: false, price: "", description: "", additionalInfo: "", url: "", type: "", categoryProduct: [], files: [] };
    Service.getAllCategory().then(response =>
      this.setState({ 
        categoryProduct: response 
    }),
    );
    
  }

  onImagesChange = (event) =>{
    this.setState({
      files: event.target.files
    })
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  onColorChange = (event) => {
    this.setState({
      color: event.target.value
    })
  }
  onSizeChange = (event) => {
    this.setState({
      size: event.target.value
    })
  }
  onPriceChange = (event) =>{
    this.setState({
      price: event.target.value
    })
  }
  onUrlChange = (event) =>{
    this.setState({
      url: event.target.value
    })
  }

  onAdditionalInfoChange = (event) => {
      this.setState({
        additionalInfo: event.target.value
    })
  }

  onDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  onSelectChange = (event) => {
    this.setState({
      type: event.target.value
    })
  }

  onCheckChange = (event) => {
    this.setState({
      isHot: !this.state.isHot
    })
  }

  onClick = (e) =>
  {
    e.preventDefault();
    let form = new FormData();
    for (var index = 0; index < this.state.files.length; index++) {
        var element = this.state.files[index];
        form.append('file', element);
    }
    form.append('product', JSON.stringify(this.state));
    Service.addProduct(form);
  }

  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Header />

            <div class="container-fluid">
              <h2 className="h1-responsive font-weight-bold mb-5">
                Добавление продукта
              </h2>
              <form>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Выбор типа продукта</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={this.onSelectChange}>
                    {this.state.categoryProduct.map((item, index) => (
                        <option key={index} defaultValue='dveri' value={item.url}>{item.name}</option>
                    ))
                    }
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={this.state.id}
                    aria-describedby="emailHelp"
                    onChange={this.onIdCountryChange}
                    hidden
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Название</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Введите название"
                    onChange={this.onNameChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Ссылка
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Ссылка"
                    onChange={this.onUrlChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Цена</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Цена"
                    onChange={this.onPriceChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Описание</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Описание"
                    onChange={this.onDescriptionChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Цвет</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Цвет"
                    onChange={this.onColorChange}
                  />
                </div>
                <div className="form-check mb-2">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.onCheckChange}/>
                  <label 
                  className="form-check-label" 
                  htmlFor="exampleCheck1"
                  >
                    Горячий продукт?
                    </label>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Размер</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Размер"
                    onChange={this.onSizeChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlFile1">
                    Добавить изображение
                  </label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    multiple accept="image/*"
                    onChange={this.onImagesChange}
                  />
                </div>
                
                <button type="submit" class="btn btn-primary" href="/productAdmin" onClick={this.onClick}>
                  Добавить
                </button>
              </form>
            </div>
          </div>
        </div>
        <Logout />
      </div>
    );
  }
}
export default AddProduct;
