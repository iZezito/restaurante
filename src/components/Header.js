import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to={'/'}>Home</Link></li>

                            <li className="nav-item">
                                <a className="nav-link" href="/logout">Logout</a>
                            </li>
                        <li   className="nav-item">
                            <Link className="nav-link" to={'/cadastro'}>Cadastrar Almoço</Link>
                        </li>
                        <li   className="nav-item">
                            <a className="nav-link" href="/admin">Gerenciar Almoço</a>
                        </li>

                    </ul>

                    <form  className="d-flex">
                        <button  className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Carrinho
                            <span className="badge bg-dark text-white ms-1 rounded-pill"></span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Restaurante Universitário</h1>
                    <p className="lead fw-bolder text-white-50 mb-0"></p>
                </div>
            </div>
        </header>
    </div>

    )
}

export default Header