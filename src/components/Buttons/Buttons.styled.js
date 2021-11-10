import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    max-width: 17.2rem;
    height: 3.6rem;
    background: var(--neutral-1);
    color: #FFFF;
    border-radius: 120px;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.8rem;
    letter-spacing: -0.02rem;
`

export const StyledButtonRounded = styled.button`
    height: 3.6rem;
    width: 3.6rem;
    border: 1px solid var(--neutral-3);
    border-radius: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledButtonWhite = styled.button`
    width: 100%;
    max-width: 22.8rem;
    height: 4.8rem;
    background: #FFFF;
    color: var(--primary);
    border-radius: 120px;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.02rem;
    text-transform: uppercase;
`