import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 6.4rem 0 6.7rem 0;
    background: white;
    position: relative;
    &::after {
        content: '';
        height: 2px;
        width: 119.8rem;
        height: 2px;
        background: #F22824;
        position: absolute;
        bottom: 1px;
        right: 0;
    }
    .footer-wrapper {
        display: flex;
        justify-content: space-between;
        .footer-left {
            display: flex;
            .left {
                margin-right: 6.1rem;
                h3 {
                    color: var(--primary-light);
                }
                p {
                    font-size: 1.4rem;
                    line-height: 1.9rem;
                    letter-spacing: -0.02em;
                    color: var(--neutral-2);
                    strong {
                        display: block;
                        font-weight: 600;
                        font-size: 1.8rem;
                        line-height: 2.5rem;
                        letter-spacing: -0.02em;
                        color: var(--neutral-1);
                    }
                }
            }
            .separator {
                width: 1px;
                background: rgba(173, 181, 189, 0.4);
                height: 100%;
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: #B22A41;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    top: 50%;
                    left: 50%;
                    border: 1rem solid #FFF;
                }
            }
            .right {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 8.8rem;
                p {
                    font-weight: 600;
                    font-size: 1.8rem;
                    line-height: 2.5rem;
                    letter-spacing: -0.02em;
                    color: var(--neutral-2);
                }
            }
        }
        .steps {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 62rem;
            .step-item {
                width: 100%;
                max-width: 15.6rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img {
                    height: 5.3rem;
                }
                p {
                    font-size: 1.6rem;
                    line-height: 2.2rem;
                    letter-spacing: -0.02em;
                    text-align: center;
                    margin-top: 1.1rem;
                }
            }
        }
    }
`