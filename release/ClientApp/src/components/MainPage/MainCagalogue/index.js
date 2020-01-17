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
	Service.getProductsBySubCategory("mezh").then(response =>
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
    console.log(this.state.products)
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
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
					<div class="leftbar p-r-20 p-r-0-sm">
						<button>
						<h4 class="m-text14 p-b-7" onClick={() => this.onClickCatCat("dveri")}>
							<button>Двери</button>
						</h4>
						</button>
						<ul class="p-b-54">
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("vhodnie")}>
								<button>Входные</button>
							</li>
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("mezh")}>
								<button>Межкомнатные</button>
							</li>
						</ul>
					</div>
					<div class="leftbar p-r-20 p-r-0-sm">
						<button>
							<h4 class="m-text14 p-b-7" onClick={() => this.onClickCatCat("okna")}>
								Окна
							</h4>
						</button>
						<ul class="p-b-54">
							{/*<li class="p-t-4">
								<a href="#" class="s-text13 ml-3 ml-2">
									Глухие
								</a>
							</li>*/}

							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("okno")}>
								<button>Окно</button>
							</li>

							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("balkonnaya")}>
								<button>Балконная группа</button>
							</li>
						</ul>
					</div>
					<div class="leftbar p-r-20 p-r-0-sm">
						<button>
							<h4 class="m-text14 p-b-7" onClick={() => this.onClickCatCat("furnitura")}>
								Фурнитура
							</h4>
						</button>
						<ul class="p-b-54">
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("cylindr")}>
									<button>Цилиндры</button>
							</li>

							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("zashelka")}>
									<button>Защелки</button>
							</li>
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("ogranichitel")}>
									<button>Ограничители</button>
							</li>
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("ruchka")}>
									<button>Ручки</button>
							</li>
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("porogi")}>
									<button>Пороги</button>
							</li>
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("fiksator")}>
									<button>Фиксаторы</button>
							</li>
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("zamok")}>
									<button>Замки</button>
							</li>
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("narpravl")}>
									<button>Направляющие</button>
							</li>
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("roliki")}>
									<button>Ролики</button>
							</li>
							<li class="p-t-4 ml-3" onClick={() => this.onClickCat("nakladka")}>
									<button>Накладки</button>
							</li>
						</ul>
					</div>
				</div>
				{/*isNullProducts == 0 ? <img src={image} alt="loader_image"></img> : this.state.hotproducts.map((item,index) => (
					//         <a href={`/product/${item.url}`} key={index} className="product-item" data-id="842">
					//         <div className="product-item-wrapper" >
					//             <div className="product-item-picture">
					//                 <div> <img src={`/product/${item.url}/${item.url}0.jpg`} alt="belchik images"/></div>
					//             </div>
					//             <div className="product-item-bottom">
					//                 <div className="product-item-title">{item.name}</div>
					//                 <div className="product-item-price">{item.price}</div>
					//             </div>
				//         </div>*/}
				<div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
					<div class="row">
						{this.state.products.map((item, index) => (
						<div class="col-sm-12 col-md-6 col-lg-4 p-b-50" key={index}>
							<div class="block2"  >
								<div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
									<img src={`/product/${item.url}/${item.url}0.jpg`} alt="belchik images"/>
									<a href={`/product/${item.url}`}>
									<div class="block2-overlay trans-0-4">
										<div class="block2-btn-addcart w-size1 trans-0-4">
											<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
												Перейти
											</button>
										</div>
									</div>
									</a>
								</div>

								<div class="block2-txt p-t-20">
									<a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
										{item.name}
									</a>

									<span class="block2-newprice m-text8 p-r-5">
										{item.price}
									</span>
								</div>
							</div>
							
						</div>	))}					
					</div>
					{/*<div class="pagination flex-m flex-w p-t-26">
						<a href="#" class="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
						<a href="#" class="item-pagination flex-c-m trans-0-4">2</a>
					</div>*/}
				</div>
			</div>
		</div>
	</section>
    );
  }
}

