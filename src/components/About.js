import styled from 'styled-components';

const Wrapper = styled.span`

    .about{        
        position: absolute;
        right: 100px;
        padding: 10px;
        color: #08b9bf;
        transition: .1s linear;
    }
    .about:hover{
        border-bottom: 3px solid #08b9bf;
    }
`


export const About = () => {
    return(
        <Wrapper>
            <span className="about">About Guru</span>
        </Wrapper>
    )
}