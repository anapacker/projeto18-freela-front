import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/FormComponents/Container";
import Form from "../../components/FormComponents/Form";
import Input from "../../components/FormComponents/input";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [isDisable, setIsDisable] = useState(false)
    const navigate = useNavigate()

    function loginToAccont(e) {
        e.preventDefault()
        setIsDisable(true)

        const promise = axios.post(`${import.meta.env.VITE_API_URL}/signin`, formData)
        promise.then((response) => {
            setIsDisable(false)

            login(response.data)
            navigate("/home-page")
        })
        promise.catch(() => {
            setIsDisable(false)

            alert('Erro, tente novamente.')
        })

    }

    return (
        <Container>
            <Form onSubmit={loginToAccont}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                    value={formData.email}
                    disabled={isDisable}
                    required
                />

                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
                    value={formData.password}
                    disabled={isDisable}
                    required
                />

                <button type="submit" disabled={isDisable}>Entrar</button>
            </Form>

            <Link to={"/signup"}>
                Não tem uma conta? Cadastre-se!
            </Link>
        </Container>
    )
}