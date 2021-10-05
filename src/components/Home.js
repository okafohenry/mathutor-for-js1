import styled from "styled-components";
import {} from 'react-icons/fa';


const Wrapper = styled.span`
    .home{        
        position: absolute;
        right: 300px;
        padding: 15px;
        font-size: 24px;
        color: #70fada;
    }
` 

export const Home = () => {

    return(
        <Wrapper>
            <span className="home">
                {/*<FaHome />*/}
            </span>
        </Wrapper>
    )
}
    