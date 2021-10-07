import styled from 'styled-components';


const Wrapper = styled.div`
    width: 500px;
    height: 400px;
  
`


export const About = () => {
    return(
        <Wrapper>
            <div>
                <h2>About Guru</h2>
                <p>
                    Guru is an expert system for teaching mathematics to Junior Secondary school, focusing primarily on Js1.
                    THis project is orginally a final year academic project carried by Gift Omoke and Solomon Rabiu
                </p>
            </div>
        </Wrapper>
    )
}