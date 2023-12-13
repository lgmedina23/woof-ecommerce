import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext.js";


export const BillsCard = (props) => {
    const { store, actions } = useContext(Context);


    return (
        <section className="container mt-4">
            <div className="card text-dark border-primary">
                <div className="card-header fw-bolder bg-primary-subtle">Número de factura: {props.bill.id}</div>
                <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item text-dark"><span className="fw-medium">Productos: {props.bill.bill_items.length}</span></li>
                    <li className="list-group-item text-dark"><span className="fw-medium">Precio total: </span>{props.bill.total_price}€</li>
                    <li className="list-group-item text-warning"><span className="fw-medium text-dark">Estatus: </span>{props.bill.status}</li>
                </ul>
            </div>
        </section>
    )
}