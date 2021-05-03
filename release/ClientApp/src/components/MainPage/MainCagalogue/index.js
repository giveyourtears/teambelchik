import React, { Component } from "react";
import './style.css';
import './animatee.css';
import './menu.css';
import './font-awesome.min.css';
import GallerySlider from "../GalerySlider";
import { Service } from "../../../services/Services";
// import image from "../../../assets/325.gif"
// import image1 from "../../../assets/1.jpg"

class MainCatalogue extends Component {
  constructor(props) {
    super(props);
	this.state = { products: [] };
    this.list = [];
	Service.getProductsHot().then(response =>
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
  onClickCatCatCat = (name) =>
  {
    Service.getProductsBySubSubCategory(name).then(response =>
        this.setState({ products: response })
	);
  }
  onClickCatCat = (name) =>
  {
    Service.getProductsByCategory(name).then(response =>
        this.setState({ products: response })
	);
  }
  


  accordion = (e) =>
  {
      e.stopPropagation(); 
      if(e.target.parentElement.classList.contains('active'))
          e.target.parentElement.classList.remove('active');
      else if(e.target.parentElement.classList.contains('list'))
          e.target.parentElement.classList.add('active');
  }
  render() {
    // const isNullProducts = this.state.hotproducts;
    return (
		<section className="bgwhite p-t-55 p-b-65">
		      {/*<div className="gradient-border" id="box">
		       <h1 className="section-heading text-uppercase" style={{color: "#f3a158", fontWeight: "bold"}}>Акция!</h1>
		         <h2 className="section-heading text-uppercase" style={{color: "#f3a158"}}> Скидка 5% пенсионерам и новосёлам<br></br>Монтаж межкомнатных от 30р, входные от 25р</h2>
		        <h2 className="section-heading text-uppercase" style={{color: "#f3a158"}}>Звоните <a className="section-heading text-uppercase" style={{color: "#f3a158", fontSize: "40px"}} href="tel:+375(29)255-00-75">+375 (29) 255 00 75</span>!</h2>
		      <h2 className="section-heading text-uppercase" style={{color: "#f3a158ed"}}>Условия розыгрыша в <a className="section-heading text-uppercase" style={{color: "#f3a158", fontSize: "40px"}} href="https://vk.com/id535800946?w=wall535800946_128"> ВК</span>! </h2>
				</div>*/}
		        <div className="section-header mb-5">
            		<h2 className="section-heading text-uppercase">Каталог</h2>
				</div>
				<div className="page-shop-sidebar left--sidebar bg--white section-padding--lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12 order-1 order-lg-2">
                                <div className="tab__container">
                                    <div className="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
                                        <div className="row">
                                        {this.state.products.map((item, index) => (
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-8" key={index}>
                                                <div className="product">
                                                    <div className="product__thumb">
                                                        <a className="first__img" href={`/product/${item.url}`}>
                                                            <img src={`/product/${item.url}/${item.url}0.jpg`} alt="product_url"/>
                                                        </a>
                                                        <a className="second__img animation1" href={`/product/${item.url}`}>
                                                            <img src={`/product/${item.url}/${item.url}0.jpg`} alt="product_url_2"/>
                                                        </a>
                                                        {/* <div className="new__box">
                                                            <span className="new-label">Hot</span>
                                                        </div> */}
                                                        {/* <ul className="prize position__right__bottom d-flex">
                                                            <li>{item.price}</li>
                                                            {/* <!-- <li className="old_prize">$55.00</li> --> */}
                                                        {/* </ul> */}
                                                    </div>
                                                    <div className="product__content">
                                                        <h4 className="prize position__right__bottom d-flex">{item.price}</h4>
                                                        <h4><a className="class-a" href={`/product/${item.url}`}>{item.name}</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}	
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="menu col-lg-3 mr-5">
                                <li className="list" onClick={(e) => this.accordion(e)}><span><i className="fas fa-dungeon"></i> Двери</span> 
                                <ul className="items">
                                    <li className="list" onClick={(e) => this.accordion(e)}><span><i className="fas fa-door-open"></i> Межкомнатные</span> 
                                        <ul className="items">
                                            <li onClick={() => this.onClickCatCatCat("standart")}> <span>Стандарт</span></li>
                                            <li onClick={() => this.onClickCatCatCat("porta")}> <span>Порта</span></li>
                                            <li onClick={() => this.onClickCatCatCat("classico")}> <span>Классико</span></li>
                                            <li onClick={() => this.onClickCatCatCat("vetro")}> <span>Ветро</span></li>
                                            {/*<li onClick={() => this.onClickCatCatCat("standart")}> <span>Стандарт</span></li>*/}
                                            <li onClick={() => this.onClickCatCatCat("skinny")}> <span>Скинни</span></li>
                                            <li onClick={() => this.onClickCatCatCat("bona")}> <span>Бона</span></li>
                                            <li onClick={() => this.onClickCatCatCat("vega")}> <span>Вега</span></li>
                                            {/*<li onClick={() => this.onClickCatCatCat("other")}> <span>Другие</span></li>*/}
                                        </ul>
                                    </li>
                                    <li className="list" onClick={(e) => this.accordion(e)}><span><i className="fas fa-door-closed"></i> Входные</span> 
                                        <ul  className="items">
                                            {/*<li onClick={() => this.onClickCatCatCat("magna")}> <span>Магна</span></li>*/}
                                            {/*<li onClick={() => this.onClickCatCatCat("termo")}> <span>Термо</span></li>*/}
                                            <li onClick={() => this.onClickCatCatCat("porta_vhodnaya")}> <span>Порта</span></li>
                                            <li onClick={() => this.onClickCatCatCat("eco")}> <span>Эконом</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/*<li className="list" onClick={(e) => this.accordion(e)}><span><i className="fas fa-home"></i> Окна</span> */}
                            {/*    <ul className="items">*/}
                            {/*        <li onClick={() => this.onClickCat("okno")}> <span>Окно</span></li>*/}
                            {/*        <li onClick={() => this.onClickCat("balkonnaya")}> <span>Балконная Группа</span></li>*/}
                            {/*        <li onClick={() => this.onClickCat("setka")}> <span>Москитная Сетка</span></li>*/}
                            {/*        <li onClick={() => this.onClickCat("nizn_otliv")}> <span>Верхний Отлив</span></li>*/}
                            {/*        <li onClick={() => this.onClickCat("verhn_otliv")}> <span>Нижний Отлив</span></li>*/}
                            {/*        <li onClick={() => this.onClickCat("podokonniki")}> <span>Подоконники</span></li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                            {/*<li className="list" onClick={(e) => this.accordion(e)}><span><i className="fas fa-tools"></i> Фурнитура</span> */}
                            {/*        <ul className="items">*/}
                            {/*            <li className="list" onClick={(e) => this.accordion(e)}><span><i className="fas fa-hand-rock"></i> Ручки</span>*/}
                            {/*                <ul  className="items">*/}
                            {/*                    <li onClick={() => this.onClickCatCatCat("rucetti")}><span>Rucetti</span></li>*/}
                            {/*                    <li onClick={() => this.onClickCatCatCat("morelli")}><span>Morelli</span></li>*/}
                            {/*                    /!* <li onClick={() => this.onClickCat("bravo")}><span>Bravo</span></li> *!/*/}
                            {/*                    /!* <li onClick={() => this.onClickCat("lockstyle")} className="mb-3" style={{borderBottom: "2px solid black"}}><span>LockStyle</span></li> *!/*/}
                            {/*                </ul> */}
                            {/*            </li>*/}
                            {/*            <li onClick={() => this.onClickCat("zamok")}> <span>Замки</span></li>*/}
                            {/*            <li onClick={() => this.onClickCat("nakladka")}> <span>Накладки</span></li>*/}
                            {/*            <li onClick={() => this.onClickCat("narpravl")}> <span>Направляющие</span></li>*/}
                            {/*            <li onClick={() => this.onClickCat("roliki")}> <span>Ролики</span></li>*/}
                            {/*            <li onClick={() => this.onClickCat("porogi")}> <span>Пороги</span></li>*/}
                            {/*            <li onClick={() => this.onClickCat("ogranichitel")}> <span>Ограничители</span></li>*/}
                            {/*            <li onClick={() => this.onClickCat("fiksator")}> <span>Фиксаторы</span></li>*/}
                            {/*            <li onClick={() => this.onClickCat("cylindr")}> <span>Цилиндры</span></li>*/}
                            {/*            <li onClick={() => this.onClickCat("zashelka")}> <span>Защелки</span></li>*/}
                            {/*        </ul>*/}
                            {/*    </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
                <GallerySlider />
	</section>
    );
  }
}

export default MainCatalogue;