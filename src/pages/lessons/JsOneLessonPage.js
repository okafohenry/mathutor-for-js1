import {AppLayout, Lesson} from '../../components';
import {Route, Switch, useRouteMatch,} from 'react-router-dom';



const tutorClass = "Js 1";
const scheme = [
    {
        id: 1,
        topic: "NUMBER SYSTEM",
        subTopic: "Roman Numerals",
        text1: "There were many ancient ways of writing numbers, part of which are the Hindu Arabic system, Tally system, Roman e.t.c. While so many have gone into extinction, the roman numerals are still in use till date.\n  The Roman system was developed about 300BC. The Romans used capital letters of the alphabet for numerals as illustrated in the table below",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633555147/roman-numerals-1-1000_z8hmn9.png",
        text2: "Conversion Rules: When the symbol has a greater value than the symbol after it, add the symbols, such as: XI = X + I = 10 + 1 = 11. When the symbol has a lesser value than the symbol after it, subtract the symbol with the lesser value from the symbol with the greater value: IX = X – I = 10 - 1 = 9. When the symbols have equal value, add them: XX = X + X = 10 + 10 = 20.",
        assessment: [
            {
                question: "What number does these Roman numerals represent?\n XLVI and MMMDCI",
                options: ["99 and 2954", "46 and 3601", "99 and 3602" ],
                answer: "46 and 3601"
            },
            {
                question: "Write 2011 in Roman numeral",
                options: ["MMDCI", "MMXI", "MMCM" ],
                answer: "MMXI"
            },
            {           
                question: "Calculate C + LV and select the correct answer",
                options: ["155", "150", "105" ],
                answer: "155"
            }
        ]

    },
    {
        id: 2,
        topic: "Basic Operations on Whole Numbers (Addition and Subtraction)",
        subTopic: "PENDAS/ BODMAS",
        text1: `In arithmetic, there are two types of components: the numbers themselves and the  operators (also called operations) that tell you what to do with those numbers. The basic operators in arithmetic are addition (sum), subtraction (difference), multiplication (product) and division (quotient). \n So, in the sum of 7 x 3 + 5 there are three numbers; 7, 3 and 5 and two operators, a multiplication(x) and an addition (+). the order of operations used throughout mathematics, science, technology and many computer programming languages is expressed here. \n\n 1. Exponents (index) and roots\n 2. Multiplication and division\n 3. Addition and subtraction\n\n The definitive order of operations is summed up in the acronymBODMAS which stands for Brackets, Order, Divide, Multiply, Add, Subtract. it would be easier if BODMAS was recognised worldwide, but unfortunately it isn't. In the USA it is usually called PEMDAS (Parenthesis, Exponent, MUltiply, Divide, Add, Subtract). Canadians sit in the middle with BEMDAS (Brackets,Exponent, Multiply, Divide, Add, Subtract). Regardless of the exact terminology, the sequence remains the same.`,
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633555147/download_mqkaz8.png",
        text2: "the highest level order is defined by anything contained in brackets. step 2 is the order of exponent and it all relate to operations containing powers or indices such as squaring or sqaure rooting. The third and Fourth steps, division and multiplication have equal weights and so form a third level order of operations. Again the  fifth and sixthe steps, addition and subtraction carry equal weights. ",
        assessment: [
            {          
                question: "Mary is 3 years older than Grace. If grace is 17years. Find the age of Mary",
                options: ["3 years", "14 years", "20 years" ],
                answer: "20 years"
            },
            {
                question: "a + 13 = 23, a = ?",
                options: ["10", "36", "30" ],
                answer: "10"
            },
            {
                question: "-359 + 469 = ?",
                options: ["110", "-110", "828" ],
                answer: "110"
            }
        ]
    }, 
    {
        id: 3,
        topic: "Number Base",
        subTopic: "Counting in Base 2",
        text1: "A number base is the number of digits or combination of digits that a system of counting uses to represent numbers. A base can be any whole number greater than 0. The most commonly used number system is the decimal system, commonly known as base 10. Its popularity as a system of counting is most likely due to the fact that we have 10 fingers. The base of any number may be written beside the number. For example, 178 is read as 17 base 8, which is 15 in base 10.",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633603277/number_system___fd38n1.png",
        text2: "Consider how counting works in the decimal system. We start with 1 digit. We count using the numerals 0 through 9. After we reach 9, we've run out of numerals. So, we have to add a second digit. We start that digit at 1. Then we cycle the first digit through the numerals 0 through 9 again, to create the numbers 10-19. After we reach 19, we've run out of numerals in the \"1's place\" again, so we increment the second digit to 2. Eventually, we reach 99. We've run out of numerals in the \"1's\" place, so we want to increment the second digit again. But, now we've run out of numerals for the second digit as well. So, we have to introduce a 3rd digit, and we start it at 1.\n And so on Counting using binary numbers works the same way, except that we only have 2 numerals (1 and 0) for each digit. So, we start with 1 digit. We count using the numerals 0 through 1: 0 & 1, We are already out of numerals. So, we have to add a second digit. We start that digit at 1, and then we can cycle the first digit through the numerals 0 through 1 again: 10 & 11",
        assessment: [
        {
            question: "What is h=the decimal value of 1111 1110",
            options: ["239", "None of these options", "255" ],
            answer: "None of these options"
        },
        {
            question: "A number of base is the method we use to display and process number. Since we have 10 fingers we probably developed our number system based on 10 different digits. What digits are used in the octal system? Octal means eight.",
            options: ["1-8","0-7", "1-7" ],
            answer: "0-7"
        },
        {
            question: "Convert 100(base 2) to base 10",
            options: ["6", "10", "4" ],
            answer: "4"
        }]
    }
] 

export const JsOneLessonPage = () => {
    let { path } = useRouteMatch();
    return(
        <AppLayout>
            <Switch>
                <Route path={`${path}/lesson-one`} exact>
                    <Lesson 
                        pupilClass={tutorClass} 
                        data={scheme[0]} 
                        nextpath={`${path}/lesson-two`}/>
                </Route>
                <Route path={`${path}/lesson-two`}>
                    <Lesson 
                        pupilClass={tutorClass} 
                        data={scheme[1]} 
                        nextpath={`${path}/lesson-three`}/>
                </Route> 
                <Route path={`${path}/lesson-three`}>
                    <Lesson 
                        pupilClass={tutorClass} 
                        data={scheme[2]} 
                        nextpath={"/advance"} />
                </Route>        
            </Switch> 
        </AppLayout>
    );
};