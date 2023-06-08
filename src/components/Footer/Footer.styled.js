import styled from "styled-components";

const StyledFooter = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #06D6A0;

    ul{
        display: flex;
    }

    li{
        list-style: none;
        margin-left: 2rem;
        margin-right: 3rem;
        margin-top: 0.5rem;
        color: white;
    }

    h2, p{
        margin: 0.5rem 1rem 0.5rem 1rem;
        color: white;
    }
`;

export default StyledFooter;