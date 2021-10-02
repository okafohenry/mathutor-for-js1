import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0;
`

export const TestQuestionOptions = ({optionValue, name, checked }) => {
    return(
        <Wrapper>
            <div className="option-container">
                <input 
                    type="radio" 
                    value={optionValue} 
                    name={name}
                    checked={checked} />
                    
                <label htmlFor="selectOption">{optionValue}</label>
            </div>
        </Wrapper>
    );
};