import { StyledButtonWhite } from "../Buttons/Buttons.styled";
import { Container } from "../Container.styled";
import { StyledHero } from "./Hero.styled";
import logo_small from "../../assets/logo-small.png";
import mockup from "../../assets/mockup.png";
import off from "../../assets/50off.png";
import squares from "../../assets/squares.png";
import calendar from "../../assets/calendar.png";

export default function Hero() {
    return (
        <StyledHero>
            <Container>
                <div className="hero-wrapper">
                    <div className="text-left">
                        <h1>SuperGet Mobile</h1>
                        <span>de R$ 118,90 por</span>
                        <h2>12x R$ 4,90</h2>
                        <p>ou <strong>R$ 58,80 à vista</strong> no boleto</p>
                        <div id="indicador">👆</div>
                        <div className="bottom">
                            <div className="app">
                                <StyledButtonWhite>comprar</StyledButtonWhite>
                                <a href="#"><img src={logo_small}></img><p>Baixe nosso <strong>app exclusivo</strong></p></a>
                            </div>
                            <p>* Frete grátis para todo Brasil</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="image">
                            <img className="mockup" src={mockup}></img>
                            <img className="off" src={off}></img>
                            <img className="squares" src={squares}></img>
                            <div className="bottom">
                                <div className="bottom-img">
                                    <img src={calendar}></img>
                                </div>
                                <div className="bottom-text">
                                    <p>Receba em até <br /><span>2 dias úteis</span> na <br/>sua conta</p>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <h3>2%</h3>
                                <p>no crédito à vista <br /> e no débito</p>
                            </div>
                            <ul>
                                <li>Conexão bluetooth</li>
                                <li>Realize transações <br /> pelo celular</li>
                                <li>Venda pelo app <br /> SuperGet Mobile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </StyledHero>
    )
}