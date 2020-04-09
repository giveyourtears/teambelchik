import React, { Component } from "react";
import image from '../../assets/home.jpg';
import '../About/style.css';
import { Service } from "../../services/Services";

var divStyle = {
    backgroundImage: `url(${image})`
  };

class CallBackPage extends Component {
  constructor(props) {
    super(props);
    this.state = { callback: [] };
    Service.getAllCallbacks().then(resp => this.setState({ callback: resp }));
  }
  delete = (id) =>{
    Service.deleteCallback(id);
    Service.getAllCallbacks().then(resp => this.setState({ callback: resp }));
  }
  render() {
    return (
        <section id="why-us" className="wow fadeIn">
            <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m mb-4" style={divStyle} >
                <h2 className="l-text2 t-center">
                    Обратные звонки
                </h2>
            </section>
            <div className="container-fluid" id="aboutSection">
                <header className="section-header mb-3" style={{display: "flex", flexDirection: "column"}}>
                    <h3>Список</h3>
                </header>
                <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Номер телефона</th>
                                <th scope="col">Дата звонка</th>
                                <th scope="col">Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.callback.map((item, index) => (
                            <tr index={index}>
                                <th scope="row">{index}</th>
                                <td>{item.name}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.dateNow}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={()=>this.delete(item.id)}>
                                        Удалить
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            </div>
        </section>
    );
  }
}
export default CallBackPage;

