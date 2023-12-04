import React, { useEffect, useState } from "react";
import { ProductsOverFlow } from "./ProductsOverFlow.jsx";
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
       // Tengo que actualizar el currentItemcart
       //tengo que actualizar el post del carrito
    }
    
    const handleAddItem = async () => {
        actions.currentItemCart(store.product.pricing, 0, store.product.id, quantity)
        await actions.postShoppingCartItem(store.product.id)
    }

    useEffect( () => {
        const getData = async () => {
            await actions.getOneProducts(params.idProduct);
        }
        getData()
    }, [])


    return (
        <div className="container text-center">
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3">
                            <div id="carouselExampleIndicators" className="carousel slide p-3 carousel-dark">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw5bc9bb3c/images/pienso_perros_royal_canin_maxi_adult_ROY153637_M.jpg?sw=528&sh=528"
                                            className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw72b754a0/images/pienso_perros_royal_canin_maxi_adult_ROY153637_M%20(4).jpg?sw=528&sh=528"
                                            className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw3578efc8/images/pienso_perros_royal_canin_maxi_adult_ROY153637_M%20(6).jpg?sw=528&sh=528"
                                            className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <div className="container text-center">
                                <div className="row row-cols-1 row-cols-lg-1 g-2 g-lg-3">
                                    <div className="col">
                                        <div className="p-3">
                                            <div className="mt-3 text-dark">
                                                <h3 className="text-dark text-start fw-semibold">{store.product.name}</h3>
                                                <p className="text-start mt-3">{store.product.description}</p>
                                                <div className="d-flex justify-content-between">
                                                    <h5 className="text-start text-dark mb-3 fw-bold">Formato</h5>
                                                    <h5 className="text-start text-dark mb-3 fw-bold">Precio</h5>
                                                </div>
                                                <div className="container d-flex justify-content-between">
                                                    <p>Saco de {store.product.weight} kg</p>
                                                    <div className="price">
                                                        <p className="fw-semibold mb-0">{store.product.pricing} €</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="container text-center">
                                            <div className="row row-cols-1 row-cols-lg-2 g-lg-3">

                                                <form className="form ms-3" onSubmit={handleOnSubmit}>
                                                    <div className="col">
                                                        <h5 className="text-start text-dark mb-3 fw-bold">Cantidad</h5>
                                                        <div className="form-outline d-flex" style={{ width: "22rem" }}>
                                                            <label className="form-label" htmlFor="typeNumber"></label>
                                                            <input min="1" max="100" type="number" id="typeNumber" className="form-control w-25"
                                                                value={quantity} onChange={handleQuantity} />
                                                            {/* <button type="submit" className="btn btn-primary ms-3">Modificar </button> */}
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-3 mt-4">
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
        </div>
    )
}
