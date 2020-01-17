import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", url: "", name: "" };
    let params = queryString.parse(this.props.location.search);
    Service.getCategory(params.category).then(response => {
      this.setState({
        id: response.id, url: response.url, name: response.name
      })
    });
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onUrlChange = (event) => {
    this.setState({
      url: event.target.value
    })
  }

  onClick = (event) =>
  {
    event.preventDefault();
    Service.updateCategory(this.state);
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
                Редактирование категории
              </h2>
              <form>
                <input
                    type="text"
                    value={this.state.id}
                    hidden
                  />
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
                    value={this.state.url}
                    onChange={this.onUrlChange}
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
export default EditCategory;
