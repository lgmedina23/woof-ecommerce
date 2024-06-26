import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Account = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h3 className="text-center text-dark my-5">Mi datos</h3>
            <div className="col col-lg-6 container rounded mb-5">
                <div className="row">
                    <div className="col border border-primary">
                        <div className="p-3">
                            <div className="d-flex justify-content-between">
                                <h5>Mis datos</h5>
                                <Link className="text-decoration-none" to="/form">
                                    Editar <i className="fas fa-edit"></i>
                                </Link>
                            </div>
                            <hr />
                            <div className="card-body text-start mt-4 text-dark">
                                <dl>
                                    <dt>Nombre</dt>
                                    <dd>{store.user.first_name}</dd>
                                </dl>
                                <dl>
                                    <dt>Apellidos</dt>
                                    <dd>{store.user.last_name}</dd>
                                </dl>
                                <dl>
                                    <dt>Email</dt>
                                    <dd>{store.user.email}</dd>
                                </dl>
                                <dl>
                                    <dt>Número de identificación</dt>
                                    {/* <dd>{store.user.identification_type + ':' +' '}{store.user.identification_number}</dd> */}
                                    <dd>{store.user.identification_type === null ? '' : store.user.identification_type + ':' + store.user.identification_number}</dd>
                                </dl>
                                <dl>
                                    <dt>Address</dt>
                                    <dd>{store.user.address}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col border border-primary">
                        <div className="p-3">
                            <div className="d-flex">
                                <h5>Mis pedidos</h5>
                            </div>
                            <hr />
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="p-2">
                                            <img src="https://www.dia.es/product_images/130332/130332_ISO_0_ES.jpg"
                                                className="card-img-top object-fit-fill" alt="Pienso" />
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="p-2 text-dark text-start">
                                            <p className="m-0">Purina, friskies pienso para perros</p>
                                            <p className="m-0">Cantidad: 1</p>
                                            <p className="m-0">Peso: 12kg</p>
                                            <p className="m-0">Precio: 30.00€</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="p-2">
                                            <img src="https://www.trixie.es/WebRoot/StoreWeb/Shops/Trixie/5CFB/84B3/2137/4702/CD5A/0A6E/0E02/5ED7/PHO_PRO_CLIP_31544-1_h.jpg"
                                                className="card-img-top object-fit-fill" alt="Pienso" />
                                        </div>
                                    </div>
                                    <div className="col-9 mb-5">
                                        <div className="p-2 text-dark text-start">
                                            <p className="m-0">Trixie, lamb bites</p>
                                            <p className="m-0">Cantidad: 2</p>
                                            <p className="m-0">Peso: 0.100kg</p>
                                            <p className="m-0">Precio: 15.00€</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container text-start text-dark">
                                    <p className="fw-semibold">Total pedido: 45.00€</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}