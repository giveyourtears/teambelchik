import React, { Component } from 'react';
import './style.css';
import { Service } from '../../../services/Services';

class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phonenumber: "" };
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onPhoneChange = (event) => {
    this.setState({
      phonenumber: event.target.value
    })
  }

  onClick = (e) => {
    e.preventDefault();
    Service.addCallback(this.state);
  }

  render() {
    return (
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content" style={{backgroundColor: "#d6d6d6"}}>
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Закрыть">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Имя</label>
            <input type="text" className="form-control" onChange={this.onNameChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите своё имя"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Мобильный телефон</label>
            <input type="text" className="form-control" id="exampleInputPassword1" onChange={this.onPhoneChange} placeholder="Введите своё телефон"/>
            <small id="emailHelp" className="form-text text-muted">Введите свой мобильный телефон или домашний.</small>
            <small id="emailHelp" className="form-text text-muted">И мы вам перезвоним!</small>
        </div>
      </div>
      <div className="modal-footer">
        <button type="submit" onClick={this.onClick} className="btn btn-primary">Отправить</button>
      </div>
    </div>
  </div>
</div>
    ); 
  }
}

export default ModalPage;