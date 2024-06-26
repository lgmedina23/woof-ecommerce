import React, { useContext, useState } from "react"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firtsName, setFirtsName] = useState('');
    const [lastName, setLastName] = useState('');
    const [viewPassword, setViewPassword] = useState(false);

    const navigate = useNavigate()
    const handleFirtsName = (event) => setFirtsName(event.target.value)
    const handleLastName = (event) => setLastName(event.target.value)
    const handleEmail = (event) => setEmail(event.target.value)
    const handlePassword = event => setPassword(event.target.value)
    const handleViewPasswort = () => setViewPassword(!viewPassword)

    const signUp = async () => {
        const url = process.env.BACKEND_URL + "/api/signup";
        const options = {
            method: 'POST',
            body: JSON.stringify({ email, password, first_name: firtsName, last_name: lastName }),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const response = await fetch(url, options)
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            localStorage.setItem('token', data.token);
            actions.loginData(data);
            setEmail('');
            setPassword('');
            setFirtsName('');
            setLastName('');
            navigate("/")
        } else {
            // tratar el error
            console.log('Error: ', response.status, response.statusText)
            return { Error: 'response error', status: response.status, statusText: response.statusText }
        }
    }

    // navigate('/')  // con el navigate ir a la pagina que quieras (home)

    return (
        <div className="container my-5 p-3">
            <h1 className="text-center text-dark my-3">Crear cuenta</h1>
            <div className="col col-lg-6 container">
                <form>
                    <div className="form-floating mb-3 border border-primary rounded">
                        <input type="text" value={firtsName} onChange={handleFirtsName}
                            className="form-control" id="firstname" placeholder="Tu nombre" />
                        <label htmlFor="firstname">Nombre</label>
                    </div>
                    <div className="form-floating mb-3 border border-primary rounded">
                        <input type="text" value={lastName} onChange={handleLastName}
                            className="form-control" id="lastname" placeholder="Tu apellido"/>
                        <label htmlFor="lastname">Apellido</label>
                    </div>
                    <div className="form-floating mb-3 border border-primary rounded">
                        <input type="email" value={email} onChange={handleEmail}
                            className="form-control" id="exampleInputEmail1" placeholder="Email address"
                            aria-describedby="emailHelp" />
                        <label htmlFor="exampleInputEmail1">Email</label>
                    </div>
                    <div className="input-group mb-3 border border-primary rounded">
                        <div className="form-floating">
                            <input type={viewPassword ? "text" : "password"} value={password} onChange={handlePassword}
                                className="form-control" id="floatingInputGroup1" placeholder="Password" />
                            <label htmlFor="floatingInputGroup1">Contraseña</label>
                        </div>
                        <span className="input-group-text" onClick={handleViewPasswort}>
                            {viewPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                        </span>
                    </div>
                    <button type="button" onClick={signUp} className="btn btn-primary me-4">Crear</button>
                    <button type="reset" className="btn btn-secondary">Cancelar</button>
                </form>
            </div>
        </div>
    )
};