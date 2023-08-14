import { useContext, useState } from "react";
import Container from "../../components/FormComponents/Container";
import Form from "../../components/FormComponents/Form";
import Input from "../../components/FormComponents/input";
import axios from "axios";
import DataContextProvider from "../../context/DataContextProvider";
import { useNavigate } from "react-router-dom";

export default function RegisterMiaudelo() {
    const navigate = useNavigate()
    const { token } = useContext(DataContextProvider)
    const [isDisable, setIsDisable] = useState(false)
    const header = {
        headers: { "Authorization": `Bearer ${token}` }
    }
    const [formMiaudelo, setFormMiaudelo] = useState({
        name: "",
        photos: "",
        age: "",
        race: "",
        personality: "",
        weight: "",
        vacancy: false

    })

    function registerMiaudelo(e) {
        e.preventDefault()
        const formAtualizado = { ...formMiaudelo, age: parseInt(formMiaudelo.age), weight: parseInt(formMiaudelo.weight), photos: [formMiaudelo.photos] }
        const promise = axios.post(`${import.meta.env.VITE_API_URL}/miaudelos`, formAtualizado, header)
        promise.then(() => {
            alert("Miaudelo cadastrado com sucesso!")
            setIsDisable(false)
            navigate("/miaudelos")
        })
        promise.catch((res) => {
            console.log((res));
            alert(`${res.response.data}`)
            setIsDisable(false)

        })
        console.log("dados", formAtualizado);
    }

    return (
        <Container>
            <Form onSubmit={registerMiaudelo}>
                <Input
                    placeholder="Nome"
                    name="name"
                    value={formMiaudelo.name}
                    onChange={(e) => { setFormMiaudelo({ ...formMiaudelo, name: e.target.value }) }}
                    type="text"
                    required

                />
                <Input
                    placeholder="Idade"
                    type="number"
                    name="Idade"
                    value={formMiaudelo.age}
                    onChange={(e) => { setFormMiaudelo({ ...formMiaudelo, age: e.target.value }) }}
                    required

                />
                <Input
                    placeholder="Foto"
                    type="url"
                    name="Foto"
                    value={formMiaudelo.photos}
                    onChange={(e) => { setFormMiaudelo({ ...formMiaudelo, photos: e.target.value }) }}
                    required

                />
                <Input
                    placeholder="raça"
                    type="text"
                    name="raça"
                    value={formMiaudelo.race}
                    onChange={(e) => { setFormMiaudelo({ ...formMiaudelo, race: e.target.value }) }}
                    required

                />
                <Input
                    placeholder="Personalidade"
                    type="text"
                    name="Personalidade"
                    value={formMiaudelo.personality}
                    onChange={(e) => { setFormMiaudelo({ ...formMiaudelo, personality: e.target.value }) }}
                    required

                />
                <Input
                    placeholder="Peso (kg)"
                    type="number"
                    value={formMiaudelo.weight}
                    onChange={(e) => { setFormMiaudelo({ ...formMiaudelo, weight: e.target.value }) }}
                    name="Peso"
                    required

                />
                <div>
                    <label>
                        Férias
                    </label>
                    <Input
                        placeholder="Férias"
                        type="checkbox"
                        checked={formMiaudelo.vacancy}
                        onChange={(e) => { setFormMiaudelo({ ...formMiaudelo, vacancy: !formMiaudelo.vacancy }) }}
                        name="Férias"

                    />

                </div>

                <button type="submit">Cadastrar</button>
            </Form>

        </Container>


    )

}