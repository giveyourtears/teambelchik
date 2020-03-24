import React from 'react';
import "./style.css";
import Background1 from '../../../assets/1.jpg';
import Background2 from '../../../assets/2.jpg';
import Background3 from '../../../assets/3.jpg';
import Background4 from '../../../assets/4.jpg';
import Background5 from '../../../assets/5.jpg';
import Background6 from '../../../assets/6.jpg';
import Background7 from '../../../assets/7.jpg';
import Background8 from '../../../assets/8.jpg';
  var divStyle1 = {
    backgroundImage: `url(${Background1})`
  };
  var divStyle2 = {
    backgroundImage: `url(${Background2})`
  };
  var divStyle3 = {
    backgroundImage: `url(${Background3})`
  };
  var divStyle4 = {
    backgroundImage: `url(${Background4})`
  };
  var divStyle5 = {
    backgroundImage: `url(${Background5})`
  };
  var divStyle6 = {
    backgroundImage: `url(${Background6})`
  };
  var divStyle7 = {
    backgroundImage: `url(${Background7})`
  };
  var divStyle8 = {
    backgroundImage: `url(${Background8})`
  };

const MainSlider = () => {
    return (
        <header>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active" style={divStyle1}>
        </div>
        <div className="carousel-item" style={divStyle2}>
        </div>
        <div className="carousel-item" style={divStyle3}>
        </div>
        <div className="carousel-item" style={divStyle5}>
        </div>
        <div className="carousel-item" style={divStyle6}>
        </div>
        <div className="carousel-item" style={divStyle7}>
        </div>
        <div className="carousel-item" style={divStyle8}>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </header>
    );
};

export default MainSlider;