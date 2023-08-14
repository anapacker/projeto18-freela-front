import { Link } from "react-router-dom"
import { StyledLink } from "./style"

export default function Footer() {
    return (
        <footer>
            <StyledLink><Link to={"/miaudelos/register"}>Cadastre seu Miaudelo!</Link></StyledLink>
        </footer>
    )
}
