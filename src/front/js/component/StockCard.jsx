import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Modal } from "./Modal.jsx";

export const StockCard = (props) => {
    const { store, actions } = useContext(Context);

    const handleDelete = async (event) => {
        event.preventDefault();
        actions.deleteOneProduct();
    }

    return (
        <section>
            <div className="container">
                <div className="card" style={{ width: '15rem' }}>
                    <div className="d-flex justify-content-end me-3 mt-3">
                        <Link to={"/edit-product/" + props.product.id} className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center shadow-1-strong"
                            style={{ width: '35px', height: '35px' }}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                    </div>
                    <Link to={"/products/" + props.product.id} className="text-center my-4">
                        <img src={props.product.image_url}
                            className="card-img-top object-fit-fill rounded" alt="Pienso" style={{ width: '150px', height: '150px' }} />
                    </Link>
                    <div className="card-body text-dark">
                        <div className="d-flex justify-content-between mb-1">
                            <p className="mb-0 fw-semibold fs-5">{props.product.name}</p>
                            <p className="text-dark mb-0 fw-semibold">{props.product.pricing}$</p>
                        </div>
                        <div className="d-flex justify-content-between mb-1">
                            <p>Disponible: <span className="fw-semibold">{props.product.stock}</span></p>
                        </div>
                        <div className="d-flex mb-4">
                            <Link to={"/products/" + props.product.id}>Mas detalles</Link>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="button" onClick={handleDelete}>
                                <i className="fa-regular fa-trash-can me-1"></i>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}