import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

:root {
    --primary: #F22824 ;
    --primary-light: #DC292E;
    --secondary: #FFE211;
    --gradient: linear-gradient(#FFEA0D, #FFC120);
    --neutral-1: #343A40;
    --neutral-2: #495057;
    --neutral-3: #ADB5BD;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open sans', sans-serif;
    color: var(--neutral-1);
}

body, html {
    overflow-x: hidden;
}

html {
    font-size: 62.5%;
}

img {
    display: block;
    max-width: 100%;
}

button {
    cursor: pointer;
    border: none;
    background: transparent;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

h1, h2, h3 {
    font-weight: 700;
    letter-spacing: -0.2rem;
}

h1 {
    font-size: 7.2rem;
    line-height: 9.8rem;
    color: #FFFF;
}

h2 {
    font-size: 5.6rem;
    line-height: 7.6rem;
}

h3 {
    font-size: 4.8rem;
    line-height: 6.5rem;
}

`;

export default GlobalStyle;



