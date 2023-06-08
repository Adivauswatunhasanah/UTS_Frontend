import StyledProvinces from "./Provinces.styled";

function Provinces(props) {
    const {provinces, setProvinces} = props;

    return(
        <StyledProvinces>
            <h1>Covid ID</h1>
            <h3>Monitoring Perkembangan Covid</h3>

            <table>
                <tr>
                    <th>Provinsi</th>
                    <th>Positif</th>
                    <th>Sembuh</th>
                    <th>Dirawat</th>
                    <th>Meninggal</th>
                </tr>
                {provinces.map((province) => {
                    return(
                        <tr>
                            <td>{province.kota}</td>
                            <td>{province.kasus}</td>
                            <td>{province.sembuh}</td>
                            <td>{province.meninggal}</td>
                            <td>{province.dirawat}</td>
                        </tr>
                    );
                })}
            </table>
        </StyledProvinces>
    )
}

export default Provinces;