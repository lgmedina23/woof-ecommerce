import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";



export const EditProduct = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const id = store.product.id;
    const [name, setName] = useState(store.product.name);
    const [categorie, setCategorie] = useState(store.product.categorie);
    const [description, setDescription] = useState(store.product.description);
    const [weight, setWeight] = useState(store.product.weight);
    const [stripe, setStripe] = useState(store.product.stripe_price);
    const [stock, setStock] = useState(store.product.stock);
    const [pricing, setPricing] = useState(store.product.pricing);
    const [imageUrl, setImageUrl] = useState(store.product.image_url);

    const navigate = useNavigate()

    const handleCategorie = (event) => setCategorie(event.target.value)
    const handleName = (event) => setName(event.target.value)
    const handleDescription = (event) => setDescription(event.target.value)
    const handleWeight = (event) => setWeight(event.target.value)
    const handleStripe = (event) => setStripe(event.target.value)
    const handleStock = (event) => setStock(event.target.value)
    const handlePricing = (event) => setPricing(event.target.value)
    const handleImageUrl = (event) => setImageUrl(event.target.value)


    const handleSubmit = async (event) => {
        event.preventDefault();
        //actions.updateUser({ id, name, lastName, email, address, idNumber, typeIdNumber })
        // await actions.putMyUsers()
        navigate("/account")
    }

    const getData = async () => {
        await actions.getOneProducts(params.idProduct);
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="container mb-5">
            <h1 className="d-flex justify-content-center mt-4 text-dark">Editar Producto</h1>
            <div className="col col-lg-6 container bg-primary-subtle rounded mb-5">
                <form className="text-dark mt-3 p-2" onSubmit={handleSubmit}>
                    <div className="row mt-3">
                        <div className="col-6">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" value={name} onChange={handleName} className="form-control" id="name" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="categoria" className="form-label">Categoría</label>
                            <select className="form-select" value={categorie} onChange={handleCategorie} id="categoria" aria-label="Default select example">
                                <option>Seleccionar</option>
                                <option value="1">Pienso</option>
                                <option value="2">Snack</option>
                                <option value="3">Juguetes</option>
                                <option value="4">Accesorios</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripción" className="form-label mt-3">Descripción</label>
                        <input type="text" value={description} onChange={handleDescription} className="form-control" id="descripción" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="peso" className="form-label mt-3">Peso</label>
                        <input type="number" value={weight} onChange={handleWeight} className="form-control" id="peso" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stripe" className="form-label mt-3">Codigo de Stripe</label>
                        <input type="text" value={stripe} onChange={handleStripe} className="form-control" id="stripe" aria-describedby="emailHelp" />
                    </div>
                    <div className="container text-start">
                        <div className="row row-cols-1 row-cols-lg-2">
                            <div className="col p-0">
                                <div className="mt-2 text-start me-3">
                                    <label htmlFor="cantidad" className="form-label">Cantidad</label>
                                    <input type="number" value={stock} onChange={handleStock} className="form-control" id="cantidad" />
                                </div>
                            </div>
                            <div className="col p-0">
                                <div className="mt-2 text-start">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input type="number" value={pricing} onChange={handlePricing} className="form-control" id="precio" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="formFile" className="form-label">Imagen</label>
                        <input className="form-control" onChange={handleImageUrl} type="file" id="formFile" />
                    </div>
                    {/* <div className="p-3">{previewImage && (
                        <img className="img-thumbnail" src={previewImage} alt="Selected Image"
                            style={{ width: '50%', height: '50%' }} />)}
                    </div> */}
                    <div className="text-start ms-1 mt-3">
                        <div className="d-grid gap-2 d-md-block mb-3">
                            <button className="btn btn-primary me-2" type="submit">Editar</button>
                            <Link to="/stock-products" className="btn btn-secondary me-2">Cancelar</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}