import {useState, useRef, useEffect} from 'react';
import { Button, TestQuestions, TestQuestionOptions } from ".";
import { useHistory } from 'react-router';
import styled from 'styled-components';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.div`
    display: inline-flex;
    width: 70%;
    gap: 150px;

    .nextlesson{
        margin-left: 30px;
    }
`
const Container = styled.div`
    h2{
       text-align: center;
       padding-bottom: 30px; 
    }
    h2, h3{
        color:  #08b9bf;
    }
    .text {
        text-align: justify;
        padding-top: 20px;
        padding-bottom: 20px;
        line-height: 2rem;
    }
`


export const Lesson = ({data, nextpath, pupilClass}) => {
    const history = useHistory();
    const [selectedOption, setSelectedOption] = useState([]);
    const [ assessmentScore, setAssessmentScore ] = useState(0);
    const [btnState, setBtnState] = useState(true);
    const [failed, setFailed] = useState([]);
    //const [lessonPath, setLessonPath] = useState([path])

    const handleOptionChange = (e) => {
        const {name, value} = e.target;
        const newSelectedOption = {name, value}; 
        let index = selectedOption.findIndex(item => item.name === name);
        if(index < 0){
            setSelectedOption([...selectedOption, newSelectedOption]);
        }else{
            //replace existing name: value pair with newly selected pair
            let updatedOption = selectedOption.filter(option => option.name !== name );
            updatedOption.push(newSelectedOption)
            setSelectedOption(updatedOption);
        }
                    
    }

    const handleClick = () => {
        let counter = 0;
        let failedQuestions = [];
        
        if(selectedOption.length < 3){
            console.log("not upto 3");
        }else{
            console.log("let's go!");
            for(let i=0; i<data.assessment.length; i++){
                for(let j=0; j<selectedOption.length; j++){
                    if(data.assessment[i].question === selectedOption[j].name){
                        if(selectedOption[j].value === data.assessment[i].answer){ 
                            counter = counter + 1;
                        }else{
                            failedQuestions.push(i + 1);
                            setFailed(failedQuestions);
                        }
                    }
                }
                
            }
            setAssessmentScore(counter);
        }   
        //set radio button to default unchecked 
    }

    const cutOffMark =  5;
    const initialMount = useRef(true);
    useEffect(() => {
        if(initialMount.current){
            initialMount.current = false;
        }else{
            if(assessmentScore === cutOffMark){                
                toast.success("Bravo! proceed to next lesson");
                setBtnState(false);
            }else{                
                toast.error(`Try again Guru.\nYou failed ${failed.length} questions. Question ${failed}` );
                setTimeout(() => {
                    window.location.reload();
                    window.scrollTo(0,0);   
                }, 4800 );
            }                
            setSelectedOption([]);      
        }
       
    }, [history, cutOffMark, assessmentScore, failed]);

    const handleProceed = () => {
        if(assessmentScore === cutOffMark){
            history.push(nextpath);
            window.location.reload();
        }
    }


   return(
    <div>  
        <Container>      
            <h2>{`${pupilClass} Lesson Page `}</h2>
            <h3>{data.topic}</h3>
            <h4>{data.subTopic}</h4>
            <div className="text">{data.text1}</div>
            <img src={data.img} alt={`${data.topic}`}  height="300px" width="500px"/>
            <div className="text">{data.text2}</div>
            <div>
                <h3>Assessment</h3>
                <ol>
                    {data.assessment.map(item => ( 
                        <li key={item.id}>
                            <TestQuestions question={item.question} />
                            <div onChange={handleOptionChange}>
                                <ul>
                                    {item.options.map(option => (
                                        <li key={item.id}>
                                            <TestQuestionOptions 
                                                optionValue={option}  
                                                name={item.question} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </div> 
        </Container>
        <Wrapper>
            <Button handleSubmit={handleClick}>Submit</Button>
            <Button handleSubmit={handleProceed} primary disabled={btnState}>Next lesson &rarr;</Button>
        </Wrapper>
        
        <ToastContainer position="top-center" autoClose={7000} />
    </div>
   ) ;
};