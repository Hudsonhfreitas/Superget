import { StyledHeader } from "./Header.styled";
import { Container } from '../Container.styled';
import logo from '../../assets/logo.png';
import union from '../../assets/Union.svg';
import carrinho from '../../assets/carrinho.svg';
import usuario  from '../../assets/usuario.svg';
import { StyledButton, StyledButtonRounded } from "../Buttons/Buttons.styled";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <div className="header_wrapper">
                    <a href="#" className="logo">
                        <img src={logo}></img>
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Maquininha</a>
                            </li>
                            <li>
                                <a href="#">App SuperGet</a>
                            </li>
                            <li>
                                <a href="#">Cartão Getnet</a>
                            </li>
                            <li>
                                <a href="#">Ajuda</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="union">
                        <img src={union}></img>
                    </div>
                    <ul className="left">
                        <li><a href="#">Quero Alugar</a></li>
                        <li><a href="#">Cadastro</a></li>
                        <StyledButton className="btn-primary">Pedir maquininha</StyledButton>
                        <StyledButtonRounded className="btn-secondary" id="btn-carrinho"><img src={carrinho}></img></StyledButtonRounded>
                        <StyledButtonRounded className="btn-secondary" id="btn-usuario"><img src={usuario}></img></StyledButtonRounded>
                    </ul>
                </div>
            </Container>
        </StyledHeader>
    )
}