import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "./Card.jsx";


export const CategoryToys = () => {
    const { store, actions } = useContext(Context);
    const filteredProducts = store.products.filter((product) => product.categorie_id === 3);

    return (
        <div className="container mt-4 m-auto">
            <div className="row row-cols-lg-7 row-cols-sm-2 row-cols-xs-2 row-cols-xl-5">
                {filteredProducts.map((product) => (
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