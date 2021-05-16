import Button from "./Button";
import AnswerItem from "./AnswerItem";
import "./AnswerList.css";

export default function AnswerList({answers, onVote}) {

    const handleVoteClick = (answerId) => {
      if (typeof onVote === "function") {
          onVote(answerId);
      }
    }

    return (
        <div className="answer-list">
            {answers.map((answer) => (
              <AnswerItem
                id={answer._id}
                key={answer._id}
                answer={answer.answer}
                username={answer.username}
                upvotes={answer.upvotes} 
                onVoteClick={handleVoteClick}
              />
          ))}
        </div>
    );
}