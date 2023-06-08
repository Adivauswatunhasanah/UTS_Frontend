import StyledGlobal from "./Global.styled";
import data from "../../utils/constants/indonesia"

function Global() {
    const globals = data.indonesia;

    return(
        <StyledGlobal>
            <h1>Covid ID</h1>
            <h3>Monitoring Perkembangan Covid</h3>
            <div className="container">
                {globals.map((global) => {
                    return(
                        <div className="kotak">
                            <h2>{global.status}</h2>
                            <h4>{global.total}</h4>
                        </div>
                    )
                })}
            
            </div>
                
            
        </StyledGlobal>
    )
}

export default Global