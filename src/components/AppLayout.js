import {Nav} from '.';
import styled from 'styled-components';

const Wrapper = styled.div`
      .container{
        height: 60%;;
        width: 50%;
        padding: 30px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 95px;
        overflow: scroll;
        z-index: -1;

        font-size: 16px;
        line-height: 1.2rem;
    }
`


export const AppLayout = ({ children}) => {
    return(
        <Wrapper>
            <Nav />
            <div className="container">{children}</div>
        </Wrapper>
    );
}
