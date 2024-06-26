import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoWoofPetShop from "../../img/logo-pet-shop.jpg"
import { Context } from "../store/appContext.js";
import { Logout } from "./Logout.jsx";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const shoppingCartId = store.shoppingCarts.id


  const handleAddShoppingCart = () => {
    actions.getMyShoppingcarts(shoppingCartId)
  };


  return (
    <nav className="navbar navbar-expand-md bg-primary">
      <div className="container-fluid">
        <div className="navbar-brand ms-4">
          <Link to="/">
            <img src={logoWoofPetShop} style={{ width: "50px", height: "50px" }} alt="" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Elementos del menu colapsable */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/category" className="btn btn-primary me-3 text-primary-emphasis">
                Categorías
              </Link>
            </li>
            {store.user.is_admin ?
              <li className="nav-item">
                <Link to="/stock-products" className="btn btn-primary me-3 text-primary-emphasis">
                  Stock
                </Link>
              </li> : ''}
            {store.user.is_admin ?
              <li className="nav-item">
                <Link to="/bills-flow" className="btn btn-primary me-3 text-primary-emphasis">
                  Facturas
                </Link>
              </li> : ''}
            {store.user.is_admin ?
              <li className="nav-item">
                <Link to="/add-product" className="btn btn-primary me-3 text-primary-emphasis">
                  Agregar Producto
                </Link>
              </li> : ''}
            <li className="nav-item dropdown">
              <button type="button" className="btn btn-primary rounded text-primary-emphasis dropdown-toggle" data-bs-toggle="dropdown" id="navbarDropdown" aria-expanded="false">
                <i className="fas fa-user me-2"></i>
                {store.isLogin ? store.user.first_name : "Iniciar Sesión"}
              </button>
              <ul className="dropdown-menu dropdown-menu-end bg-primary-subtle">
                {store.isLogin ?
                  <li><Link to="/account" className="dropdown-item text-dark">
                    Mi cuenta
                  </Link></li>
                  : ''}
                {store.isLogin ?
                  <li><Logout /></li>
                  : ''}
                {store.isLogin ? '' :
                  <li><Link to="/login" className="dropdown-item text-danger">
                    Iniciar Sesión
                  </Link></li>
                }
                {store.isLogin ? '' :
                  <li><Link to="/signup" className="dropdown-item text-danger">
                    Crear Cuenta
                  </Link></li>
                }
              </ul>
              {/* <span className="border-start border-dark"></span> */}
            </li>
            <li className="nav-item">
              {/* <div className="btn-group">
                <button type="button" className="btn btn-primary rounded text-primary-emphasis me-1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-heart me-2"></i>
                  Favoritos
                </button>
                <ul className="dropdown-menu">
                  <li>Action</li>
                  <li>Another action</li>
                  <li>Something else here</li>
                </ul>
              </div> */}
            </li>
            <li className="nav-item">
              <span onClick={handleAddShoppingCart}>
                <Link to="/shopping-cart" className="btn btn-primary text-primary-emphasis">
                  <i className="fas fa-shopping-cart">
                    <span className="badge text-bg-secondary ms-1">{store.shoppingCartItems.length}</span>
                  </i>
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
