import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter>
            Made with ❤️ by J&J
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.div`{
    position: absolute;
    bottom: 0%;
    text-align: center;
    width: 100%;
    font-weight: ${props => props.theme.fontWeight.bold};
}`