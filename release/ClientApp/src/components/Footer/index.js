import React from "react";
import './style.css';
import logo from '../../assets/5pereved (1).png';
const Footer = () => {
    return (
        <div>
        <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
        <div className="flex-w p-b-90">
			<div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
				<h4 className="s-text12 p-b-20">
					Контакты
				</h4>
				<div> 
                    <p className="s-text7 w-size27 mb-2">
                        <a href="tel:+375(29)255-00-75" className="fs-18 color1 p-r-20 fas fa-phone"> +375 (29) 255 00 75</a>
                    </p>
                    <p className="s-text7 w-size27">
                        <a href="https://yandex.by/maps/154/vitebsk/?ll=30.224457%2C55.169461&mode=search&oid=242052702764&ol=biz&sctx=ZAAAAAgBEAAaKAoSCeCD1y5tND5AEXCYaJCCl0tAEhIJS2z9%2F3%2BN7z8RXUm6%2B5%2BZ1T8iBQABAgQFKAowADjz4oP9ldXR2XNA7aINSAFVzczMPlgAagJ1YXAAnQHNzEw9oAEAqAEAvQG7dwWQwgEprMTc24UH3fiA0b4Dz6yT1a4C1Za3hMEG1ZqQyfcEzszarIsEy4G6hwQ%3D&sll=30.224457%2C55.169461&sspn=0.003852%2C0.001319&text=%D0%B4%D0%B2%D0%B5%D1%80%D0%B8%20%D0%B2%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA&z=19"><i href="mailto:sergeibelchikvtb@gmail.com" className="fs-18 color1 p-r-20 fas fa-address-card"> г. Витебск, пр-т Победы 15 <br></br> ТЦ МЕГА пав. 253-1</i></a>
                    </p>
				</div>
			</div>	

			<div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
				<h4 className="s-text12 p-b-20">
					Каталог
				</h4>

				<ul>
					<li className="p-b-9">
						<a href="/category/mezh" className="s-text7">
							Межкомнатные двери
						</a>
					</li>

					<li className="p-b-9">
						<a href="/category/vhodnie" className="s-text7">
							Входные двери
						</a>
					</li>
					<li className="p-b-9">
						<a href="/category/furnitura" className="s-text7">
							Фурнитура
						</a>
					</li>
					<li className="p-b-9" hidden>
						<a href="/category/oboi" className="s-text7">
							3D обои
						</a>
					</li>

					<li className="p-b-9" hidden>
						<a href="/category/napol" className="s-text7">
							Напольные покрытия
						</a>
                    </li>
                    <li className="p-b-9" hidden>
						<a href="/category/potolki" className="s-text7">
							Натяжные потолки
						</a>
					</li>
					<li className="p-b-9">
					<a href="/category/okna" className="s-text7">
						Окна
					</a>
				</li>
				</ul>
			</div>

			<div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
				<h4 className="s-text12 p-b-20">
					Страницы
				</h4>

				<ul>
					<li className="p-b-9">
						<a href="/about" className="s-text7">
							О нас
						</a>
					</li>

					<li className="p-b-9">
						<a href="/contacts" className="s-text7">
							Контакты
						</a>
					</li>
				</ul>
			</div>

			<div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
				<h4 className="s-text12 p-b-20">
					Социальные сети
				</h4>
				<ul>
					<li className="p-b-9">
                    <a href="https://vk.com/id535800946" className="fs-18 color1 p-r-20 fab fa-vk"> Vk</a>
					</li>

					<li className="p-b-9">
                    <a href="https://www.instagram.com/team_belchik/" className="fs-18 color1 p-r-20 fab fa-instagram"> Instagram</a>
					</li>

					<li className="p-b-9" hidden>
                    <a href="/twitter" className="fs-18 color1 p-r-20 fab fa-twitter"> Twitter</a>
					</li>

					<li className="p-b-9" hidden>
                    <a href="/skype" className="fs-18 color1 p-r-20 fab fa-skype"> Skype</a>
					</li>
				</ul>
			</div>

			<div className="w-size8 p-t-10 p-l-15 p-r-15 respon3">
                <div>
                <a href="/"><img src={logo} alt="" title="" /></a>
            </div>
			</div>
        </div>
        </footer>
        <footer className="copyright_part">
        <div className="container">
            <div className="row align-items-center">
                <p className="footer-text m-0 col-lg-8 col-md-12">
Copyright &copy; 2020 All rights reserved</p>
<p className="footer-text m-0 col-lg-8 col-md-12" style={{fontSize: "15px", marginLeft: "15px !important"}}>
   Нужен новый сайт? Пишите сюда <a href="https://vk.com/giveyourtears">@giv</a></p>

                <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                    <a href="https://vk.com/id535800946"><i className="fab fa-vk"></i></a>
                    <a href="/twitter" hidden> <i className="fab fa-twitter"></i> </a>
                    <a href="https://www.instagram.com/team_belchik/"><i className="fab fa-instagram"></i></a>
                    <a href="/skype" hidden><i className="fab fa-skype"></i></a>
                </div>
            </div>
        </div>
    </footer></div>
    );
};

export default Footer;