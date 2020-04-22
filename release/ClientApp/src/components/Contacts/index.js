import React, { Component } from "react";
import './style.css';
import { Service } from "../../services/Services";
import './themify-icons.css';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
    Service.getContacts().then(resp => this.setState({ contacts: resp }));
  }
  render() {
    return (
      <section className="contact-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="contact-title">
                        <h4>Где нас найти?</h4>
                    </div>
                    <div className="contact-widget">
                        <div className="cw-item">
                            <div className="ci-icon">
                              <i class="ti-location-pin"></i>
                            </div>
                            <div className="ci-text">
                                <span>Адрес:</span>
                                <p>{this.state.contacts.address}</p>
                            </div>
                        </div>
                        <div className="cw-item">
                            <div className="ci-icon">
                              <i class="ti-mobile"></i>
                            </div>
                            <div className="ci-text">
                                <span>Номер:</span>
                                <p><a href="tel:+375(29)255-00-75">{this.state.contacts.phone}</a></p>
                            </div>
                        </div>
                        <div className="cw-item">
                            <div className="ci-icon">
                              <i class="ti-email"></i>
                            </div>
                            <div className="ci-text">
                                <span>Email:</span>
                                <p>
                                  <a href="mailto:sergeibelchikvtb@gmail.com">{this.state.contacts.email}</a>
                                </p>
                            </div>
                        </div>
                        <div className="cw-item">
                            <div className="ci-icon">
                              <i class="ti-time"></i>
                            </div>
                            <div className="ci-text">
                                <span>Время работы:</span>
                                <p>
                                  Каждый день: с 10:00 до 19:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                    <div className="contact-form">
                        <div className="leave-comment">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2278.7680790248382!2d30.2246661909109!3d55.169833625967186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c5716b9c34f907%3A0xd337dcfc88c77c09!2z0JzQldCT0JA!5e0!3m2!1sru!2sby!4v1569926580750!5m2!1sru!2sby" width="100%" title="teamCart" height="400px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}
export default Contacts;