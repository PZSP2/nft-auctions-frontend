import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../stores/AuthStore'

export const ProtectedRoutes = () => {
  const { isUserLoggedIn } = useAuthStore();

  return (
    isUserLoggedIn() ? <Outlet/> : <Navigate to='/'/>
  )
}