import styled from 'styled-components';

const Wrapper = styled.div`
    input {
        font-family: 'Josefin Sans' !important;
        margin-top: 30px;
        padding: 10px 30px;
        color: #fff;
        background: #08b9bf;
        border: 2px solid #08b9bf;
        border-radius: 5px;
        letter-spacing: .1rem;
    }

    @media only screen and (max-width: 500px) {
       input {
            width: 100%;
       } 
    }
`

export const Button = ({children, handleSubmit, disabled}) => {
    return(
        <Wrapper>
            <input type="button" 
                value={children}  
                onClick={handleSubmit} 
                disabled={disabled} />
        </Wrapper>
    );
};