import styled from "styled-components"

const Container = styled.header`
    width: 100%;
    height: 70px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    z-index: 1;
    background-color: #ED8936;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        color: #ffffff;
    }

`
export {
    Container
}