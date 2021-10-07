import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    right: 45px;
    padding: 5px 3px;
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