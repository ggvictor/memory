import axios from '../axios-config'

import { useState, useEffect } from 'react'

import {useParams} from 'react-router-dom'

import {toast} from 'react-toastify'

const Memory = () => {
  const {id} = useParams();
  const [memory, setMemory] = useState(null);

  useEffect(() => {
    const getMemory = async () => {
      const res = await axios.get(`/memories/${id}`);

      setMemory(res.data);


    };

    getMemory();
  }, []);
  if(!memory) return <p>Carregando...</p>

  return (
    <div className = "memory-page">
      <img src= {`${axios.defaults.baseURL}${memory.src}`} alt={memory.title} />
      <h2>{memory.title}</h2>
      <p>{memory.description}</p>
      <div className="comment-form">
        <h3>Envie o seu comentário:</h3>
        <form>
          <label>
            <input type="text" placeholder='Seu nome'/>
          </label>
          <label>
            <textarea placeholder='Seu nome'></textarea>
          </label>
          <input type="submit" value= "enviar" className='btn'/>
        </form>
      </div>
    </div>
  )
}

export default Memory;