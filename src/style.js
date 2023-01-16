import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";


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
    min-width: 8rem;
    height: 3rem;
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

export const ButtonAdd = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.buttonP};
    font-weight: 600;
    font-size: 1.1rem;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    :hover {
        background-color: ${(props) => props.theme.colors.buttonPhover};
        scale: 1.2;
    }
    :active {
        scale: 1;
    }
    @media (max-width: 900px) {
        right: 1.5rem;
        bottom: 1.5rem;
    }
`;

export const NewTag = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.buttonP};
    font-weight: 600;
    font-size: 1.1rem;
    min-width: 2rem;
    height: 2.2rem;
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

export const CancelNewTag = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.buttonS};
    font-weight: 600;
    font-size: 1.1rem;
    min-width: 2rem;
    height: 2.2rem;
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

export const ButtonS = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.buttonS};
    font-weight: 600;
    font-size: 1.1rem;
    min-width: 8rem;
    height: 3rem;
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
    width: 8rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
    :hover {
        background-color: ${(props) => props.theme.colors.quaternary};
    }
   
`;

export const OptionWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.tertiary};
    display: flex;
    justify-content: space-between;
    padding: 2rem 5%;
    align-items: center;
    position: sticky;
    width: 90%;
    top: 0;
    @media (max-width: 900px) {
        padding: 1rem 5%;
    }
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
    min-height: 90vh;
    overflow: hidden;
`;

export const DetailContainer = styled.div`
    margin: 0 1rem;
    min-width: 2rem;
    min-heght: 2rem;
    
`;

export const OptionContainer = styled.div`
    font-size: 2rem;
    background-color: ${props => props.theme.colors.buttonP};
    color: ${props => theme.colors.tertiary};
    transition: 0.3s;
    height: 3rem;
    width: 3rem;
    margin-right: 0 4rem;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        scale: 1.2;
        background-color: ${(props) => props.theme.colors.buttonPhover};
    }
    :active {
        scale: 1;
    }
`;

export const SettingContainer = styled.div`
    height: 90vh;
    width: 100%;
    background-color: ${props => props.theme.colors.tertiary};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    
`;

export const SettingBar = styled.div`
    width: 100%;
    height: 5.5rem;
    border-top: 1px solid ${props => props.theme.colors.primary};
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items:center;
    justify-content: space-around;
`;

export const IconsContainer = styled.div`
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.3s;
    cursor: pointer;
    border-radius: 15px;
    padding: 0.5rem;
    margin: 0.2rem 0;
    :hover {
        scale: 1.2;
    }
`;

export const SettingPage = styled.div`
    height: 70%;
    width: 100%;
    position:fixed;
    bottom: 6rem;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: scroll;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    ::-webkit-scrollbar {
        display: none;
      }
    @media (max-width: 600px) {
        bottom: 5rem;
        margin-bottom: 3rem;
    }
`;

export const TagOption = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    margin: 1rem 0;
    border-radius: 8px;
    width: 80%;
    height: 100%;
    padding-bottom: 3rem 0;
    justify-content: space-around;
    cursor: pointer;
    transition: 0.3s;
    @media (max-width: 900px) {
        width: 95%;
        margin: 0.7rem 0;
    }
`;

export const TagPanel = styled.div`
    height: 75vh;
    width: 95vw;
    background-color: ${props => props.theme.colors.tertiary};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    position: fixed;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

export const TagForm = styled.form`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
`;

