import styled from 'styled-components'

export const Container = styled.div`
align-items: center;
    background: ${props => props.theme.colors.primary};
    border-radius: 0.6rem;
    margin: 1rem 1rem 1rem 1rem;
    height: 100%;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem; 
    
    .toolbar{
        background: ${props => props.theme.colors.toolbar_background};
        border-color: ${props => props.theme.colors.toolbar_border};
        color: ${props => props.theme.colors.toolbar_text};
    }
    .wrapper{
        color: ${props => props.theme.colors.wrapper_text};
        border-color: ${props => props.theme.colors.wrapper_border_color};
    }
`