import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Home, About } from '.';

const Wrapper = styled.nav`
    width: 100%;
    margin-top: 0;
    background: #fff;
    padding: 5px 0;
    display: inline-block;
`

export const Nav = () => {
    return(
        <Wrapper>
            <nav>
                <Link to="/"><img src="" alt="logo" /></Link>
                <Link to="/"><Home /></Link>
                <Link to="/about"><About /></Link>
            </nav>
        </Wrapper>   
    );
};