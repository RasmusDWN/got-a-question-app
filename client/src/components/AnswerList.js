import Button from "./Button";
import AnswerItem from "./AnswerItem";
import "./AnswerList.css";

export default function AnswerList({answers}) {
    return (
        <div className="answer-list">
            {answers.map((answer) => (
              <AnswerItem
                key={answer._id}
                answer={answer.answer}
                username={answer.username}
                upvotes={answer.upvotes} 
                />
          ))}
        </div>
    );
}