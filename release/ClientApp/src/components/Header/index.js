import React from "react";
import './style.css';
import './topstyle.css';
import logo from '../../assets/5pereved.png';
import halva from '../../assets/halva.jpg';
import belarus from '../../assets/belarusbank.png';
import belagro from '../../assets/belagro.jpg';
import fun from '../../assets/fun.jpg';
import pokupok from '../../assets/pokupok.jpg';
import magnit from '../../assets/magnit.png';


const Header = () => {
    return (
        <div><header className="toptop mb-0">
        <div className="container">
        <div className="row">
        
        <div className="col-sm-12">
        <ul className="social-network">
        <p style={{color: "black"}}>МЫ СОТРУДНИЧАЕМ С</p>
            <li><a className="waves-effect waves-dark" href="https://www.halva.by/halva/"><img src={halva} alt="halva"></img></a></li>
            <li><a className="waves-effect waves-dark" href="https://belarusbank.by/ru/fizicheskim_licam/kredit/consumer/28985/32257"><img src={belarus} alt="belarus"></img></a></li>
            <li><a className="waves-effect waves-dark" href="https://www.belapb.by/natural/credits/legkie-pokupki/"><img src={belagro} alt="belagro"></img></a></li>
            <li><a className="waves-effect waves-dark" href="https://www.bps-sberbank.by/kartafun"><img src={fun} alt="fun"></img></a></li>
            <li><a className="waves-effect waves-dark" href="https://kartapokupok.by/ru/"><img src={pokupok} alt="pokupok"></img></a></li>
            <li><a className="waves-effect waves-dark" href="https://magnit.belarusbank.by"><img src={magnit} alt="magnit"></img></a></li>
        </ul>
        </div>
        </div>
        </div>
        </header>
        
            <header className="header_area mt-0">
            <div className="main_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="col-md-4 col-xl-6">
                                <div id="logo">
                                <button className="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                                    <a href="/"><img src={logo} alt="" title="" /></a>
                                </div>
                            </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link active" href="/">Главная</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Каталог
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="/category/mezh">Межкомнатные двери</a>
                                                <a className="dropdown-item" href="/category/vhodnie">Входные двери</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="/category/okna">Окна</a>
                                                <a className="dropdown-item" href="/category/furnitura">Фурнитура</a>
                                                {/*<a className="dropdown-item" href="/category/oboi">3D обои</a>
                                                <a className="dropdown-item" href="/category/potolki">Натяжные потолки</a>
    <a className="dropdown-item" href="/category/napol">Напольные покрытия</a>*/}
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/about" className="nav-link">О нас</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/contacts" className="nav-link">Контакты</a>
                                        </li>
                                    </ul>
                                    <div className="header_social_icon d-none d-lg-block">
                                        <ul>
                                            <li><a href="https://vk.com/id535800946"><i className="fab fa-vk"></i></a></li>
                                            <li>
                                                <a href="/twitter"><i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li><a href="https://www.instagram.com/team_belchik/"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="/skype"><i className="fab fa-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>
    );
};

export default Header;