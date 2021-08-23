import React from 'react'
import styled from 'styled-components'

const PlusButton = (props) => {
    return (
        <StyledButtonContainer onClick={props.onClick}>
            <StyledPlusButton />
        </StyledButtonContainer>
    )
}

export default PlusButton

const StyledButtonContainer = styled.div`{
    width: 100%;
}`

const StyledPlusButton = styled.div`{
    border: 2px solid rgb(255, 255, 255);
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
    position: relative;
    margin: 2vh auto;

    &:hover {
        transform: scale(1.04);
    }

    &:after,
    &:before {
        content: "";
        display: block;
        background-color: rgb(255, 255, 255);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    &:before {
        height: 1em;
        width: 2px;
    }

    &:after {
        height: 2px;
        width: 1em;
    }
}`