import React, { Component } from "react";
import './style.css';
import './animatee.css';
import { Service } from "../../../services/Services";
import image from "../../../assets/325.gif"
import image1 from "../../../assets/1.jpg"

class MainCatalogue extends Component {
  constructor(props) {
    super(props);
	this.state = { products: [] };
	Service.getProductsBySubCategory("vhodnie").then(response =>
        this.setState({ products: response })
	);
    // Service.getSubCategoryByCategory().then(resp => this.setState({ hotproducts: resp }));
  }
  onClickCat = (name) =>
  {
    Service.getProductsBySubCategory(name).then(response =>
        this.setState({ products: response })
	);
  }
  onClickCatCat = (name) =>
  {
    Service.getProductsByCategory(name).then(response =>
        this.setState({ products: response })
	);
  }
  render() {
    const isNullProducts = this.state.hotproducts;
    return (
		<section class="bgwhite p-t-55 p-b-65">
		      {/*<div className="gradient-border" id="box">
		       <h1 className="section-heading text-uppercase" style={{color: "#f3a158", fontWeight: "bold"}}>Акция!</h1>
		         <h2 className="section-heading text-uppercase" style={{color: "#f3a158"}}> Скидка 5% пенсионерам и новосёлам<br></br>Монтаж межкомнатных от 30р, входные от 25р</h2>
		        <h2 className="section-heading text-uppercase" style={{color: "#f3a158"}}>Звоните <a className="section-heading text-uppercase" style={{color: "#f3a158", fontSize: "40px"}} href="tel:+375(29)255-00-75">+375 (29) 255 00 75</a>!</h2>
		      <h2 className="section-heading text-uppercase" style={{color: "#f3a158ed"}}>Условия розыгрыша в <a className="section-heading text-uppercase" style={{color: "#f3a158", fontSize: "40px"}} href="https://vk.com/id535800946?w=wall535800946_128"> ВК</a>! </h2>
				</div>*/}
		        <div class="section-header mb-5">
            		<h2 className="section-heading text-uppercase">Каталог</h2>
				</div>
				<div class="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-12 order-1 order-lg-2">
                    <div class="tab__container">
                        <div class="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
                            <div class="row">
							{this.state.products.map((item, index) => (
                                <div class="col-lg-3 col-md-3 col-sm-3 col-8">
                                    <div class="product">
                                        <div class="product__thumb">
                                            <a class="first__img" href={`/product/${item.url}`}>
												<img src={`/product/${item.url}/${item.url}0.jpg`} alt="product image"/>
											</a>
                                            <a class="second__img animation1" href={`/product/${item.url}`}>
												<img src={`/product/${item.url}/${item.url}0.jpg`} alt="product image"/>
											</a>
                                            {/* <div class="new__box">
                                                <span class="new-label">Hot</span>
                                            </div> */}
                                            {/* <ul class="prize position__right__bottom d-flex">
                                                <li>{item.price}</li>
                                                {/* <!-- <li class="old_prize">$55.00</li> --> */}
                                            {/* </ul> */}
                                        </div>
                                        <div class="product__content">
											<h4 class="prize position__right__bottom d-flex">{item.price}</h4>
                                            <h4><a class="class-a" href={`/product/${item.url}`}>{item.name}</a></h4>
                                        </div>
                                    </div>
                                </div>
							))}	
                                </div>
                        </div>
                    </div>
                </div>
				<div class="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
                    <div class="shop__sidebar">
                        <aside class="wedget__categories poroduct--cat">
                            <h3 class="wedget__title">Категории</h3>
                            <ul>
                                <li style={{borderBottom: "none"}}>Двери
                                    <ul class="content">
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("vhodnie")}>Входные</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("mezh")}>Межкомнатные</li>
                                    </ul>
                                </li>
                                <li style={{borderBottom: "none"}}>Окна
                                    <ul class="content">
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("okno")}>Окно</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("balkonnaya")}>Балконная группа</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("setka")}>Москитная сетка</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("nizn_otliv")}>Верхний отлив</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("verhn_otliv")}>Нижний отлив</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("podokonniki")}>Подоконники</li>
                                    </ul>
                                </li>
                                <li style={{borderBottom: "none"}}>Фурнитура
                                    <ul class="content">
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("ruchka")}>Ручки</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("zamok")}>Замки</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("nakladka")}>Накладки</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("narpravl")}>Направляющие</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("roliki")}>Ролики</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("porogi")}>Пороги</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("ogranichitel")}>Ограничители</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("fiksator")}>Фиксаторы</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("cylindr")}>Цилиндры</li>
                                        <li class="class_li ml-4" onClick={() => this.onClickCat("zashelka")}>Защелки</li>
                                    </ul>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
	</section>
    );
  }
}

export default MainCatalogue;