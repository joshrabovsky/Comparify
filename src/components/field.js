import React from 'react'
import styled from 'styled-components'

const Field = () => {
    return (
        <StyledForm>
            <StyledLabel>Enter a playlist link</StyledLabel>
            <StyledField/>
        </StyledForm>
    )
}

export default Field

const StyledForm = styled.form`{
    margin: 2vh auto;
    width: 50%;
}`

const StyledLabel = styled.label`{
    display: block;
    font-weight: 700;
    margin-bottom: 0.5vh;
    &:focus {
        outline: none;
    }
}`

const StyledField = styled.input`{
    background-color: transparent;
    border-radius: 2px;
    border: 2px solid rgb(255, 255, 255);
    padding: 14px;
    width: 100%;
    color: rgb(255, 255, 255);
    &:focus {
        outline: none;
        border: 3px solid rgb(255, 255, 255);
    }
}`