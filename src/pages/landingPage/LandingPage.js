import { Link } from "react-router-dom";
import { Button } from "../../components";
import styled from 'styled-components';

const Wrapper = styled.div`
    nav{
        width: 100%;
        z-index: 20;
        padding: 20px 0;

        .logo{
            margin-left: 200px;
            margin-top: 15px;
        }

        span{
            color: #08b9bf;
            font-weight: bold;
            font-size: 18px;
            position: relative;
            top: -5px;
        }
    }
`



const Grid = styled.div`
    width: 100%;
    height: 500px;
    display: inline-grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;

    .grid-item1 {
        padding: 30px;
        width: 600px;
        position: relative;
        top: -40px;
        right: 200px;

        .illustration{
            position: relative;
            top: -70px;
        }
    }
    .grid-item2 {
        text-align: center;
        padding: 30px;
        width: 600px;
    }
    .msg {
        width: 70%;
        margin: 0 auto;
        position: relative;
        top: 80px;
        line-height: 2rem;
    }
    .sub-msg{
        color: #5555;
    }
    .msg-main{
        color: #08b9bf;
    }
`

export const LandingPage = () => {
    return(
        <Wrapper>        
            <nav>
                <div className="logo">
                <img 
                        src={process.env.PUBLIC_URL + '/images/logo.png'} 
                        alt="logo"
                        height="30px" 
                        width="30px"
                        className="logo_img"/> &nbsp;                        
                        <span>Guru</span>
                </div>
            </nav>
            <Grid>
                <div className="grid-item2">
                    <div className="msg">
                        <h2>
                        <span className="msg-main">Hey Guru!</span>
                        <br/><br/>
                        <span className="sub-msg">Glad to embark on this Mathematics journey with you...
                        It will be an exciting ride, so get in, Let's do this together!</span>
                        </h2>
                        <Link to='/classroom/lesson-one'>
                            <Button>Proceed &rarr;</Button>
                        </Link>
                    </div>                    
                </div> 
                <div className="grid-item1">
                    {/* illustration */}
                    <img 
                        src={process.env.PUBLIC_URL + '/images/background-illustration.png'} 
                        alt="background-illustration"
                        height="500px" 
                        width="700px"
                        className="illustration"/>
                </div>                   
            </Grid>
        </Wrapper>
    );
};

