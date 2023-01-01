import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
    text-align: left;
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    max-width: 250px;
    width: 100%;
    border-radius: 5px;

    &:required {
    background-color: ${({ theme }) => theme.color.mercury};
}
`;

export const Button = styled.button`
    width: 70%;
    background-color: ${({ theme }) => theme.color.blueRibbon};
    color: ${({ theme }) => theme.color.white};
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Fieldset = styled.fieldset`
    background-color: ${({ theme }) => theme.color.jordyBlue};
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 10px;
    padding: 5px;
    margin: 10px 0;
    box-shadow: 1px 1px 5px ${({ theme }) => theme.color.doveGray};
    text-align: center;
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.blueRibbon};
    color: ${({ theme }) => theme.color.white};
    padding: 5px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.black};
`;

export const Footer = styled.p`
    font-style: italic;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.jordyBlue};
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: 1px 1px 5px ${({ theme }) => theme.color.doveGray};
`;

export const Item = styled.li`
    list-style-type: none;
    padding: 3px 0;
`;