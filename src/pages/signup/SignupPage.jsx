import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Form from "../../components/FormComponents/Form"
import Container from "../../components/FormComponents/Container"
import Input from "../../components/FormComponents/input"
import axios from "axios"

export default function SignupPage() {
    const navigate = useNavigate()
    const [isDisable, setIsDisable] = useState()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cpf: "",
        phone: "",
        password: "",
        confirmPassword: ""

    })

    function userRegister(e) {
        e.preventDefault()
        setIsDisable(true)

        const promise = axios.post(`${import.meta.env.VITE_API_URL}/signup`, formData)

        promise.then(() => {
            alert("Cadastrado com sucesso!")
            setIsDisable(false)
            navigate("/")
        })
        promise.catch((res) => {
            console.log((res));
            alert(`${res.response.data}`)
            setIsDisable(false)

        })

    }

    return (
        <Container>
            <Form onSubmit={userRegister}>
                <Input
                    placeholder="Nome"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
                    required
                    disabled={isDisable}

                />
                <Input
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                    value={formData.email}
                    required
                    disabled={isDisable}

                />
                <Input
                    placeholder="cpf"
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={(e) => { setFormData({ ...formData, cpf: e.target.value }) }}
                    required
                    disabled={isDisable}

                />
                <Input
                    placeholder="Phone"
                    type="text"
                    name="Phone"
                    value={formData.phone}
                    onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }}
                    required
                    disabled={isDisable}

                />
                <Input
                    placeholder="Senha"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
                    required
                    disabled={isDisable}

                />
                <Input
                    placeholder="Confirme a senha"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={(e) => { setFormData({ ...formData, confirmPassword: e.target.value }) }}
                    required
                    disabled={isDisable}

                />

                <button type="submit" disabled={isDisable}>Cadastrar</button>
            </Form>

            <Link to="/">
                Já tem uma conta? Entre agora!
            </Link>
        </Container>


    )

}
