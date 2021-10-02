import {Nav, Footer} from '.';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: blue;

    .container{
        height: 100%;
        padding: 15px 0;
        overflow-y: scroll;
    }
`


export const AppLayout = ({children}) => {
    return(
        <Wrapper>
            <Nav />
            <div className="container">{children}</div>
            <Footer />
        </Wrapper>
    );
}
