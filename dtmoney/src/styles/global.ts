import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;
    --green: #33cc95;
    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape:#ffffff;
}

*{
    margin:0 ;
    padding: 0;
    box-sizing: border-box;
}

//font-sixe: 16px (desktop)
html{
    @media (max-width:1080px){
        font-size: 93.75%; // 16 multiplica 0.9375 = 15
    }
    @media (max-width: 720px) { // 16 multiplica 0.875 = 14
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    //deixa a font com mais detalhe
    -webkit-font-smoothing: antialiased;

}

body,input,textarea,button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}
button {
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allwed;
}
`