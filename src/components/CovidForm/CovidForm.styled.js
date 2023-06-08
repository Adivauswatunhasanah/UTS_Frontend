import styled from "styled-components";

const StyledCovidForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 3rem;

    label{
        margin-top: 1rem;
    }

    .kanan{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 3rem;
        flex-basis: 60%;
    }

    .kiri{
        flex-basis: 40%;
    }

    h3{
        color: #06D6A0;
        margin-top: 0;
        margin-bottom: 2rem;
        font-size: 1.953rem
    }

    p{
        margin-bottom: 3rem;
        color: #64748B;
        font-size: 1.2rem;
    }

    button{
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #06D6A0;
        color: white;
        width: 100%;
        margin-top: 3rem;
    }

    img{
        border-radius: 2rem;
        margin-left: 3rem;
    }

    .form{
        padding: 1rem 0.5rem;
        width: 100%;
    }

    span{
        color: red;
    }
`;

export default StyledCovidForm;