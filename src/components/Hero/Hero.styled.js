import styled from "styled-components";

export const StyledHero = styled.section`
    padding: 7.1rem 0 0 0;
    background: linear-gradient(350.43deg, #662C62 -83.52%, rgba(102, 44, 98, 0) 97.99%), var(--primary);
    .hero-wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .text-left {
            width: 100%;
            max-width: 57.7rem;
            margin-bottom: 8.4rem;
            span {
                display: block;
                position: relative;
                font-weight: 600;
                font-size: 1.6rem;
                line-height: 2%.2rem;
                letter-spacing: -0.02rem;
                color: #FFFFFF;
                margin-top: 2.5rem;
                &::after {
                    content: '';
                    width: 137px;
                    height: 1px;
                    background: var(--secondary);
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                } 
            }
            h2 {
                margin-top: 1rem;
                color: var(--secondary);
            }
            p, strong{
                color: #FFF;
                font-size: 1.6rem;
                line-height: 2.2rem;
                letter-spacing: -0.02em;
            }
            #indicador {
                margin-top: 1.8rem;
                font-weight: 600;
                width: 19px;
                height: 19px;
                font-size: 1.9rem;
                line-height: 2.6rem;
                transform: rotate(180deg);
            }
            .bottom {
                margin-top: 3.6rem;
                .app {
                    display: flex;
                    justify-content: space-between;
                    a, strong, p {
                        font-size: 16px;
                        line-height: 22px;
                        letter-spacing: -0.02em;
                        color: #FFFF;
                    }
                    p {
                        opacity: 0.9;
                    }
                    strong {
                        opacity: 1;
                    }
                    a {
                        display: flex;
                        align-items: center;
                        img {
                            display: inline-block;
                            margin-right: 0.8rem;
                        }
                    }
                }
            }
        }
        .text-right {
            display: flex;
            justify-content: space-between;
            height: 49rem;
            width: 100%;
            max-width: 53.9rem;
            position: relative;
            .image {
                width: 28.4rem;
                z-index: 9999;
                &::after {
                    content: '';
                    width: 28.4rem;
                    height: 45.86rem;
                    position: absolute;
                    background: linear-gradient(0.13deg, #0D0B10 -36.6%, rgba(13, 11, 16, 0) 106.04%);
                    filter: blur(25px);
                    border-radius: 36px;
                    bottom: -5.5rem;
                    left: 1.78rem;
                }
                img {
                    position: absolute;
                    &.mockup {
                        top: 1.9rem;
                        width: 26.822rem;
                        height: 51.43rem;
                        z-index: 1;
                    }
                    &.off {
                        top: 0;
                        left: -6.2rem;
                        z-index: 999;
                    }
                    &.squares {
                        left: 23.7rem;
                    }
                }
                .bottom {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    height: 15.6rem;
                    width: 100%;
                    max-width: 33.5rem;
                    background-color: rgba(151, 35, 58, 0.3);;
                    border-radius: 0 25px 0 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &-img {
                        display: flex;
                        align-items: flex-start;
                        height: 6.6rem;
                        margin-left: 5.5rem;
                        img {
                            position: relative;
                            margin-top: .3rem;
                        }
                    }
                    &-text {
                        margin-left: 1.14rem;
                        p,span {
                        font-size: 1.6rem;
                        line-height: 2.2rem;
                        color: #FFFF;
                        opacity: 0.8;
                        height: 6.6rem;
                        letter-spacing: -0.02em;
                    }
                    span {
                        font-weight: 700;
                    }
                 }
                    
                }
            }
            .text {
                margin-right: 4.1rem;
                width: 100%;
                max-width: 16.2rem;
                .top {
                    h3, p{
                        color: #FFFF;
                    }
                    p {
                        font-weight: 600;
                        font-size: 1.6rem;
                        line-height: 2.2rem;
                        letter-spacing: -0.02em;
                    }
                }
                ul {
                    margin-top: 3.4rem;
                    li {
                        font-size: 1.6rem;
                        line-height: 2.2rem;
                        letter-spacing: -0.02em;
                        color: #FFFF;
                        position: relative;
                        margin-left: 1.9rem;
                        &::after {
                            content: "";
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                            background: #FFEA0D;
                            position: absolute;
                            top: .8rem;
                            left: -1.9rem;
                        }
                        &:not(:last-child) {
                            margin-bottom: 1.4rem;
                        }
                    }
                }
            }
        }
}
`