export default MainCatalogue;
{/*<div className="pagination flex-m flex-w p-t-26">
						<a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
						<a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
          </div>*/}
	{/*<h4 className="m-text14 p-b-32">
							Filters
						</h4>

						<div className="filter-price p-t-22 p-b-50 bo3">
							<div className="m-text15 p-b-17">
								Price
							</div>

							<div className="wra-filter-bar">
								<div id="filter-bar"></div>
							</div>

							<div className="flex-sb-m flex-w p-t-16">
								<div className="w-size11">
									<button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
										Filter
									</button>
								</div>

								<div className="s-text3 p-t-10 p-b-10">
									Range: $<span id="value-lower">610</span> - $<span id="value-upper">980</span>
								</div>
							</div>
  </div>*/}
            {/*
						<div className="filter-color p-t-22 p-b-50 bo3">
							<div className="m-text15 p-b-12">
								Color
							</div>

							<ul className="flex-w">
								<li className="m-r-10">
									<input className="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1"/>
									<label className="color-filter color-filter1" htmlFor="color-filter1"></label>
								</li>

								<li className="m-r-10">
									<input className="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2"/>
									<label className="color-filter color-filter2" htmlFor="color-filter2"></label>
								</li>

								<li className="m-r-10">
									<input className="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3"/>
									<label className="color-filter color-filter3" htmlFor="color-filter3"></label>
								</li>

								<li className="m-r-10">
									<input className="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4"/>
									<label className="color-filter color-filter4" htmlFor="color-filter4"></label>
								</li>

								<li className="m-r-10">
									<input className="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5"/>
									<label className="color-filter color-filter5" htmlFor="color-filter5"></label>
								</li>

								<li className="m-r-10">
									<input className="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6"/>
									<label className="color-filter color-filter6" htmlFor="color-filter6"></label>
								</li>

								<li className="m-r-10">
									<input className="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7"/>
									<label className="color-filter color-filter7" htmlFor="color-filter7"></label>
								</li>
							</ul>
						</div>

						<div className="search-product pos-relative bo4 of-hidden">
							<input className="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..."/>

							<button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
								<i className="fs-12 fa fa-search" aria-hidden="true"></i>
							</button>
  </div>*/}
{/*<div className="flex-w">
							<div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select className="selection-2" name="sorting">
									<option>Default Sorting</option>
									<option>Popularity</option>
									<option>Price: low to high</option>
									<option>Price: high to low</option>
								</select>
							</div>

							<div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select className="selection-2" name="sorting">
									<option>Price</option>
									<option>$0.00 - $50.00</option>
									<option>$50.00 - $100.00</option>
									<option>$100.00 - $150.00</option>
									<option>$150.00 - $200.00</option>
									<option>$200.00+</option>

								</select>
							</div>
            </div>

						<span className="s-text8 p-t-5 p-b-5">
							Showing 1–12 of 16 results
						</span>*/}
//<section id="new-arrivals" className="new-arrivals">
		// 	<div className="container">
    //     <div className="section-header">
    //       <div className="gradient-border" id="box">
    //       <h1 className="section-heading text-uppercase" style={{color: "#f3a158", fontWeight: "bold"}}>Акция!</h1>
    //         <h2 className="section-heading text-uppercase" style={{color: "#f3a158"}}> Скидка 5% пенсионерам и новосёлам<br></br>Монтаж межкомнатных от 30р, входные от 25р</h2>
    //         <h2 className="section-heading text-uppercase" style={{color: "#f3a158"}}>Звоните <a className="section-heading text-uppercase" style={{color: "#f3a158", fontSize: "40px"}} href="tel:+375(29)255-00-75">+375 (29) 255 00 75</a>!</h2>
    //         <h2 className="section-heading text-uppercase" style={{color: "#f3a158ed"}}>Условия розыгрыша в <a className="section-heading text-uppercase" style={{color: "#f3a158", fontSize: "40px"}} href="https://vk.com/id535800946?w=wall535800946_128"> ВК</a>! </h2>
    //       </div>
    //         <h2 className="section-heading text-uppercase">Каталог</h2>
    //         <h3 className="section-subheading text-muted">Самые популярные товары</h3>
    //     </div>
		// 		<div className="new-arrivals-content">
    //       <div className="row justify-content-center">
    //       {isNullProducts == 0 ? <img src={image} alt="loader_image"></img> : this.state.hotproducts.map((item,index) => (
    //         <a href={`/product/${item.url}`} key={index} className="product-item" data-id="842">
    //         <div className="product-item-wrapper" >
    //             <div className="product-item-picture">
    //                 <div> <img src={`/product/${item.url}/${item.url}0.jpg`} alt="belchik images"/></div>
    //             </div>
    //             <div className="product-item-bottom">
    //                 <div className="product-item-title">{item.name}</div>
    //                 <div className="product-item-price">{item.price}</div>
    //             </div>
    //         </div>
    //     </a>            
    //     ))}
          
		// 			</div>
		// 		</div>
		// 	</div>
    // </section>