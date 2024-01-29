import React, { useContext } from "react";
import { StockCard } from "../component/StockCard.jsx"
import { Context } from "../store/appContext.js";


export const StockProducts = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className="container mt-4 m-auto">
            <h1 className="text-center text-dark">Productos en Stock</h1>
            <div className="row row-cols-lg-7 row-cols-sm-2 row-cols-xs-2 row-cols-xl-5">
                {store.products.map((product) => (
                    <div className="col col-lg-4 d-flex justify-content-center" key={product.id}>
                        <div className="p-3">
                            <StockCard product={product} id={product.id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}