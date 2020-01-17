import React from "react";

const Layout = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/productAdmin"
      >
        <div className="sidebar-brand-text mx-3">Админ</div>
      </a>

      <hr className="sidebar-divider my-0" />
      <div className="sidebar-heading">Магазин</div>
      <li className="nav-item active">
        <a className="nav-link" href="/productAdmin">
          <span>Продукты</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/categoryAdmin">
          <span>Категории</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/aboutAdmin">
          <span>О нас</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/contactsAdmin">
          <span>Контакты</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href='/' onClick={() => localStorage.removeItem("isLogin")}>
          <span>Выйти</span>
        </a>
      </li>
    </ul>
  );
};
export default Layout;
