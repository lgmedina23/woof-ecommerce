import React from "react";
import { Card } from "../component/Card.jsx";
import { ProductsOverFlow } from "../component/ProductsOverFlow.jsx";
import { CategoryFood } from "../component/CategoryFood.jsx";
import { CategorySnack } from "../component/CategorySnack.jsx";
import { CategoryToys } from "../component/CategoryToys.jsx";
import { CategoryAccessories } from "../component/CategoryAccessories.jsx";


export const Category = () => {

    return (
        <div className="container">
            <div className="pienso">
                <h1 className="text-center my-5 text-dark">Pienso</h1>
                <div className="d-flex justify-content-center">
                    <CategoryFood />
                </div>
            </div>
            <div className="snacks">
                <h1 className="text-center my-5 text-dark">Snacks</h1>
                <div className="d-flex justify-content-center">
                    <CategorySnack />
                </div>
            </div>
            <div className="juguetes">
                <h1 className="text-center my-5 text-dark">Juguetes</h1>
                <div className="d-flex justify-content-center">
                    <CategoryToys />
                </div>
            </div>
            <div className="accesorios mb-5">
                <h1 className="text-center my-5 text-dark">Accesorios</h1>
                <div className="d-flex justify-content-center">
                    <CategoryAccessories />
                </div>
            </div>
        </div>
    )
}