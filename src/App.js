import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Almoco from './components/Almoco';
import api from './Api';
import React from 'react';
import PlaceHolder from './components/PlaceHolder';
import Modal from 'react-bootstrap/Modal';

function App() {

  const [almocos, setAlmocos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [placeHolders, setPlaceHolders] = React.useState(Array(6).fill(''));
  const [show, setShow] = React.useState(false);
  const [almoco, setAlmoco] = React.useState({})

  

  

  React.useEffect( () => {
    api.get('/almocos').then((response) => { 
      setAlmocos(response.data)
      setLoading(false)
    }).catch((error) => { console.log(error) });
  }, []);

  function deleteAlmoco(id){
    api.delete('/almocos/'+id).then((response) => { 
      setAlmocos(almocos.filter(almoco => almoco.id !== id))
    }).catch((error) => { console.log(error) });
  }

  function editar(){
    api.put('/almocos/'+almoco.id, almoco).then((response) => { 
      setAlmocos(almocos.map(almoco => almoco.id === response.data.id ? response.data : almoco))
      setShow(false)
    }).catch((error) => { console.log(error) });
  }
    

  function handleShow(id){
    setAlmoco(almocos.find(almoco => almoco.id === id))
    setShow(true)
  }
  function handleClose() {
    setShow(false);
  }

  function handleChange(event){
    setAlmoco({...almoco, [event.target.name]: event.target.value})
  }

  return (
    <>
      <Header />
      <Main>
        {loading ? placeHolders.map((a,index) => <PlaceHolder key={index}/> ) : almocos.map((almoco) => <Almoco key={almoco.id} almoco={almoco} handleShow={handleShow} handleDelete={deleteAlmoco} />)}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Almoço</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>

          
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

          <button className="btn btn-success me-2" onClick={editar}>Confirmar</button>
        </div>
        </Modal.Body>
        
      </Modal>
    
      </Main>
    </>
  );
}

export default App;
