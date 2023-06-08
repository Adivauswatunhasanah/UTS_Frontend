import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <h1>Covid App</h1>
      <ul>
        <li>Global</li>
        <li>Indonesia</li>
        <li>Provinsi</li>
        <li>About</li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
