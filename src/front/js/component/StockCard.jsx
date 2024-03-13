import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Modal } from "./Modal.jsx";

export const StockCard = (props) => {
    const { store, actions } = useContext(Context);


    return (
        <section>
            <div className="container">
                <div className="card" style={{ width: '15rem' }}>
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
                            <Link to={"/stock-details/" + props.product.id}>Editar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}