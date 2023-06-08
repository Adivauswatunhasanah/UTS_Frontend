import styled from "styled-components";

const StyledGlobal = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5rem;

    h1{
        color:  #06D6A0;
        margin-bottom: 0;
        font-size: 3.052rem;
        text-align: center;
    }

    h3{
        color: #118AB2;
        margin-top: 0;
        margin-bottom: 4rem;
        font-size: 1.953rem;
        text-align: center;
    }

    .kotak{
        width: 300px;
        height: 300px;
        background-color: rgba(0,0,0, 0.1);
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h4{
        font-size: 2rem;
    }

    h2{
        font-size: 2.5rem;
        color: #118AB2;
    }

    h2, h4{
        margin: 0;
    }

    .container{
        display: flex;
        justify-content: space-around;
    }

`;

export default StyledGlobal;