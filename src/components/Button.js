import styled from 'styled-components';

const Wrapper = styled.div`
    input {
        font-family: 'Josefin Sans' !important;
        margin-top: 30px;
        padding: 10px 30px;
        background: #08b9bf;
        color: #fff;
        border: 1px solid #08b9bf;
        border-radius: 5px;
        letter-spacing: .1rem;

        &.invert{
            background: #fff;
            border: 2px solid #08b9bf;
            color: #08b9bf;
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