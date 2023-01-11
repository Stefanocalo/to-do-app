import styled from "@emotion/styled";
import { produceWithPatches } from "immer";

export const theme = {
    colors: {
        primary: '#f7f7f7',
        secondary: '#404040',
        tertiary: '#214eb0',
        quaternary: '#686c75',
        red: '#f2403d',
        buttonP: '#5e8df2',
        buttonS: '#80889c'
    }
}

export const HeaderContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
`;

export const Title = styled.p`
    color: ${(props) => props.theme.colors.tertiary},
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 600;
`

export const ButtonP = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.buttonP};
    width: 6rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
        background-color: ${(props) => props.theme.colors.tertiary};
        scale: 1.2;
    }
    :active {
        scale: 1;
    }
`;

export const ButtonS = styled.button`
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.buttonS};
    width: 6rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
        background-color: ${(props) => props.theme.colors.red};
        scale: 1.2;
    }
    :active {
        scale: 1;
    }
`;

export const Selection = styled.select`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.buttonS};
    width: 6rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
        background-color: ${(props) => props.theme.colors.quaternary};
        scale: 1.2;
    }
   
`;

export const OptionWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Modal = styled.div`
    position: fixed;
    display:flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(63, 0, 255, 0.1);
    backdrop-filter: blur(0.2rem);
`;

export const ModalContainer = styled.div`
    
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

export const Close = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${(props) => props.theme.colors.red};
        scale: 1.2;
    }
    :active {
        scale: 1;
    }
`;

export const FormContainer = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    height: 20rem;
    width: 20rem;
    margin: 1rem 0;
    border-radius: 8px;
`;
