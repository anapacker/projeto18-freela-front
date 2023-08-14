import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Container from "../../components/FormComponents/Container"
import { MiaudeloContainer, MiaudelosList } from "./style"
import axios from "axios"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer"


export default function HomePage() {
    const [infoMiaudelo, setInfoMiaudelo] = useState([])

    useEffect(() => {
        const promise = axios.get(`${import.meta.env.VITE_API_URL}/miaudelos`)
        promise.then(res => {
            console.log(res.data)
            setInfoMiaudelo(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    if (infoMiaudelo.length === 0) {
        return (<div>Carregando...</div>)
    }

    return (
        <>
            <Header />
            <Container>
                MIAUDELOS
                <MiaudelosList>
                    {infoMiaudelo.map(photo => (
                        <Link to={`/miaudelos/${photo.id}`} key={photo.id}>
                            <MiaudeloContainer>
                                <img src="https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg" />
                            </MiaudeloContainer>
                        </Link>
                    ))}
                </MiaudelosList>
            </Container>
            <Footer />
        </>
    )
}