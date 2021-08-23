import React from 'react'
import styled from 'styled-components'


const Button = (props) => {
    return (
        <StyledButton>
            {props.text}
        </StyledButton>
    )
}

export default Button

const StyledButton = styled.div`{
    width: 30%;
    margin: auto;
    border-radius: 500px;
    color: rgb(255, 255, 255);
    padding: 17px 48px;
    font-size: 14px;
    text-align: center;
    border: 2px solid rgb(255, 255, 255);
    font-weight: 700;

    &:hover {
        transform: scale(1.04);
    }
}`