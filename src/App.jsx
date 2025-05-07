import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BASE_ID = 'appqkjRYvyIwSHLR7'
const TABLE_NAME = 'locacoes'
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`
const TOKEN = 'SUA_API_KEY_AQUI'

function App() {
  const [locacoes, setLocacoes] = useState([])

  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
    .then(res => {
      setLocacoes(res.data.records)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Locações</h1>
      <Link to="/novo">Nova Locação</Link>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {locacoes.map(loc => (
            <tr key={loc.id}>
              <td>{loc.id}</td>
              <td>{loc.fields.titulo}</td>
              <td>
                <Link to={`/editar/${loc.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
