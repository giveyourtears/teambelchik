import React from "react";
import './style.css';
import logo from '../../assets/5pereved (1).png';
import footer from '../../assets/footer_sub_tipik.png';
import halva from '../../assets/halva.jpg'; 
import belarus from '../../assets/belarusbank.png'; 
import belagro from '../../assets/belagro.jpg'; 
import fun from '../../assets/fun.jpg'; 
import pokupok from '../../assets/pokupok.jpg'; 
import magnit from '../../assets/magnit.png'; 

const Footer = () => {
	let dateObj = new Date();
	let month = dateObj.getUTCMonth() + 1;
	let day = dateObj.getUTCDate(); 
	let year = dateObj.getUTCFullYear(); 
    return (
		<div>
			<div class="container-fluid fh5co_footer_bg pb-3">
				<div class="container animate-box fadeInUp animated-fast">
					<div class="row">
						<div class="col-12 spdp_right py-5">{/*<img src={logo} alt="img" class="footer_logo"/>*/}</div>
						<div class="clearfix"></div>
						<div class="col-12 col-md-4 col-lg-3">
							<div class="footer_main_title py-3"> О нас</div>
							<div class="footer_sub_about pb-3">
								У нас вы можете найти лучшие двери по хорошим ценам. 
								От нас вы получите только хорошие эмоции, а самое главное наша продукция качественная и прослужит долгие годы.
							</div>
							<div class="footer_mediya_icon">
								<div class="text-center d-inline-block"><a href="https://vk.com/id535800946" class="fh5co_display_table_footer">
									<div class="fh5co_verticle_middle"><i class="fa fab fa-vk"></i></div>
								</a></div>
								<div class="text-center d-inline-block"><a href="mailto:sergeibelchikvtb@gmail.com" class="fh5co_display_table_footer">
									<div class="fh5co_verticle_middle"><i class="fa fa-google-plus"></i></div>
								</a></div>
								<div class="text-center d-inline-block"><a href="https://instagram.com/team_belchik" class="fh5co_display_table_footer">
									<div class="fh5co_verticle_middle"><i class="fa fab fa-instagram"></i></div>
								</a></div>
							</div>
						</div>
						<div class="col-12 col-md-3 col-lg-2">
							<div class="footer_main_title py-3"> Категории</div>
							<ul class="footer_menu">
								<li><a href="/category/mezh" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Межкомнатые</a></li>
								<li><a href="/category/vhodnie" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Входные</a></li>
								<li><a href="/category/furnitura" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Фурнитура</a></li>
								<li><a href="/category/okna" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Окна</a></li>
							</ul>
						</div>
						<div class="col-12 col-md-5 col-lg-3 position_footer_relative">
							<div class="footer_main_title py-3"> Наши плюсы!</div>
							<div class="footer_makes_sub_font"> {`${day}/${month}/${year}`}</div>
							<p class="footer_post pb-4" style={{fontSize: "15px"}}> Самые лучшие цены в городе </p>
							<div class="footer_makes_sub_font"> {`${day-1}/${month}/${year}`}</div>
							<p class="footer_post pb-4" style={{fontSize: "15px"}}> Только у нас: бесплатный замер и доставка! </p>
							<div class="footer_makes_sub_font"> {`${day-2}/${month}/${year}`}</div>
							<p class="footer_post pb-4" style={{fontSize: "15px"}}> Профессиональный монтаж </p>
							<div class="footer_position_absolute"><img src={footer} alt="img" class="width_footer_sub_img"/></div>
						</div>
						<div class="col-12 col-md-12 col-lg-4 ">
							<div class="footer_main_title py-3"> Мы сотрудничаем:</div>
							<a href="https://www.bps-sberbank.by/kartafun" class="footer_img_post_6"><img src={fun} alt="img"/></a>
							<a href="https://www.halva.by/halva/" class="footer_img_post_6"><img src={halva} alt="img"/></a>
							<a href="https://www.belapb.by/natural/credits/legkie-pokupki/" class="footer_img_post_6"><img src={belagro} alt="img"/></a>
							<a href="https://belarusbank.by/ru/fizicheskim_licam/kredit/consumer/28985/32257" class="footer_img_post_6"><img src={belarus} alt="img"/></a>
							<a href="https://kartapokupok.by/ru/" class="footer_img_post_6"><img src={pokupok} alt="img"/></a>
							<a href="https://magnit.belarusbank.by" class="footer_img_post_6"><img src={magnit} alt="img"/></a>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid fh5co_footer_right_reserved">
				<div class="container">
					<div class="row">
						<div class="col-12 col-md-8 py-4 Reserved" style={{display: "flex", flexDirection: "column"}}> 
							<div>© Copyright 2020, All rights reserved. Цены и информация, представленные на данном сайте, приведены в ознакомительных целях, не являются публичной офертой и могут быть изменены.</div>
							<div>
								Нужен новый сайт? Пишите сюда <a href="https://vk.com/giveyourtears" style={{color: "#ff8b23"}}>@giv</a>. 
							</div>
						</div>
							<div class="col-12 col-md-4 spdp_right py-4">
								<a href="/" class="footer_last_part_menu">Главная</a>
								<a href="/about" class="footer_last_part_menu">О нас</a>
								<a href="/contacts" class="footer_last_part_menu">Контакты</a>
							</div>
					</div>
				</div>
			</div>
		</div>
		// 	<footer>
        // 	<div className="footer-top">
		//         <div className="container-fluid">
		//         	<div className="row">
		//         		<div className="col-md-4 footer-about wow fadeInUp animated" style={{visibility: "visible", animationName: "fadeInUp"}}>
		//         			<img className="logo-footer" src={logo} alt="logo-footer" data-at2x="assets/img/logo.png" width="74" height="85"/>
		//         			<p>
		//         				We are a young company always looking for new and creative ideas to help you with our products in your everyday work.
		//         			</p>
		//         			<p><a href="#">Our Team</a></p>
	    //                 </div>
		//         		<div className="col-md-3 offset-md-1 footer-contact wow fadeInDown animated" style={{visibility: "visible", animationName: "fadeInDown"}}>
		//         			<h3>Contact</h3>
		//                 	<p><i className="fas fa-map-marker-alt"></i> Via Rossini 10, 10136 Turin Italy</p>
		//                 	<p><i className="fas fa-phone"></i> Phone: (0039) 333 12 68 347</p>
		//                 	<p><i className="fas fa-envelope"></i> Email: <a href="mailto:hello@domain.com">hello@domain.com</a></p>
		//                 	<p><i className="fab fa-skype"></i> Skype: you_online</p>
	    //                 </div>
	    //                 <div className="col-md-4 footer-links wow fadeInUp animated" style={{visibility: "visible", animationName: "fadeInUp"}}>
	    //                 	<div className="row">
	    //                 		<div className="col">
	    //                 			<h3>Links</h3>
	    //                 		</div>
	    //                 	</div>
	    //                 	<div className="row">
	    //                 		<div className="col-md-6">
	    //                 			<p><a className="scroll-link" href="#top-content">Home</a></p>
	    //                 			<p><a href="#">Features</a></p>
	    //                 			<p><a href="#">How it works</a></p>
	    //                 			<p><a href="#">Our clients</a></p>
	    //                 		</div>
	    //                 		<div className="col-md-6">
	    //                 			<p><a href="#">Plans &amp; pricing</a></p>
	    //                 			<p><a href="#">Affiliates</a></p>
	    //                 			<p><a href="#">Terms</a></p>
	    //                 		</div>
	    //                 	</div>
	    //                 </div>
		//             </div>
		//         </div>
	    //     </div>
	    //     <div className="footer-bottom">
	    //     	<div className="container">
	    //     		<div className="row">
	    //        			<div className="col-md-6 footer-copyright">
	    //                 	© Bootstrap Footer Template by <a href="https://azmind.com">AZMIND</a>
	    //                 </div>
	    //        			<div className="col-md-6 footer-social">
	    //                 	<a href="#"><i className="fab fa-facebook-f"></i></a> 
		// 					<a href="#"><i className="fab fa-twitter"></i></a> 
		// 					<a href="#"><i className="fab fa-google-plus-g"></i></a> 
		// 					<a href="#"><i className="fab fa-instagram"></i></a> 
		// 					<a href="#"><i className="fab fa-pinterest"></i></a>
	    //                 </div>
	    //        		</div>
	    //     	</div>
	    //     </div>
        // </footer>
//         {/* <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
//         <div className="flex-w p-b-90">
// 			<div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
// 				<h4 className="s-text12 p-b-20">
// 					Контакты
// 				</h4>
// 				<div> 
//                     <p className="s-text7 w-size27 mb-2">
//                         <a href="tel:+375(29)255-00-75" className="fs-18 color1 p-r-20 fas fa-phone"> +375 (29) 255 00 75</a>
//                     </p>
//                     <p className="s-text7 w-size27">
//                         <a href="https://yandex.by/maps/154/vitebsk/?ll=30.224457%2C55.169461&mode=search&oid=242052702764&ol=biz&sctx=ZAAAAAgBEAAaKAoSCeCD1y5tND5AEXCYaJCCl0tAEhIJS2z9%2F3%2BN7z8RXUm6%2B5%2BZ1T8iBQABAgQFKAowADjz4oP9ldXR2XNA7aINSAFVzczMPlgAagJ1YXAAnQHNzEw9oAEAqAEAvQG7dwWQwgEprMTc24UH3fiA0b4Dz6yT1a4C1Za3hMEG1ZqQyfcEzszarIsEy4G6hwQ%3D&sll=30.224457%2C55.169461&sspn=0.003852%2C0.001319&text=%D0%B4%D0%B2%D0%B5%D1%80%D0%B8%20%D0%B2%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA&z=19"><i href="mailto:sergeibelchikvtb@gmail.com" className="fs-18 color1 p-r-20 fas fa-address-card"> г. Витебск, пр-т Победы 15 <br></br> ТЦ МЕГА пав. 253-1</i></a>
//                     </p>
// 				</div>
// 			</div>	

// 			<div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
// 				<h4 className="s-text12 p-b-20">
// 					Каталог
// 				</h4>

// 				<ul>
// 					<li className="p-b-9">
// 						<a href="/category/mezh" className="s-text7">
// 							Межкомнатные двери
// 						</a>
// 					</li>

// 					<li className="p-b-9">
// 						<a href="/category/vhodnie" className="s-text7">
// 							Входные двери
// 						</a>
// 					</li>
// 					<li className="p-b-9">
// 						<a href="/category/furnitura" className="s-text7">
// 							Фурнитура
// 						</a>
// 					</li>
// 					<li className="p-b-9" hidden>
// 						<a href="/category/oboi" className="s-text7">
// 							3D обои
// 						</a>
// 					</li>

// 					<li className="p-b-9" hidden>
// 						<a href="/category/napol" className="s-text7">
// 							Напольные покрытия
// 						</a>
//                     </li>
//                     <li className="p-b-9" hidden>
// 						<a href="/category/potolki" className="s-text7">
// 							Натяжные потолки
// 						</a>
// 					</li>
// 					<li className="p-b-9">
// 					<a href="/category/okna" className="s-text7">
// 						Окна
// 					</a>
// 				</li>
// 				</ul>
// 			</div>

// 			<div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
// 				<h4 className="s-text12 p-b-20">
// 					Страницы
// 				</h4>

// 				<ul>
// 					<li className="p-b-9">
// 						<a href="/about" className="s-text7">
// 							О нас
// 						</a>
// 					</li>

// 					<li className="p-b-9">
// 						<a href="/contacts" className="s-text7">
// 							Контакты
// 						</a>
// 					</li>
// 				</ul>
// 			</div>

// 			<div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
// 				<h4 className="s-text12 p-b-20">
// 					Социальные сети
// 				</h4>
// 				<ul>
// 					<li className="p-b-9">
//                     <a href="https://vk.com/id535800946" className="fs-18 color1 p-r-20 fab fa-vk"> Vk</a>
// 					</li>

// 					<li className="p-b-9">
//                     <a href="https://www.instagram.com/team_belchik/" className="fs-18 color1 p-r-20 fab fa-instagram"> Instagram</a>
// 					</li>

// 					<li className="p-b-9" hidden>
//                     <a href="/twitter" className="fs-18 color1 p-r-20 fab fa-twitter"> Twitter</a>
// 					</li>
// 					<li className="p-b-9" hidden>
//                     <a href="/skype" className="fs-18 color1 p-r-20 fab fa-skype"> Skype</a>
// 					</li>
// 				</ul>
// 			</div>

// 			<div className="w-size8 p-t-10 p-l-15 p-r-15 respon3">
//                 <div>
//                 <a href="/"><img src={logo} alt="" title="" /></a>
//             </div>
// 			</div>
//         </div>
//         </footer>
//         <footer className="copyright_part">
//         <div className="container">
//             <div className="row align-items-center">
//                 <p className="footer-text m-0 col-lg-8 col-md-12">
// Copyright &copy; 2020 All rights reserved</p>
// <p className="footer-text m-0 col-lg-8 col-md-12" style={{fontSize: "15px", marginLeft: "15px !important"}}>
//    Нужен новый сайт? Пишите сюда <a href="https://vk.com/giveyourtears">@giv</a></p>

//                 <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
//                     <a href="https://vk.com/id535800946"><i className="fab fa-vk"></i></a>
//                     <a href="/twitter" hidden> <i className="fab fa-twitter"></i> </a>
//                     <a href="https://www.instagram.com/team_belchik/"><i className="fab fa-instagram"></i></a>
//                     <a href="/skype" hidden><i className="fab fa-skype"></i></a>
//                 </div>
//             </div>
//         </div>
// 	</footer> */}
// 					<li className="p-b-9" hidden>
//                     <a href="/twitter" className="fs-18 color1 p-r-20 fab fa-twitter"> Twitter</a>
// 					</li>

// 					<li className="p-b-9" hidden>
//                     <a href="/skype" className="fs-18 color1 p-r-20 fab fa-skype"> Skype</a>
// 					</li>
// 				</ul>
// 			</div>

// 			<div className="w-size8 p-t-10 p-l-15 p-r-15 respon3">
//                 <div>
//                 <a href="/"><img src={logo} alt="" title="" /></a>
//             </div>
// 			</div>
//         </div>
//         </footer>
//         <footer className="copyright_part">
//         <div className="container">
//             <div className="row align-items-center">
//                 <p className="footer-text m-0 col-lg-8 col-md-12">
// Copyright &copy; 2020 All rights reserved</p>
// <p className="footer-text m-0 col-lg-8 col-md-12" style={{fontSize: "15px", marginLeft: "15px !important"}}>
//    Нужен новый сайт? Пишите сюда <a href="https://vk.com/giveyourtears">@giv</a></p>

//                 <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
//                     <a href="https://vk.com/id535800946"><i className="fab fa-vk"></i></a>
//                     <a href="/twitter" hidden> <i className="fab fa-twitter"></i> </a>
//                     <a href="https://www.instagram.com/team_belchik/"><i className="fab fa-instagram"></i></a>
//                     <a href="/skype" hidden><i className="fab fa-skype"></i></a>
//                 </div>
//             </div>
//         </div>
//     </footer></div>
    );
};

export default Footer;