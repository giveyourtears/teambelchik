import React, { Component } from 'react';
import { Service } from '../../services/Services';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { createBrowserHistory } from "history";
import { Carousel } from 'react-responsive-carousel';
import './style.css';
import image from "../../assets/1.jpg"

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = { id: "", name: "", color: "", size: "", isHot: false, countImages: 0, price: "", description: "", additionalInfo: "", url: "", type: "", files: [] };
    let str = createBrowserHistory().location.pathname.split("/");
    let path = str[str.length - 1];
    if (path === "") path = str[str.length - 2];
		Service.getProduct(path).then(response => {
		  this.setState({
			id: response.id, name: response.name, color: response.color, size: response.size, additionalInfo: response.additionalInfo,
			description: response.description, url: response.url, isHot: response.isHot, type: response.type, price: response.price, countImages: response.countImages
		  })
		});
	  }
	  
	render() {
    const isNullProduct = this.state;
    var items = [];
    var itemsSecond = []
		for(var i = 0; i < this.state.countImages; i++) {
			items.push(
				<div key={i}>
        <img src={`/product/${this.state.url}/${this.state.url}${i}.jpg`}/>
				</div>)
    }
    for(var i = 0; i < this.state.countImages; i++) {
			itemsSecond.push(
				<div key={i}>
        <img src={`/product/${this.state.url}/${this.state.url}${i}.jpg`}/>
				</div>)
    }
	  return (
      <div class="maincontent bg--white pt--80 pb--55">
        {this.state.type == "okna" ? 
        <div class="container">
            <div class="row" style={{display: "flex", justifyContent: "center"}}>
                <div class="col-lg-12 col-12">
                    <div class="wn__single__product">
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <div class="wn__fotorama__wrapper">
                                <Carousel>
                                  {itemsSecond}
                                </Carousel>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="product__info__main">
                                    <h1>{this.state.name}</h1>
                                    <div class="product-info-stock-sku d-flex">
                                        <p>Наличие:<span> На складе</span></p>
                                    </div>
                                    <div class="price-box">
                                        <span>{this.state.price}</span>
                                    </div>
                                    <div class="product-color-label" style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                        <span>Цвет</span>
                                        <div class="color__attribute d-flex">
                                            <p>{this.state.color}</p>
                                        </div>
                                    </div> 
                                    <div class="product-color-label" style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                        <span>Размер</span>
                                        <div class="color__attribute d-flex">
                                            <p>{this.state.size}</p>
                                        </div>
                                    </div>
                                    <div class="product-color-label" style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                        <span>Описание</span>
                                        <div class="color__attribute d-flex">
                                            <p>{this.state.description}</p>
                                        </div>
                                    </div>
                                    <div class="product-color-label" style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                        <span>Акция</span>
                                        <div class="color__attribute d-flex">
                                            <p>Только у нас: Бесплатный замер, консультация, доставка. И самые недорогие цены по установке в Витебске</p>
                                        </div>
                                    </div>
                                    {/* <!-- <div class="product__overview">
                                        <span></span>
                                        <ul class="pro__attribute">
                                            <li>• Четкая.</li>
                                            <li>• Прочная. </li>
                                            <li>• Сочная.</li>
                                        </ul>
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        : isNullProduct == 0 ? <img src={image} alt="no_product"></img>:
        <div class="container">
            <div class="row" style={{display: "flex", justifyContent: "center"}}>
                <div class="col-lg-10 col-12">
                    <div class="wn__single__product">
                        <div class="row">
                            <div class="col-lg-4 col-12 mr-5">
                                <div class="wn__fotorama__wrapper">
                                <Carousel>
                                  {items}
                                </Carousel>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="product__info__main">
                                    <h1>{this.state.name}</h1>
                                    <div class="product-info-stock-sku d-flex">
                                        <p>Наличие:<span> На складе</span></p>
                                    </div>
                                    <div class="price-box">
                                        <span>{this.state.price}</span>
                                    </div>
                                    <div class="product-color-label" style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                        <span>Цвет</span>
                                        <div class="color__attribute d-flex">
                                            <p>{this.state.color}</p>
                                        </div>
                                    </div> 
                                    <div class="product-color-label" style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                        <span>Размер</span>
                                        <div class="color__attribute d-flex">
                                            <p>{this.state.size}</p>
                                        </div>
                                    </div>
                                    <div class="product-color-label" style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                        <span>Описание</span>
                                        <div class="color__attribute d-flex">
                                            <p>{this.state.description}</p>
                                        </div>
                                    </div>
                                    <div class="product-color-label" style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                        <span>Акция</span>
                                        <div class="color__attribute d-flex">
                                            <p>Только у нас: Бесплатный замер, консультация, доставка. И самые недорогие цены по установке в Витебске</p>
                                        </div>
                                    </div>
                                    {/* <!-- <div class="product__overview">
                                        <span></span>
                                        <ul class="pro__attribute">
                                            <li>• Четкая.</li>
                                            <li>• Прочная. </li>
                                            <li>• Сочная.</li>
                                        </ul>
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
    </div>
  //   <section id="about" className="py-5">
  //     {this.state.type == "okna" ? 
  //     <div className="container-fluid">
  //     <section id="gallery">
  //         <h2 className="mb-5 font-weight-bold text-center">
  //         {this.state.name}
  //       </h2>
  //       <div className="row">
  //       <div className="col-md-6 mb-5">
  //           <Carousel>
  //             {itemsSecond}
  //           </Carousel></div>
  //             <div className="col-lg-6">
  //             <div className="row mb-3">
  //               <div className="col-1">
  //         <i className="fas fa-comments-dollar"></i>
  //               </div>
  //               <div className="col-xl-10 col-md-11 col-10">
  //                 <h5 className="font-weight-bold mb-3">Цена</h5>
  //                 <p className="grey-text">{this.state.price}</p>
  //               </div>
  //             </div>
  //             <div className="row mb-3">
  //               <div className="col-1">
  //                 <i className="fas fa-pencil-ruler"></i>
  //               </div>
  //               <div className="col-xl-10 col-md-11 col-10">
  //                 <h5 className="font-weight-bold mb-3">Размер</h5>
  //                 <p className="grey-text">{this.state.size}</p>
  //               </div>
  //             </div>
  //             <div className="row mb-3">
  //               <div className="col-1">
  //               <i className="fas fa-palette"></i>
  //               </div>
  //               <div className="col-xl-10 col-md-11 col-10">
  //                 <h5 className="font-weight-bold mb-3">Цвет</h5>
  //                 <p className="grey-text">{this.state.color}</p>
  //               </div>
  //     </div>
  //     <div className="row mb-3">
  //               <div className="col-1">
  //               <i className="fas fa-address-card"></i>
  //               </div>
  //               <div className="col-xl-10 col-md-11 col-10">
  //                 <h5 className="font-weight-bold mb-3">Описание</h5>
  //                 <p className="grey-text">{this.state.description}</p>
  //               </div>
  //             </div>
  //             <div className="row mb-3">
  //               <div className="col-1">
  //               <i className="fas fa-hand-holding-usd"></i>
  //               </div>
  //               <div className="col-xl-10 col-md-11 col-10">
  //                 <h5 className="font-weight-bold mb-3">Акция</h5>
  //                 <p className="grey-text">Только у нас: Бесплатный замер, консультация, доставка. И самые недорогие цены по установке в Витебске</p>
  //               </div>
  //             </div>
  //           </div>
          
  //         </div>
  //     </section>
  
  // </div>
  //     : isNullProduct == 0 ? <img src={image} alt="no_product"></img>: <div className="container-fluid">
  //     <section id="gallery">
  //       <h2 className="mb-5 font-weight-bold text-center">
  //         {this.state.name}
  //       </h2>
  //       <div className="row justify-content-center">
  //         <div className="col-md-2">
	//   <Carousel>
	// 		{items}
	// 	  </Carousel>
  //         </div>
  //         <div className="col-lg-6">
  //           <div className="row mb-3">
  //             <div className="col-1">
	// 	  	<i className="fas fa-comments-dollar"></i>
  //             </div>
  //             <div className="col-xl-10 col-md-11 col-10">
  //               <h5 className="font-weight-bold mb-3">Цена</h5>
  //               <p className="grey-text">{this.state.price}</p>
  //             </div>
  //           </div>
  //           <div className="row mb-3">
  //             <div className="col-1">
  //               <i className="fas fa-pencil-ruler"></i>
  //             </div>
  //             <div className="col-xl-10 col-md-11 col-10">
  //               <h5 className="font-weight-bold mb-3">Размер</h5>
  //               <p className="grey-text">{this.state.size}</p>
  //             </div>
  //           </div>
  //           <div className="row mb-3">
  //             <div className="col-1">
  //             <i className="fas fa-palette"></i>
  //             </div>
  //             <div className="col-xl-10 col-md-11 col-10">
  //               <h5 className="font-weight-bold mb-3">Цвет</h5>
  //               <p className="grey-text">{this.state.color}</p>
  //             </div>
	// 	</div>
	// 	<div className="row mb-3">
  //             <div className="col-1">
  //             <i className="fas fa-address-card"></i>
  //             </div>
  //             <div className="col-xl-10 col-md-11 col-10">
  //               <h5 className="font-weight-bold mb-3">Описание</h5>
  //               <p className="grey-text">{this.state.description}</p>
  //             </div>
  //           </div>
  //           <div className="row mb-3">
  //             <div className="col-1">
  //             <i className="fas fa-hand-holding-usd"></i>
  //             </div>
  //             <div className="col-xl-10 col-md-11 col-10">
  //               <h5 className="font-weight-bold mb-3">Акция</h5>
  //               <p className="grey-text">Только у нас: Бесплатный замер, консультация, доставка. И самые недорогие цены по установке в Витебске</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>}

  //     </section>
		);
	}
  }
export default Product;

    