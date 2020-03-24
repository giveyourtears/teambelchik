import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Service } from "../../services/Services";
import './style.css';
import image from "../../assets/325.gif"
import image2 from "../../assets/335.jpg"

class ProductLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], category: "" };
    let str = createBrowserHistory().location.pathname.split("/");
    let path = str[str.length - 1];
    if (path === "") path = str[str.length - 2];
    if (path === "mezh" || path === "vhodnie") {
      if(path === "mezh") {
        this.state.category = "Межкомнатые двери"
      }
      if(path === "vhodnie") {
        this.state.category = "Входные двери"
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
  render() {
    const isNullProducts = this.state.products;
    console.log(this.state)
    return (
      <section id="new-arrivals" class="new-arrivals">
			<div class="container">
				<div class="section-header">
            <h2 className="section-heading text-uppercase">{this.state.category}</h2>
				</div>
				<div class="new-arrivals-content">
        <div class="row justify-content-center">
        {this.state.category["url"]=="okna" ? 
        this.state.products.map((item,index) => (
          <a href={`/product/${item.url}`} class="product-item" data-id="842">
          <div class="product-item-wrapper" key={index}>
            <div class="product-item-picture">
              <div><img src={`/product/${item.url}/${item.url}0.jpg`} alt="belchik images"/></div>
            </div>
            <div class="product-item-bottom">
              <div class="product-item-title">{item.name}</div>
              <div class="product-item-price">{item.price}</div>
            </div>
          </div>
          </a> 
          )) :
        this.state.products.map((item,index) => (
            <a href={`/product/${item.url}`} class="product-item" data-id="842">
						<div class="product-item-wrapper" key={index}>
              <div class="product-item-picture">
                <div><img src={`/product/${item.url}/${item.url}0.jpg`} alt="belchik images"/></div>
              </div>
              <div class="product-item-bottom">
                <div class="product-item-title">{item.name}</div>
                <div class="product-item-price">{item.price}</div>
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