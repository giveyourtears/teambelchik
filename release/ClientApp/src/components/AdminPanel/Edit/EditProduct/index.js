import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", color: "", size: "", isHot: false, price: "", description: "", additionalInfo: "", url: "", type: "", categoryProduct: [], files: [] };
    let params = queryString.parse(this.props.location.search);
    Service.getProduct(params.product).then(response => {
      this.setState({
        id: response.id, name: response.name, color: response.color, size: response.size, additionalInfo: response.additionalInfo,
        description: response.description, url: response.url, isHot: response.isHot, type: response.type, price: response.price
      })
    });
    Service.getAllCategory().then(response =>
      this.setState({ categoryProduct: response })
    );
  }

  onNameChange = (event) =>{
    this.setState({
      name: event.target.value
    })
  }
  onTitleChange = (event) =>{
    this.setState({
      title: event.target.value
    })
  }
  onDescriptionChange = (event) =>{
    this.setState({
      description: event.target.value
    })
  }

  onCheckChange = () => {
    this.setState({
      isHot: !this.state.isHot
    })
  }

  onRatingChange = (event) => {
    this.setState({
      rating: event.target.value
    })
  }

  onColorChange = (event) => {
    this.setState({
      color: event.target.value
    })
  }

  onAdditionalInfoChange = (event) => {
    this.setState({
      additionalInfo: event.target.value
  })
  }
  onSizeChange = (event) => {
    this.setState({
      size: event.target.value
    })
  }
  onPriceChange = (event) => {
    this.setState({
        price: event.target.value
    })
  }

  onUrlChange = (event) =>{
    this.setState({
      url: event.target.value
    })
  }

  onImagesChange = (event) =>{
    this.setState({
      files: event.target.files
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
    Service.updateProduct(form);
  }
  
  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <h2 className="h1-responsive font-weight-bold mb-5">
                Редактирование продукта
              </h2>
              <form>
              <input
                    readOnly
                    type="text"
                    value={this.state.id}
                    hidden
                  />
                  <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Выбор типа продукта</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={this.onSelectChange}>
                    {this.state.categoryProduct.map((item, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
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
                    value={this.state.name}
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
                    value={this.state.url}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Цена</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Цена"
                    value={this.state.price}
                    onChange={this.onPriceChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Дополнительная информация</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Дополнительная информация"
                    onChange={this.onAdditionalInfoChange}
                    value={this.state.additionalInfo}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Цвет</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Цвет"
                    onChange={this.onColorChange}
                    value={this.state.color}
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
                    value={this.state.size}
                  />
                </div>
                
                <div class="form-group">
                  <label for="exampleInputPassword1">Описание</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Описание"
                    onChange={this.onDescriptionChange}
                    value={this.state.description}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Добавить изображение
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    multiple accept="image/*"
                    onChange={this.onImagesChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onClick}>
                  Изменить
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
export default EditProduct;
