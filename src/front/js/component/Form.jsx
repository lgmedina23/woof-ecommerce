import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Form = () => {
    const { store, actions } = useContext(Context);
    const id = store.user.id;
    const [name, setName] = useState(store.user.first_name);
    const [lastName, setLastName] = useState(store.user.last_name);
    const [email, setEmail] = useState(store.user.email);
    const [password, setPassword] = useState(store.user.password);
    const [address, setAddress] = useState(store.user.address);
    const [idNumber, setIdNumber] = useState(store.user.identification_number);
    const [typeIdNumber, setTypeIdNumber] = useState(store.user.identification_type);
    const [viewPassword, setViewPassword] = useState(false);

    const navigate = useNavigate()

    const handleEmail = (event) => setEmail(event.target.value)
    const handleName = (event) => setName(event.target.value)
    const handleLastName = (event) => setLastName(event.target.value)
    const handleAddress = (event) => setAddress(event.target.value)
    const handleIdNumber = (event) => setIdNumber(event.target.value)
    const handleTypeIdNumber = (event) => setTypeIdNumber(event.target.value)
    const handlePassword = event => setPassword(event.target.value)
    const handleViewPasswort = () => setViewPassword(!viewPassword)


    const handleSubmit = async (event) => {
        event.preventDefault();
        actions.updateUser({id, name, lastName, email, address, idNumber, typeIdNumber})
        await actions.putMyUsers()
        navigate("/account")
    }


    return (
        <div className="container mb-5">
            <h1 className="d-flex justify-content-center mt-4 text-dark">Información Personal</h1>
            <div className="col col-lg-6 container bg-primary-subtle rounded mb-5">
                <form className="text-dark mt-3 p-2" onSubmit={handleSubmit}>
                    <div className="row mt-3">
                        <div className="col-6">
                            <label htmlFor="firstname" className="form-label">Nombre</label>
                            <input type="text" value={name} onChange={handleName} className="form-control" id="firstname" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="lastname" className="form-label">Apellidos</label>
                            <input type="text" value={lastName} onChange={handleLastName} className="form-control" id="lastname" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail" className="form-label mt-3">Email</label>
                        <input type="email" value={email} onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputAddress" className="form-label mt-3">Dirección</label>
                        <input type="text" value={address} onChange={handleAddress} className="form-control" id="exampleInputAddress" autoComplete="off" />
                    </div>
                    <div className="container text-start">
                        <div className="row row-cols-1 row-cols-lg-2">
                            <div className="col p-0">
                                <div className="mt-2 text-start me-3">
                                    <label htmlFor="exampleSelect1" className="form-label">Identificación</label>
                                    <select value={typeIdNumber} onChange={handleTypeIdNumber} className="form-select" id="identification">
                                        <option>Tipo</option>
                                        <option>Dni</option>
                                        <option>Nie</option>
                                        <option>Pasaporte</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col p-0">
                                <div className="mt-2 text-start">
                                    <label htmlFor="postalcode" className="form-label">Número de identificación</label>
                                    <input type="text" value={idNumber} onChange={handleIdNumber} className="form-control" id="identificationNumber" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-start ms-1 mt-3">
                        <div className="d-grid gap-2 d-md-block mb-3">
                            <button className="btn btn-primary me-2" type="submit">Guardar</button>
                            <Link to="/account" className="btn btn-secondary me-2">Cancelar</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}