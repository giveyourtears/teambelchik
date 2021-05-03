import React, {Component} from 'react';
import {Service} from '../../services/Services';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {createBrowserHistory} from "history";
import {Carousel} from 'react-responsive-carousel';
import './style.css';
import image from "../../assets/1.jpg";
import {Helmet} from 'react-helmet';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            color: "",
            size: "",
            isHot: false,
            countImages: 0,
            price: "",
            description: "",
            additionalInfo: "",
            url: "",
            type: "",
            files: [],
            title: "",
            keywords: "",
            descriptionPage: ""
        };
        let str = createBrowserHistory().location.pathname.split("/");
        let path = str[str.length - 1];
        if (path === "") path = str[str.length - 2];
        Service.getProduct(path).then(response => {
            this.setState({
                id: response.id,
                name: response.name,
                color: response.color,
                size: response.size,
                additionalInfo: response.additionalInfo,
                description: response.description,
                url: response.url,
                isHot: response.isHot,
                type: response.type,
                price: response.price,
                countImages: response.countImages,
                title: response.type === "okna" ? "Купить окна пвх в Витебске - лучшие окна в Витебске. Широкий ассортимент! Доставка и замер бесплатно!" : response.type === "furnitura" ? "Фурнитура в Витебске - купить фурнитуру в Витебске" : response.type === "mezhkomnatnie" ? "Межкомнатные двери в Витебске - купить межкомнатные двери в Витебске. Доставка и замер бесплатно!" : "Входные двери в Витебске - купить входные двери в Витебске. Доставка и замер бесплатно!",
                keywords: response.type === "okna" ? "пластиковые окна Витебск, окна Витебск, окна пвх, межкомнатые, входные, железные двери, входные двери в квартиру" : response.type === "furnitura" ? "фурнитура для дверей, фурнитура для межкомнатных дверей, фурнитура Витебск" : response.type === "mezhkomnatnie" ? "купить межкомнатные двери, межкомнатные двери в Витебске, межкомнатные, купить межкомнатные двери, купить двери межкомнатные" : "купить входные двери, входные двери в Витебске, входные двери, входные двери в квартиру, железные двери, входные, купить входную дверь",
                descriptionPage: response.type === "okna" ? "Купить окна пвх в Витебске. ► Каталог окон представлен на сайте. ► Бесплатный замер и доставка! ► Широкий ассортимент!" : response.type === "furnitura" ? "Купить фурнитуру для межкомнатных дверей по цене производителя в Витебске. Широкий ассортимент!" : response.type === "mezhkomnatnie" ? "Купить межкомнатные двери по ценам производителя в Витебске. ► Каталог входных дверей представлен на сайте. ► Широкий ассортимент! ► Бесплатный замер и доставка!" : "Купить входные двери по ценам производителя в Витебске. ► Каталог входных дверей представлен на сайте. ► Широкий ассортимент! ► Бесплатный замер и доставка!",
            })
        });
    }

    componentDidMount() {
        // Remove the default static meta description in favor of react helmets dynamic one 
        if (document.querySelector("[name='description']")) {
            document.querySelector("[name='description']").remove()
        }
        if (document.querySelector("[name='keywords']")) {
            document.querySelector("[name='keywords']").remove()
        }
    }

    render() {
        const isNullProduct = this.state;
        var items = [];
        var itemsSecond = []
        for (let i = 0; i < this.state.countImages; i++) {
            items.push(
                <div key={i}>
                    <img src={`/product/${this.state.url}/${this.state.url}${i}.jpg`} alt={"image_items" + i}/>
                </div>)
        }
        for (let i = 0; i < this.state.countImages; i++) {
            itemsSecond.push(
                <div key={i}>
                    <img src={`/product/${this.state.url}/${this.state.url}${i}.jpg`} alt={"image_itemss" + i}/>
                </div>)
        }
        return (
            <div className="maincontent bg--white pt--80 pb--55">
                <Helmet>
                    <title>{this.state.title}</title>
                    <meta name="description" content={this.state.descriptionPage}/>
                    <meta name="keywords" content={this.state.keywords} data-react-helmet="true"/>
                </Helmet>
                {this.state.type === "okna" ?
                    <div className="container">
                        <div className="row" style={{display: "flex", justifyContent: "center"}}>
                            <div className="col-lg-12 col-12">
                                <div className="wn__single__product">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="wn__fotorama__wrapper">
                                                <Carousel>
                                                    {itemsSecond}
                                                </Carousel>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="product__info__main">
                                                <h1>{this.state.name}</h1>
                                                <div className="product-info-stock-sku d-flex">
                                                    <p>Наличие:<span> На складе</span></p>
                                                </div>
                                                <div className="price-box">
                                                    <span>{this.state.price}</span>
                                                </div>
                                                <div className="product-color-label"
                                                     style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                                    <span>Цвет</span>
                                                    <div className="color__attribute d-flex">
                                                        <p>{this.state.color}</p>
                                                    </div>
                                                </div>
                                                <div className="product-color-label"
                                                     style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                                    <span>Размер</span>
                                                    <div className="color__attribute d-flex">
                                                        <p>{this.state.size}</p>
                                                    </div>
                                                </div>
                                                <div className="product-color-label"
                                                     style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                                    <span>Описание</span>
                                                    <div className="color__attribute d-flex">
                                                        <p>{this.state.description}</p>
                                                    </div>
                                                </div>
                                                <div className="product-color-label"
                                                     style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                                    <span>Акция</span>
                                                    <div className="color__attribute d-flex">
                                                        <p>Только у нас: Бесплатный замер, консультация, доставка. И
                                                            самые недорогие цены по установке в Витебске</p>
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
                    : isNullProduct === 0 ? <img src={image} alt="no_product"></img> :
                        <div className="container">
                            <div className="row" style={{display: "flex", justifyContent: "center"}}>
                                <div className="col-lg-10 col-12">
                                    <div className="wn__single__product">
                                        <div className="row">
                                            <div className="col-lg-4 col-12 mr-5">
                                                <div className="wn__fotorama__wrapper">
                                                    <Carousel>
                                                        {items}
                                                    </Carousel>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="product__info__main">
                                                    <h1>{this.state.name}</h1>
                                                    <div className="product-info-stock-sku d-flex">
                                                        <p>Наличие:<span> На складе</span></p>
                                                    </div>
                                                    <div className="price-box">
                                                        <span>{this.state.price}</span>
                                                    </div>
                                                    <div className="product-color-label"
                                                         style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                                        <span>Цвет</span>
                                                        <div className="color__attribute d-flex">
                                                            <p>{this.state.color}</p>
                                                        </div>
                                                    </div>
                                                    <div className="product-color-label"
                                                         style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                                        <span>Размер</span>
                                                        <div className="color__attribute d-flex">
                                                            <p>{this.state.size}</p>
                                                        </div>
                                                    </div>
                                                    <div className="product-color-label"
                                                         style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                                        <span>Описание</span>
                                                        <div className="color__attribute d-flex">
                                                            <p>{this.state.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="product-color-label"
                                                         style={{borderTop: "1px solid #ebebeb", paddingTop: "5px"}}>
                                                        <span>Акция</span>
                                                        <div className="color__attribute d-flex">
                                                            <p>Только у нас: Бесплатный замер, консультация, доставка. И
                                                                самые недорогие цены по установке в Витебске</p>
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

    