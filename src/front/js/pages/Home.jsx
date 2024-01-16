import React from "react";
import { Link } from "react-router-dom";
import { ProductsOverFlow } from "../component/ProductsOverFlow.jsx";
import { CardOffers } from "../component/CardOffers.jsx";
import { CardCategory } from "../component/CardCategory.jsx";
import { CarouselHome } from "../component/CarouselHome.jsx";


export const Home = () => {
	

	return (
		<div className="body">
			<CarouselHome />
			<div className="container mb-3">
				<h1 className="mb-2 text-center mb-4 mt-4 fw-semibold text-dark">Top productos</h1>
				<ProductsOverFlow />
			</div>
			{/* <div className="container">
				<h1 className="text-center fw-semibold text-dark my-4">Ofertas 🔥</h1>
				<CardOffers />
			</div> */}
			<div className="container mb-5">
				<h1 className="text-center my-4 fw-semibold text-dark">Categorías</h1>
				<CardCategory />
			</div>
		</div>
	);
};
