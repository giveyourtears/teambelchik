import React from 'react';
import Header from './components/Header';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Footer from './components/Footer';
import {routes, adminRoutes} from "./routes/index";
import createRoutes from "./helpers/createRoutes";
import store from "./helpers/configureStore";
import NotFound from "./components/NotFound";
import CallBack from "./components/CallModal"
import { Switch, Route } from 'react-router-dom';
import ModalPage from './components/CallModal/ModalPage';


const App = () => {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
          {localStorage.getItem("isLogin") === "N|z5GuOWUZsU48z}83I?5s0nOO8ENvdrR20{GmYj" ? createRoutes(adminRoutes) : createRoutes(routes)}
          <Route path="" component={NotFound}></Route>
          </Switch>
          <ModalPage/>
          <CallBack/>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
