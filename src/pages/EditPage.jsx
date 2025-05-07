import { useParams } from 'react-router-dom'

export default function EditPage() {
  const { id } = useParams()
  return <h2>Editar {id}</h2>
}
