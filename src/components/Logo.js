import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    left: 25px;
    
    @media only screen and (max-width: 500px) {
        top: 5px;
        left: 7px;
    }  
`

export const Logo = () => {
    return(
        <Wrapper>
            <img 
            src={process.env.PUBLIC_URL + '/images/logo.png'} 
            alt="logo"
            height="35px"
            width="35px" />
        </Wrapper>
    )
}  
