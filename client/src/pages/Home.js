import { useEffect, useState } from "react";
import QuestionList from "../components/QuestionList";
import AddQuestion from "../components/AddQuestion";

const API_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "";

export default function Home() {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);

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

    async function handleQuestionPost(question) {
        await addNewQuestion(question);
    }

    async function addNewQuestion({ title, description }) {
        console.log(title, description);
        
        const newQuestion = {
            title: title,
            description: description
        };

        const response = await fetch(API_URL + "/api", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newQuestion),
        });

        const data = await response.json();
        console.log("Added question: ", data);
        setQuestions([...questions, data]);
    }

    return (
        <div className="App mx-3">
            <h1>Got a Question?</h1>
            
            <AddQuestion onQuestionPost={handleQuestionPost} />
            <QuestionList questions={questions}/>
        </div>
    );
}

