import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Service } from "../../services/Services";
import { Helmet } from 'react-helmet'
import './style.css';

class ProductLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], category: "", title: "", keywords: "", description: "" };
    let str = createBrowserHistory().location.pathname.split("/");
    let path = str[str.length - 1];
    if (path === "") path = str[str.length - 2];
    if(path === "okna") {
      this.state.title = "Купить окна пвх в Витебске - лучшие окна в Витебске. Широкий ассортимент! Доставка и замер бесплатно!"
      this.state.keywords = "пластиковые окна Витебск, окна Витебск, окна пвх"
      this.state.description = "Купить окна пвх в Витебске. ► Каталог окон представлен на сайте. ► Бесплатный замер и доставка! ► Широкий ассортимент!"
    }
    if(path === "furnitura") {
      this.state.title = "Фурнитура в Витебске - купить фурнитуру в Витебске"
      this.state.keywords = "фурнитура для дверей, фурнитура для межкомнатных дверей, фурнитура Витебск"
      this.state.description = "Купить фурнитуру для межкомнатных дверей по цене производителя в Витебске. Широкий ассортимент!"
    }
    if (path === "mezh" || path === "vhodnie") {
      if(path === "mezh") {
        this.state.category = "Межкомнатые двери"
        this.state.title = "Межкомнатные двери в Витебске - купить межкомнатные двери в Витебске. Доставка и замер бесплатно!"
        this.state.keywords = "купить межкомнатные двери, межкомнатные двери в Витебске, межкомнатные двери"
        this.state.description = "Купить межкомнатные двери по ценам производителя в Витебске. ► Каталог входных дверей представлен на сайте. ► Широкий ассортимент! ► Бесплатный замер и доставка! "
      }
      if(path === "vhodnie") {
        this.state.category = "Входные двери"
        this.state.title = "Входные двери в Витебске - купить входные двери в Витебске. Доставка и замер бесплатно!"
        this.state.keywords = "купить входные двери, входные двери в Витебске, входные двери"
        this.state.description = "Купить входные двери по ценам производителя в Витебске. ► Каталог входных дверей представлен на сайте. ► Широкий ассортимент! ► Бесплатный замер и доставка! "
      }
      Service.getProductsBySubCategory(path).then(response =>
        this.setState({ products: response, path: path })
      );
    } else {
      Service.getCategory(path).then(response => 
        this.setState({ category: response.name})
      );
      Service.getProductsByCategory(path).then(response =>
        this.setState({ products: response, path: path })
      );
    }
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
    return (
      <section id="new-arrivals" className="new-arrivals">
        <Helmet>
          <title>{ this.state.title }</title>
          <meta name="description" content={this.state.description}/>
          <meta name="keywords" content={this.state.keywords} data-react-helmet="true"/>
        </Helmet>
			<div className="container">
				<div className="section-header">
            <h2 className="section-heading text-uppercase">{this.state.category}</h2>
				</div>
				<div className="new-arrivals-content">
        <div className="row justify-content-center">
        {this.state.category["url"]=="okna" ? 
        this.state.products.map((item,index) => (
          <a href={`/product/${item.url}`} className="product-item" data-id="842" key={index}>
          <div className="product-item-wrapper">
            <div className="product-item-picture">
              <div><img src={`/product/${item.url}/${item.url}0.jpg`} alt="belchik images"/></div>
            </div>
            <div className="product-item-bottom">
              <div className="product-item-title">{item.name}</div>
              <div className="product-item-price">{item.price}</div>
            </div>
          </div>
          </a> 
          )) :
        this.state.products.map((item,index) => (
            <a href={`/product/${item.url}`} className="product-item" data-id="842" key={index}>
						<div className="product-item-wrapper">
              <div className="product-item-picture">
                <div><img src={`/product/${item.url}/${item.url}0.jpg`} alt="belchik images"/></div>
              </div>
              <div className="product-item-bottom">
                <div className="product-item-title">{item.name}</div>
                <div className="product-item-price">{item.price}</div>
              </div>
            </div>
            </a>
            ))}
					</div>
				</div> 
			</div>
		</section>
    );
  }
}

export default ProductLayout;