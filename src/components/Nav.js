import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Home, Logo } from '.';

const Wrapper = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    box-shadow: 10px 0px 20px 0px #ebe8e8;
    z-index: 10;

    ul{
        display: inline-flex;

        li{
            padding: 5px;
        }
    }
    
    .about{        
        position: absolute;
        right: 100px;
        padding: 20px 12px;
        color: #08b9bf;
        transition: .1s linear;
    }
    .about:hover{
        border-bottom: 3px solid #08b9bf;
    }
    
    @media only screen and (max-width: 500px) {
        .logo {
           position: relative;
        }   
        .about {
            right: 30px;
        }
    }
    
`


export const Nav = (props) => {
    return(
        <Wrapper>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                           <Logo />
                        </Link>
                    </li>
                    <li>
                        <Link to="/"><Home /></Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span className="about">About</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Wrapper>   
    );
};