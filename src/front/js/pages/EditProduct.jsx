import React from "react";
import { Link } from "react-router-dom";


export const EditProduct = () => {

    return (
        <div className="container mb-5">
            <h1 className="d-flex justify-content-center mt-4 text-dark">Agregar Producto</h1>
            <div className="col col-lg-6 container bg-primary-subtle rounded mb-5">
                <form className="text-dark mt-3 p-2">
                    <div className="row mt-3">
                        <div className="col-6">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="categoria" className="form-label">Categoría</label>
                            <select className="form-select" id="categoria" aria-label="Default select example">
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
                        <input type="text" className="form-control" id="descripción" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="peso" className="form-label mt-3">Peso</label>
                        <input type="number" className="form-control" id="peso" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stripe" className="form-label mt-3">Codigo de Stripe</label>
                        <input type="text" className="form-control" id="stripe" aria-describedby="emailHelp" />
                    </div>
                    <div className="container text-start">
                        <div className="row row-cols-1 row-cols-lg-2">
                            <div className="col p-0">
                                <div className="mt-2 text-start me-3">
                                    <label htmlFor="cantidad" className="form-label">Cantidad</label>
                                    <input type="number" className="form-control" id="cantidad" />
                                </div>
                            </div>
                            <div className="col p-0">
                                <div className="mt-2 text-start">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input type="number" className="form-control" id="precio" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="formFile" className="form-label">Imagen</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    {/* <div className="p-3">{previewImage && (
                        <img className="img-thumbnail" src={previewImage} alt="Selected Image"
                            style={{ width: '50%', height: '50%' }} />)}
                    </div> */}
                    <div className="text-start ms-1 mt-3">
                        <div className="d-grid gap-2 d-md-block mb-3">
                            <button className="btn btn-primary me-2" type="submit">Crear</button>
                            <Link to="/stock-products" className="btn btn-secondary me-2">Cancelar</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}