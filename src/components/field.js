import React from 'react'
import styled from 'styled-components'

const Field = () => {
    return (
        <StyledForm>
            <StyledLabel>Enter playlist link</StyledLabel>
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
    font-weight: ${props => props.theme.fontWeight.bold};
    margin-bottom: 0.5vh;
    &:focus {
        outline: none;
    }
}`

const StyledField = styled.input`{
    background-color: transparent;
    border-radius: 2px;
    border: ${props => props.theme.border};
    padding: 14px;
    width: 100%;
    color: ${props => props.theme.colors.white};
    &:focus {
        outline: none;
        border: 3px solid rgb(255, 255, 255);
    }
}`