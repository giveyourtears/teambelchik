import React, { Component } from "react";
import image from '../../assets/home.jpg';
import './style.css'
import solo from '../../assets/about.jpg';
import { Service } from "../../services/Services";

var divStyle = {
    backgroundImage: `url(${image})`
  };

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { about: [] };
    Service.getAbout().then(resp => this.setState({ about: resp }));
    console.log(this.state.about)
  }
  render() {
    return (
        <section id="why-us" className="wow fadeIn">
        <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m mb-4" style={divStyle} >
		<h2 className="l-text2 t-center">
			О нашей компании
		</h2>
	</section>
      <div className="container-fluid" id="aboutSection">
        
        <header className="section-header" style={{display: "flex", flexDirection: "column"}}>
          <h3>Почему нужно выбрать именно нас?</h3>
          <p style={{paddingBottom: "20px", fontSize: "20px"}}>{this.state.about.description}</p>
        </header>

        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="why-us-img">
              <img src={solo} alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why-us-content">
              <div className="features wow bounceInUp clearfix">
                <i className="fas fa-star"></i>
                <h4>Качество</h4>
                <p>{this.state.about.qualityDescription}</p>
              </div>

              <div className="features wow bounceInUp clearfix">
                <i className="fas fa-water"></i>
                <h4>Стабильность</h4>
                <p>{this.state.about.stabilityDescription}</p>
              </div>
              
              <div className="features wow bounceInUp clearfix">
              <i className="fas fa-money-check-alt"></i>
                <h4>Хорошая цена</h4>
                <p>{this.state.about.priceDescription}</p>
              </div>
              
            </div>

          </div>

        </div>

      </div>

      <div className="container">
        <div className="row counters mb-3">

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">274</span>
            <p>Клиенты</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">421</span>
            <p>Заказы</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,364</span>
            <p>Отзывы</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">18</span>
            <p>Сотрудники</p>
          </div>
  
        </div>

      </div>
    </section>
    );
  }
}
export default About;

