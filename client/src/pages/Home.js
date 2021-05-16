import { useEffect, useState } from "react";
import QuestionList from "../components/QuestionList";
import AddQuestion from "../components/AddQuestion";

const API_URL = process.env.API_URL || 'http://localhost:8080';
export default function Home() {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    // const {AddQuestion} = props;

    useEffect(() => { 
        if (isLoading) {
            fetch(API_URL + "/api")
            .then(res => res.json())
            .then(data => { 
                setQuestions(data);
                setIsLoading(false);
            });
        }
    }, [isLoading]);

    async function addNewQuestion(title, description) {
        console.log(title, description);
        
        const newQuestion = {
            title: title,
            description: description,
            answers: [],
        };

        const response = await fetch("http://localhost:8080/api", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newQuestion),
        });

        const data = await response.json();
        console.log("Add Question: " +data)
        setQuestions([...QuestionList, data.result.Post])

    }

    return (
        <div className="App">
            <h1>Got a Question?</h1>
            
            {/* <AddQuestion path="" addQuestion={AddQuestion} /> */}
            <QuestionList questions={questions}/>
        </div>
    );
}

