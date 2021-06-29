import styled from 'styled-components'

export const Container = styled.div`
align-items: center;
    background: ${props => props.theme.colors.primary};
    border-radius: 0.6rem;
    margin: 1rem 1rem 1rem 1rem;
    max-height: 1080px;
    height: 88vh;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem; 
    justify-content: center;
    
    .toolbar{
        background: ${props => props.theme.colors.toolbar.background};
        border-color: ;
    }
    .wrapper{
          background: ${props => props.theme.colors.primary};
          border-color: ;
    }
    .editor{
        background: ${props => props.theme.colors.primary};]
        border-color: ; 
    }
`