import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";


export const ProductDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [quantity, setQuantity] = useState(1)
    const handleQuantity = (event) => { setQuantity(event.target.value) }
    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

    const handleAddItem = async () => {
        actions.currentItemCart(store.product.pricing, 0, store.product.id, quantity)
        await actions.postShoppingCartItem(store.product.id)
    }

    useEffect(() => {
        const getData = async () => {
            await actions.getOneProducts(params.idProduct);
        }
        getData()
    }, [])


    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                    <div className="">
                        <img src={store.product.image_url} className="img-fluid" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="p-3">
                        <div className="container text-center">
                            <div className="row row-cols-1 row-cols-lg-1">
                                <div className="col">
                                    <div className="p-3">
                                        <div className="mt-3 text-dark">
                                            <h3 className="text-dark text-start fw-semibold">{store.product.name}</h3>
                                            <p className="text-start mt-3">{store.product.description}</p>
                                            <div className="d-flex justify-content-between">
                                                <h5 className="text-start text-dark mb-3 fw-bold">Formato</h5>
                                                <h5 className="text-start text-dark mb-3 fw-bold">Precio</h5>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Peso {store.product.weight} kg</p>
                                                <div className="price">
                                                    <p className="fw-semibold mb-0">{store.product.pricing} €</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="container text-center">
                                        <div className="row row-cols-1 row-cols-lg-1">
                                            <form className="form" onSubmit={handleOnSubmit}>
                                                <div className="col">
                                                    <h5 className="text-start text-dark mb-3 fw-bold">Cantidad</h5>
                                                    <div className="form-outline d-flex" style={{ width: "17rem" }}>
                                                        <label className="form-label" htmlFor="typeNumber"></label>
                                                        <input min="1" max="100" type="number" id="typeNumber" className="form-control w-25"
                                                            value={quantity} onChange={handleQuantity} />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="mt-4">
                                                        <div className="d-grid gap-2">
                                                            <button className="btn btn-primary" onClick={handleAddItem} type="submit">Añadir al carrito <i className="fas fa-shopping-cart"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
