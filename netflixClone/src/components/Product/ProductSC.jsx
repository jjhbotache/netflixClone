import styled from 'styled-components';
import { darkBg, lightBg, radious } from '../../constants/styleConstants';

export const Wrapper = styled.div`
    width: fit-content;
    display: grid;
    background: ${darkBg};
    color: ${lightBg};
    padding: 1em;
    margin: 1em;
    gap: 0.4em;
    border-radius: ${radious};

    & > hr{
        border: 1px solid ${lightBg};
        width: 100%;
        box-shadow: 0 0 10px 0 ${lightBg};
    }
    
    
    & > img{
        width: 100%;
        height: auto;
        max-width: 200px;
        border-radius: ${radious};
        transition: all 0.2s ease-in-out;
        &:hover{
            transform: scale(1.005);
            box-shadow: 0 0 10px 0 white;
        }

    }

    & > button{
        display: block;
        width: 100%;
        background: ${lightBg};
        color: ${darkBg};
        padding: 0.5em;
        border-radius: ${radious};
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        border: 1px solid ${darkBg};
        font-weight:900;
        &:hover{
            letter-spacing: 5px;
            background: transparent;
            color: ${lightBg};
            border: 1px solid ${lightBg};
        }
    }
`;

