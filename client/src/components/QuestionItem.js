import Button from "./Button";
import {useNavigate} from "@reach/router";

export default function QuestionItem({ id, question, desc, username, hideButton}) {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`/questions/${id}`);
    };

    return (
        <div className="question" key={`q${id}`}>
            <h2>{question}</h2>
            <h3>Written by {username}</h3>
            <p>{desc}</p>
            {!hideButton && <Button label="Answer" onClick={handleClick} />}
        </div>
    );
}