import StyledHero from "./Hero.styled";

function Hero() {
    return(
        <StyledHero>
            <div className="kiri">
                <h1>Covid ID</h1>
                <h3>Monitoring Perkembangan Covid</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam exercitationem harum perferendis a odio repudiandae consequuntur esse, molestias ex at illum reprehenderit.</p>
                <button>Vaccine</button>
            </div>
            <div className="kanan">
                <img src="https://picsum.photos/534/354" alt="" />
            </div>
        </StyledHero>
    );
}

export default Hero;
