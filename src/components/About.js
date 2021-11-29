import { AppLayout } from '.';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 500px;
    height: 400px;
  
    @media only screen and (max-width: 500px) {
        width: 100%;
    }  
`

export const About = () => {
    return(
        <AppLayout >
            <Wrapper>
                <div className="about">
                    <h2>About Guru</h2>
                    <p>
                    Guru is an online learning Management System for teaching mathematics to Junior Secondary school, focusing primarily on Js1.
                    This project is orginally a final year academic project
                    </p>
                </div>
            </Wrapper>
        </AppLayout>   
    )
}