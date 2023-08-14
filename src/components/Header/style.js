import styled from "styled-components"

const Container = styled.header`
    width: 98%;
    height: 70px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    z-index: 1;
    background-color: #ED8936;
    p{
        color: #ffffff;
    }


`
const ArtCiclo = styled.div`
    color: #ffffff;
    font-size: 26px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    align-items: center;

`



export {
    Container,
    ArtCiclo
}