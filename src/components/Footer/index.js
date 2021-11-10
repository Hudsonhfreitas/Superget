import { Container } from "../Container.styled";
import { StyledFooter } from "./Footer.styled";
import arrow from "../../assets/arrow.svg";
import calculator from "../../assets/calculator.svg";
import check from "../../assets/check.svg";
import money from "../../assets/money.svg";
export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <div className="footer-wrapper">
                    <div className="footer-left">
                        <div className="left">
                            <h3>2%</h3>
                            <p><strong>de taxa única</strong>crédito à vista <br/> e débito</p>
                        </div>
                        <div className="separator"></div>
                        <div className="right">
                            <p>Como aproveitar?</p>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="step-item">
                            <img src={calculator}></img>
                            <p>Compre e pague sua <strong>SuperGet</strong></p>
                        </div>
                        <img src={arrow}></img>
                        <div className="step-item">
                            <img src={check}></img>
                            <p>Faça seu cadastro no site da <strong>Getnet</strong></p>
                        </div>
                        <img src={arrow}></img>
                        <div className="step-item">
                            <img src={money}></img>
                            <p>Ative sua maquininha e <strong>comece a vender</strong></p>
                        </div>
                    </div>
                </div>
            </Container>
        </StyledFooter>
    )
    
}