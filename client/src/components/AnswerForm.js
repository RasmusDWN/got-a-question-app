import { useState } from "react";

export default function AnswerForm({onAnswerPost}) {

    const [answer, setAnswer] = useState("");

    const handleButtonClick = () => {
        if (typeof onAnswerPost === "function") {
            onAnswerPost(answer);
            setAnswer("");
        }
        console.log("answer", answer);
    } 

    return (
        
        <form>
            <div className="form-group mb-2">
                <textarea onChange={(event) => setAnswer(event.target.value)} className="form-control" value={answer} placeholder="Your answer"></textarea>                
            </div>
            <button type="button" onClick={handleButtonClick} className="btn btn-primary mb-2" >Post Answer</button>
        </form>
        
        
    );
}