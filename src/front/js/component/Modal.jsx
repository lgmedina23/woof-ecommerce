import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { QuantityButton } from "./QuantityButton.jsx";
import { Link } from "react-router-dom";


export const Modal = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-grid">
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Añadir al carrito
                <i className="fas fa-shopping-cart ms-2"></i>
            </button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ups...</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Primero debes iniciar sesión</p>
                        </div>
                        <div className="modal-footer">
                        <Link to={"/login"} onClick={() => window.reload()} className="btn btn-primary">Iniciar Sesión</Link>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}