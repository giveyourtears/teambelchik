import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditContacts extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", phone: "", address: "", email: "", worktime: "" };
    let params = queryString.parse(this.props.location.search);
    Service.getContacts(params).then(response => {
      this.setState({
        id: response.id, phone: response.phone, address: response.address, email: response.email, worktime: response.workTime
      })
    });
  }
  onPhoneChange = (event) =>{
    this.setState({
      phone: event.target.value
    })
  }
  onAddressChange = (event) =>{
    this.setState({
      address: event.target.value
    })
  }
  onEmailChange = (event) =>{
    this.setState({
      email: event.target.value
    })
  }

  onWorkTimeChange = (event) =>{
    this.setState({
      worktime: event.target.value
    })
  }

  onClick = (event) =>
  {
    event.preventDefault();
    Service.updateContacts(this.state);
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
                Редактирование страницы "Контакты"
              </h2>
              <form>
              <input
                    type="text"
                    value={this.state.id}
                    hidden
                  />
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Номер телефона</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.phone}
                    onChange={this.onPhoneChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Адрес</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.state.address}
                    onChange={this.onAddressChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Email
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Рабочее время
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.worktime}
                    onChange={this.onWorkTimeChange}
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
export default EditContacts;
