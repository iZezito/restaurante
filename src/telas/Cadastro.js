import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import api from '../Api';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Cadastro = () => {

    const [almoco, setAlmoco] = React.useState({})
    const [sucesso, setSucesso] = React.useState(null)
    const [erro, setErro] = React.useState(false)


    const handleChange = (event) => {
        const { name, value } = event.target
        setAlmoco({ ...almoco, [name]: value })
    }

    const handleSubmit = async () => {
        console.log(almoco.preco)
        await api.post('/almocos', almoco).then((response) => { 
            console.log(response)
            setSucesso(true)
            setErro(false)
        }).catch((error) => { console.log(error) }, setErro(true), setSucesso(false));
    }

    function showAlert() {
        if (sucesso) {
            return (
                <Alert variant="success" onClose={() => setSucesso(false)} dismissible>
                   Almoço cadastrado com sucesso!
                    
                </Alert>
            )
        }
        if (erro) {
            return (
                <Alert variant="danger" onClose={() => setErro(false)} dismissible>
                    Almoço não cadastrado!
                    
                </Alert>
            )
        }

    }

    function limpar(){
        setAlmoco({})
    }

    return (
        <>
            <Header />
            <div className="d-flex justify-content-center w-100">
                <div>

                    {showAlert()}
                    <h1 className="h1">Cadastrar Almoço</h1>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input type="text" className="form-control" name="nome" value={almoco.nome} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tamanho</label>
                        <input type="text" className="form-control" name="tamanho" value={almoco.tamanho} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descrição</label>
                        <input type="text" className="form-control" name="descricao" value={almoco.descricao}onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Preço</label>
                        <input type="number" className="form-control" name="preco" value={almoco.preco} onChange={(e) => setAlmoco({ ...almoco, [e.target.name]: Number(e.target.value )}) }  step="0.01"/>
                    </div>

                    <button className="btn btn-primary me-2" onClick={handleSubmit}>Enviar</button>
                    <button className="btn btn-danger">Limpar</button>
                </div>
            </div>

        </>
        )
}

export default Cadastro
