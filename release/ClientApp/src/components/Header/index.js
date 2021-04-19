import React from "react"; 
import './style.css'; 
import logo from '../../assets/logo.png';

class Header extends React.Component { 
    constructor (props) { 
        super(props); 
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1;
        let day = dateObj.getUTCDate(); 
        let year = dateObj.getUTCFullYear(); 
        let newdate = day + "/" + month + "/" + year; 
        this.state = { now_time : newdate} 
    } 
    render() { 
        return (
            <div >
        {/* <div className="container-fluid fh5co_header_bg">
            <div className="row fh5co_mediya_center" style={{display: "flex", justifyContent: "flex-end"}}>
                <p className="mr-3">Мы сотрудничаем с</p>
                <ul style={{display: "flex"}}>
                    <li style={{width: "40px"}} className="mr-3">
                        <a className="waves-effect waves-dark" href="https://www.halva.by/halva/"><img src={halva} alt="halva"></img>
                        </a>
                    </li>
                    <li style={{width: "40px"}} className="mr-3">
                        <a className="waves-effect waves-dark" href="https://belarusbank.by/ru/fizicheskim_licam/kredit/consumer/28985/32257"><img src={belarus} alt="belarus"></img>
                        </a>
                    </li>
                    <li style={{width: "40px"}} className="mr-3">
                        <a className="waves-effect waves-dark" href="https://www.belapb.by/natural/credits/legkie-pokupki/"><img src={belagro} alt="belagro"></img>
                        </a>
                    </li>
                    <li style={{width: "40px"}} className="mr-3">
                        <a className="waves-effect waves-dark" href="https://www.bps-sberbank.by/kartafun"><img src={fun} alt="fun"></img>
                        </a>
                    </li>
                    <li style={{width: "40px"}} className="mr-3">
                        <a className="waves-effect waves-dark" href="https://kartapokupok.by/ru/"><img src={pokupok} alt="pokupok"></img>
                        </a>
                    </li>
                    <li style={{width: "40px"}}>
                        <a className="waves-effect waves-dark" href="https://magnit.belarusbank.by"><img src={magnit} alt="magnit"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div> */}
        <div className="container-fluid">
                <div className="row" style={{display: "flex", justifyContent: "space-around"}}>
                    <div className="fh5co_padding_menu">
                        <a href="/"><img src={logo} style={{height: "130px"}}></img></a>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
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
                                        <a className="dropdown-item" href="/category/mezhkomnatnie">Межкомнатные двери</a>
                                        <a className="dropdown-item" href="/category/vhodnie">Входные двери</a>
                                        {/*<div className="dropdown-divider"></div>*/}
                                        {/*<a className="dropdown-item" href="/category/okna">Окна</a>*/}
                                        {/*<a className="dropdown-item" href="/category/furnitura">Фурнитура</a> /!**/}
                                        {/*<a className="dropdown-item" href="/category/oboi">Жидкие обои</a>*/}
                                        {/*<a className="dropdown-item" href="/category/potolki">Натяжные потолки</a>*/}
                                        {/*<a className="dropdown-item" href="/category/napol">Напольные покрытия</a>*!/*/}
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="/about" className="nav-link">О нас</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contacts" className="nav-link">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="align-self-center fh5co_mediya_right">
                        <div className="text-center d-inline-block">
                            <a className="fh5co_display_table" href="https://vk.com/id535800946">
                                <div className="fh5co_verticle_middle"><i className="fa fab fa-vk"></i></div>
                            </a>
                        </div>
                        <div className="text-center d-inline-block">
                            <a href="https://instagram.com/team_belchik" className="fh5co_display_table">
                                <div className="fh5co_verticle_middle"><i className="fa fab fa-instagram"></i></div>
                            </a>
                        </div>
                        <div className="text-center d-inline-block">
                            <a className="fh5co_display_table" href="mailto:sergeibelchikvtb@gmail.com">
                                <div className="fh5co_verticle_middle"><i className="fa fa-google-plus"></i></div>
                            </a>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
        </div>
        {/* <div className="container-fluid">
            <div className="container">
                <div className="row" style={{justifyContent: "center", display: "flex"}}>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
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
                                        <a className="dropdown-item" href="/category/furnitura">Фурнитура</a> {/*
                                        <a className="dropdown-item" href="/category/oboi">Жидкие обои</a>
                                        <a className="dropdown-item" href="/category/potolki">Натяжные потолки</a>
                                        <a className="dropdown-item" href="/category/napol">Напольные покрытия</a>*/}
                                    {/*</div>
                                </li>
                                <li className="nav-item">
                                    <a href="/about" className="nav-link">О нас</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contacts" className="nav-link">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div> */}
    </div> );
    }
};
export default Header;