import { Link } from "react-router-dom"
export default function Header(){
    return (
        <header>
            <div>
                <Link to= "/home">Home</Link>
                <Link to= "/post">Post</Link>
            </div>
        </header>
    )
}