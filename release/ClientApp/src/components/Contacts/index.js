import React, { Component } from "react";
import './style.css';
import { Service } from "../../services/Services";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
    Service.getContacts().then(resp => this.setState({ contacts: resp }));
  }
  render() {
    return (
      <div>
        <div class="container">
        <div class="row">
          <div class="col-lg-7 mb-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2278.7680790248382!2d30.2246661909109!3d55.169833625967186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c5716b9c34f907%3A0xd337dcfc88c77c09!2z0JzQldCT0JA!5e0!3m2!1sru!2sby!4v1569926580750!5m2!1sru!2sby" width="100%" title="teamCart" height="400px" frameborder="0" scrolling="no" marginHeight="0" marginwidth="0"></iframe>
          </div>
          <div class="col-lg-5 mb-4">
            <h3 className="mb-3">Наши контакты</h3>
            <p>
            <i class="fas fa-address-card"></i>{this.state.contacts.address}
            </p>
            <p>
            <i class="fas fa-phone"></i><a href="tel:+375(29)255-00-75">{this.state.contacts.phone}</a>
            </p>
            <p>
            <i class="fas fa-envelope-open"></i>
              <a href="mailto:sergeibelchikvtb@gmail.com">   {this.state.contacts.email}
              </a>
            </p>
            <p>
            <i class="fas fa-clock"></i> {this.state.contacts.workTime}
            </p>
          </div>
        </div>
      </div></div>
    );
  }
}
export default Contacts;