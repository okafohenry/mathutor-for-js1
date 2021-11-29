import styled from 'styled-components';


const Input = styled.button`
    font-family: 'Josefin Sans' !important;
    width: 300px;
    margin-top: 30px;
    padding: 10px 30px;
    border-radius: 5px;
    letter-spacing: .1rem;
    background: #999;
    border: 2px solid #999;
    color: #fff;

    @media only screen and (max-width: 500px) {
        width: 100%;
    }
`
export const NextButton = styled(Input)`
    color: #fff;
    background: #08b9bf;
    border: 2px solid #08b9bf;
`

export const Button = ({children, handleSubmit, disabled}) => {
    return(
        <Input onClick={handleSubmit} disabled={disabled}> {children} </Input>
    );
};