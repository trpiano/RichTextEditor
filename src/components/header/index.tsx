import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'

//Switch
import Switch from 'react-switch'

import { Container } from './styles'
import { shade } from 'polished'

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext)

    return (
        <Container>
            
            <h1>Rich Text</h1>
        
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
            
        </Container>
    )
}

export default Header