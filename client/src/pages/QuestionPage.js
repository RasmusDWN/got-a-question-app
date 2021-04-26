import QuestionItem from "../components/QuestionItem";
import AnswerList from "../components/AnswerList";
import { useParams } from "@reach/router";
import { useState, useEffect } from "react";

export default function QuestionPage() {
    const [question, setQuestion] = useState(null);
    const [isLoading, setIsLoading] = useState([true]);

    const params = useParams();
   
    useEffect(() => { 
        if (isLoading && params.id) {
            fetch("http://localhost:8080/api/" + params.id)
            .then(res => res.json())
            .then(data => { 
                setQuestion(data);
                setIsLoading(false);
            });
        }
    }, [isLoading]);

    if (!question) {
        return <div>Loading...</div>
    }

    return (
        <div className="question-page">
            <QuestionItem
                id={question._id}
                question={question.title}
                username=""
                desc={question.description}
                hideButton={true}
                />
            { <AnswerList 
                answers={question.answers}

            /> } 
        </div>
    );
}

