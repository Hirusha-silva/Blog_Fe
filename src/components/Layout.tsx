import { navigate } from "react-router-dom"

const handleLogin = () => {
    navigate("/login")
}

return (
    <header className="">
        <div className="flex space-x-4">
            <Link to= "/home" className="hover:underline">Home</Link>
            <Link t0= "/post">Post</Link>

        </div>
    </header>

)