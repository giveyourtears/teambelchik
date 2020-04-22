import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";
import f1 from '../../../assets/11.jpg';
import f2 from '../../../assets/12.jpg';
import f3 from '../../../assets/13.jpg';
import f4 from '../../../assets/14.jpg';
import f5 from '../../../assets/15.jpg';
import f6 from '../../../assets/16.jpg';
import f7 from '../../../assets/17.jpg';
import f8 from '../../../assets/18.jpg';

class GallerySlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="articles" className="text-center py-5">
        <div className="container">
          <h2 className="h1-responsive font-weight-bold mb-5">
            Наши работы
          </h2>
          <div className="row">
              <div className="col-lg-3 col-md-12 mb-3">
                <div className="card card-cascade narrower">
                  <div className="view view-cascade">
                      <img
                        src={f5}
                        className="card-img-top"
                        alt="country"
                      />
                    <div className="mask img-gradient" />
                  </div>
                  {/* <div className="card-body card-body-cascade">
                    <h4 className="font-weight-bold card-title"></h4>
                    {/* <p className="card-text">{item.description}</p> */}
                    {/* <a className="btn btn-unique" href="">
                      Перейти
                    </a>
                  </div> */} 
                </div>
              </div>
              <div className="col-lg-3 col-md-12 mb-3">
                <div className="card card-cascade narrower">
                  <div className="view view-cascade">
                      <img
                        src={f2}
                        className="card-img-top"
                        alt="country"
                      />
                    <div className="mask img-gradient" />
                  </div>
                  {/* <div className="card-body card-body-cascade">
                    <h4 className="font-weight-bold card-title"></h4>
                    {/* <p className="card-text">{item.description}</p> */}
                    {/* <a className="btn btn-unique" href="">
                      Перейти
                    </a>
                  </div> */} 
                </div>
              </div>
              <div className="col-lg-3 col-md-12 mb-3">
                <div className="card card-cascade narrower">
                  <div className="view view-cascade">
                      <img
                        src={f3}
                        className="card-img-top"
                        alt="country"
                      />
                    <div className="mask img-gradient" />
                  </div>
                  {/* <div className="card-body card-body-cascade">
                    <h4 className="font-weight-bold card-title"></h4>
                    {/* <p className="card-text">{item.description}</p> */}
                    {/* <a className="btn btn-unique" href="">
                      Перейти
                    </a>
                  </div> */} 
                </div>
              </div>
              <div className="col-lg-3 col-md-12 mb-3">
                <div className="card card-cascade narrower">
                  <div className="view view-cascade">
                      <img
                        src={f4}
                        className="card-img-top"
                        alt="country"
                      />
                    <div className="mask img-gradient" />
                  </div>
                  {/* <div className="card-body card-body-cascade">
                    <h4 className="font-weight-bold card-title"></h4>
                    {/* <p className="card-text">{item.description}</p> */}
                    {/* <a className="btn btn-unique" href="">
                      Перейти
                    </a>
                  </div> */} 
                </div>
              </div>
              <div className="col-lg-3 col-md-12 mb-3">
                <div className="card card-cascade narrower">
                  <div className="view view-cascade">
                      <img
                        src={f6}
                        className="card-img-top"
                        alt="country"
                      />
                    <div className="mask img-gradient" />
                  </div>
                  {/* <div className="card-body card-body-cascade">
                    <h4 className="font-weight-bold card-title"></h4>
                    {/* <p className="card-text">{item.description}</p> */}
                    {/* <a className="btn btn-unique" href="">
                      Перейти
                    </a>
                  </div> */} 
                </div>
              </div>
              <div className="col-lg-3 col-md-12 mb-3">
                <div className="card card-cascade narrower">
                  <div className="view view-cascade">
                      <img
                        src={f1}
                        className="card-img-top"
                        alt="country"
                      />
                    <div className="mask img-gradient" />
                  </div>
                  {/* <div className="card-body card-body-cascade">
                    <h4 className="font-weight-bold card-title"></h4>
                    {/* <p className="card-text">{item.description}</p> */}
                    {/* <a className="btn btn-unique" href="">
                      Перейти
                    </a>
                  </div> */} 
                </div>
              </div>
              <div className="col-lg-3 col-md-12 mb-3">
                <div className="card card-cascade narrower">
                  <div className="view view-cascade">
                      <img
                        src={f7}
                        className="card-img-top"
                        alt="country"
                      />
                    <div className="mask img-gradient" />
                  </div>
                  {/* <div className="card-body card-body-cascade">
                    <h4 className="font-weight-bold card-title"></h4>
                    {/* <p className="card-text">{item.description}</p> */}
                    {/* <a className="btn btn-unique" href="">
                      Перейти
                    </a>
                  </div> */} 
                </div>
              </div>
              <div className="col-lg-3 col-md-12 mb-3">
                <div className="card card-cascade narrower">
                  <div className="view view-cascade">
                      <img
                        src={f8}
                        className="card-img-top"
                        alt="country"
                      />
                    <div className="mask img-gradient" />
                  </div>
                  {/* <div className="card-body card-body-cascade">
                    <h4 className="font-weight-bold card-title"></h4>
                    {/* <p className="card-text">{item.description}</p> */}
                    {/* <a className="btn btn-unique" href="">
                      Перейти
                    </a>
                  </div> */} 
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GallerySlider;
