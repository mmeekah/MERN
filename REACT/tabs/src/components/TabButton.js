
import styled from "styled-components";

const TabButton = styled.button`
    padding: 15px 20px;
    border-style: none;
    border-radius: 20px;
    border: 0.75px solid rgb(230, 230, 230);
    background-color: ${props => props.selected ? "black" : "white"};
    font-size: 1rem;
    color: ${props => props.selected ? "white" : "black"};
    transition: all 0.5s ease;
    margin: 0px ${props => (props.selected ? "15" : "0")}px;
`;

export default TabButton;