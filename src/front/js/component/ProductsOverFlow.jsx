import React, { useContext } from "react";
import { Card } from "./Card.jsx"
import { Context } from "../store/appContext.js";


export const ProductsOverFlow = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-4 m-auto">
            <div className="row row-cols-lg-7 row-cols-sm-2 row-cols-xs-2 row-cols-xl-5">
                {store.products.slice(0, 5).map((product) => (
                    <div className="col col-lg-4 d-flex justify-content-center" key={product.id}>
                        <div className="p-3">
                            <Card product={product} id={product.id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}