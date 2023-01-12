import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";


export const Main = styled.div`
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.tertiary}
`

export const theme = {
    colors: {
        primary: '#f7f7f7',
        secondary: '#404040',
        tertiary: '#d8e0f0',
        quaternary: '#686c75',
        red: '#f2403d',
        buttonP: '#5e8df2',
        buttonPhover: '#214eb0',
        buttonS: '#b0b0b0'
    }
};

export const HeaderContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
`;

export const Title = styled.p`
    color: ${(props) => props.theme.colors.buttonPhover},
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 600;
`

export const ButtonP = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.buttonP};
    font-weight: 600;
    font-size: 1.1rem;
    min-width: 6rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
        background-color: ${(props) => props.theme.colors.buttonPhover};
        scale: 1.2;
    }
    :active {
        scale: 1;
    }
`;

export const ButtonS = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.buttonS};
    font-weight: 600;
    font-size: 1.1rem;
    min-width: 6rem;
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

export const SelectionB = styled.select`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.buttonS};
    font-weight: 600;
    font-size: 1.1rem;
    min-width: 6rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
        background-color: ${(props) => props.theme.colors.quaternary};
    }
   
`;

export const OptionWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.tertiary};
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
    position: sticky;
    top: 0;
    z-index: 99;
`;

export const Modal = styled.div`
    position: fixed;
    display:flex;
    align-items: center;
    justify-content: center;
    left: 0;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(0.5rem);
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.5s;
`;

export const ModalContainer = styled.div`
    
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.8s;
    width:60%;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

export const Close = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${(props) => props.theme.colors.red};
        color: ${(props) => props.theme.colors.primary};
        scale: 1.2;
    }
    :active {
        scale: 1;
    }
`;

export const Edit = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${(props) => props.theme.colors.quaternary};
        color: ${(props) => props.theme.colors.primary};
        scale: 1.2;
    }
    :active {
        scale: 1;
    }
`;

export const FormContainer = styled.div`
    background-color: ${(props) => props.theme.colors.tertiary};
    width: 95%;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 8px;
`;

export const TaskForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormLabel = styled.label`
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1rem 0;
`;

export const TodoContainer = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    border-radius: 8px;
    height: 4rem;
    width: 60%;
    @media (max-width: 900px) {
        width: 95%;
        margin: 0.7rem 0;
    }
`;

export const TodoFeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 80vh;
`;

export const DetailContainer = styled.div`
    margin: 0 1rem;
    min-width: 2rem;
    min-heght: 2rem;
    
`;

