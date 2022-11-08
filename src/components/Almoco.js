import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Almoco = (props) => {

    const { id, nome, descricao, tamanho, preco} = props.almoco;

    return (
    <div className="col mb-5">
        <div className="card h-100">
            <div className="card-body p-4">
                <div className="text-center">
                    
                    <h5 className="fw-bolder">Nome: {nome}</h5>
                    
                    <p>Descrição: {descricao}</p>
                    <p>Tamanho: {tamanho}</p>
                    <p>Preço: R${preco}</p>
                </div>
            </div>
            
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center" onClick={() => props.handleShow(id)}><a className="btn btn-outline-primary mt-auto mb-2">Editar</a></div>
                <div className="text-center" onClick={() => props.handleDelete(id)}><a className="btn btn-outline-danger mt-auto">Excluir</a></div>
            </div>
        </div>
    </div>
    )
}

export default Almoco