import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    left: 25px;
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
