import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => props.variant === 'outlined' ? props.theme.colors.tint : props.theme.colors.primary};
    color: #ffffff;
    padding: 12px 24px;
    font-size: 1rem;
    border: ${(props) => props.variant === 'outlined' ? `2px solid ${props.theme.colors.primary}` : 'none'};
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #a9231a;
    }

    &:active {
        transform: scale(0.98);
    }
`;

export default Button;
