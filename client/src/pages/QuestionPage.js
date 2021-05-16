import QuestionItem from "../components/QuestionItem";
import AnswerItem from "../components/AnswerItem";
import AnswerList from "../components/AnswerList";
import { useParams } from "@reach/router";
import { useState, useEffect } from "react";
import AnswerForm from "../components/AnswerForm";

const API_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "";

export default function QuestionPage() {
    const [question, setQuestion] = useState(null);
    const [isLoading, setIsLoading] = useState([true]);
    
    const handleAnswerPost = (answer) => {
        const url = `${API_URL}/api/${question._id}/answers`;
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({answer}) // body data type must match "Content-Type" header
          })
        .then (response => {
            if (response.status === 200 || response.status === 201) {
                setIsLoading(true);
            }
        });
    }   
    const params = useParams();
   
    useEffect(() => { 
        if (isLoading && params.id) {
            fetch(API_URL + "/api/" + params.id)
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
        <div className="mx-3">
            <QuestionItem
                id={question._id}
                question={question.title}
                username=""
                desc={question.description}
                hideButton={true}
                />
            <AnswerForm
                onAnswerPost={handleAnswerPost}
                
                />
            { <AnswerList 
                answers={question.answers}

            /> } 
        </div>
    );
}

