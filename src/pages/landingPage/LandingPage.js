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
            top: -13px;
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
    }
`

export const LandingPage = () => {
    return(
        <Wrapper>        
            <nav>
                <div className="logo">
                    <span>Guru</span>
                </div>
            </nav>
            <Grid>
                <div className="grid-item2">
                    <div className="msg">
                        <h2>
                        Hey Guru!<br/><br/> Glad to embark on this Mathematics journey with you...
                        It will be an exciting ride, so get in, Let's do this together!
                        </h2>
                        <Link to='/classroom/lesson-one'>
                            <Button>Proceed &rarr;</Button>
                        </Link>
                    </div>                    
                </div> 
                <div className="grid-item1">
                    {/* illustration */}
                    <img 
                        src={process.env.PUBLIC_URL + '/images/illustration_mathutor.png'} 
                        height="600px" 
                        width="600px"
                        className="illustration"/>
                </div>                   
            </Grid>
        </Wrapper>
    );
};

