import { styled } from "styled-components";

const MiaudelosList = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MiaudeloContainer = styled.div`
    width: 200px;
    height: 275px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img{
        width: 190;
        height: 210px;

    }
`
export {
    MiaudeloContainer,
    MiaudelosList
}