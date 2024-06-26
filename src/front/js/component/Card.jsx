import React from "react";
import { StarReating } from "./StarReating.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { QuantityButton } from "./QuantityButton.jsx";
import { Modal } from "./Modal.jsx";

export const Card = (props) => {
    const { store, actions } = useContext(Context);


    const handleAddItem = async () => {
        actions.currentItemCart(props.product.pricing, 0, props.product.id, 1)
        await actions.postShoppingCartItem(props.product.id)
    }

    return (
        <section>
            <div className="container">
                <div className="card" style={{ width: '15rem' }}>
                    {/* <div className="d-flex justify-content-end p-3">
                        <button type="button" className="btn btn-outline-primary btn-sm rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                            style={{ width: '35px', height: '35px' }}>
                            <i className="far fa-heart"></i>
                        </button>
                    </div> */}
                    <Link to={"/products/" + props.product.id} className="text-center my-4">
                        <img src={props.product.image_url}
                            className="card-img-top object-fit-fill rounded" alt="Pienso" style={{ width: '150px', height: '150px' }} />
                    </Link>
                    <div className="card-body text-dark">
                        <div className="d-flex justify-content-between mb-1">
                            <p className="mb-0 fw-semibold fs-5">{props.product.name}</p>
                            <p className="text-dark mb-0 fw-semibold">{props.product.pricing} $</p>
                        </div>
                        <div className="d-flex justify-content-between mb-1">
                            <p>Disponible: <span className="fw-semibold">{props.product.stock}</span></p>
                            {/* <div className="ms-auto text-warning">
                                <StarReating />
                            </div> */}
                        </div>
                        <div className="d-flex mb-4">
                            <Link to={"/products/" + props.product.id}>Mas detalles</Link>
                        </div>
                        <div className="d-grid">
                            {store.isLogin ? 
                            <button type="button" onClick={handleAddItem} className="btn btn-primary">Añadir al carrito<i className="fas fa-shopping-cart ms-2"></i></button> 
                            : 
                            <Modal />}
                            {/* <button type="button" onClick={handleAddItem} className="btn btn-primary">Añadir al carrito<i className="fas fa-shopping-cart ms-2"></i></button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}