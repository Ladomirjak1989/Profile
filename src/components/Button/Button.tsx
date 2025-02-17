import React from 'react'
import { StyledButton } from './Styled'
// Визначаємо тип пропсів
interface ButtonProps {
    text?: string;
}

// Типізуємо компонент
const Button: React.FC<ButtonProps> = ({ text }) => {
    return <StyledButton>{text}</StyledButton>;
};

export default Button