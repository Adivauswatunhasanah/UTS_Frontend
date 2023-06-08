import StyledFooter from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <div className="kiri">
        <h2>Covid App</h2>
        <p>Developed by Adivatun</p>
      </div>
    
      <ul>
        <li>Global</li>
        <li>Indonesia</li>
        <li>Provinsi</li>
        <li>About</li>
      </ul>
    </StyledFooter>
  );
}

export default Footer;
