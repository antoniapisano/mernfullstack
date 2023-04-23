import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DiaryForm from '../components/DiaryForm'

function Dashboard() {

  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
  if (!user) {
    navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Your Tasting Notes Dashboard</p>
      </section>
      <DiaryForm />
      </>
  )
}

export default Dashboard
