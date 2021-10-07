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
        topic: "Basic Operations on Whole Numbers (Multiplication and Division)",
        subTopic: "PENDAS/ BODMAS",
        text1: "The querySelector() function is a DOM method of JavaScript. This method is used to get the element that matches with the specified CSS selector in the document. Remember you need to specify the name property of the radio button in HTML code.",
        img: "",
        assessment: [
        {
            question: "if one orange cost 6kobo, how many will a trader buy with N120?",
            options: ["160", "200", "2000" ],
            answer: "2000"
        },
        {
            question: "Solve 7 - (-8) + (-8)",
            options: ["7","8", "24" ],
            answer: "7"
        },
        {
            question: "Simplify (+6) - (-4)",
            options: ["2", "10", "6/4" ],
            answer: "10"
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