import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    font-family: 'Source Sans Pro', sans-serif;;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 0 30px;

    h1 {
        color: ${props => props.theme.colors.text};
    },
`;