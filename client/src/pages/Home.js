import { useEffect, useState } from "react";
import QuestionList from "../components/QuestionList";
// import AddQuestion from "../components/AddQuestion";
export default function Home({props}) {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    // const {AddQuestion} = props;

    useEffect(() => { 
        if (isLoading) {
            fetch("http://localhost:8080/api")
            .then(res => res.json())
            .then(data => { 
                setQuestions(data);
                setIsLoading(false);
            });
        }
    }, [isLoading]);

    return (
        <div className="App">
            <h1>Got a Question?</h1>
            {/* <AddQuestion path="" addQuestion={AddQuestion} /> */}
            <QuestionList questions={questions}/>
        </div>
    );
}

