import { lazy, Suspense, type ReactNode } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from "../context/authContext"

const Home = lazy(() => import("../pages/Home"))
const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const Welcome = lazy(() => import("../pages/Welcome"))
const Post = lazy(() => import("../pages/Post"))

type RequireAuthTypes = {children: ReactNode}

const RequireAuth = ({children}:RequireAuthTypes) => {
  const {user,loading} = useAuth()

  if(loading){
    return <div>User Loading</div>
  }

  if(!user){
    return <Navigate to= "/login" replace />
  }

  return <>{children}</>
}

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/home" element={<RequireAuth>
            <Home/>
          </RequireAuth>} 
          /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
