import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 6.4rem;
    background: #FFFF;
    display: flex;
    align-items: center;
    .header_wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            max-width: 13.3rem;
            height: 3rem;
        }
        nav {
            width: 100%;
            max-width: 37.8rem;
            ul {
                display: flex;
                align-items: center;
                li {
                    &:not(:last-child) {
                        margin-right: 3.6rem;
                    }
                    a {
                        font-size: 1.3rem;
                        line-height: 1.8rem;
                        color: var(--neutral-2)
                    }
                }
            }
        }
        .left {
            display: flex;
            max-width: 53.3rem;
            width: 100%;
            display: flex;
            align-items: center;
            li {
                &:not(:first-child) {
                        margin-left: 3.6rem;
                    }
               a {
                  font-size: 1.3rem;
                  line-height: 1.8rem;
                  color: var(--neutral-2)
                }
            }
            .union {
                max-width: .3rem;
            }
            .btn-primary {
                margin-left: 7.4rem;
                margin-right: 3.1rem;
            }
            #btn-usuario {
                margin-left: 1.6rem;
            }
        }
    }
    
`