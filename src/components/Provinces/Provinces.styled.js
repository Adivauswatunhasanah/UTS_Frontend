import styled from "styled-components";

const StyledProvinces = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

    table {
        border-collapse: collapse;
        width: 80%;
    }

    th, td {
        border: 1px solid grey;
        padding: 8px;
        text-align: center;
        font-size: 1rem;
    }

    th {
        color: #06D6A0;
    }
`;

export default StyledProvinces;