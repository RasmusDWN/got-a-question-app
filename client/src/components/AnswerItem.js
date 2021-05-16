import { useState } from "react";

export default function AnswerItem({id, answer, username, upvotes, onVoteClick}) {

    const handleVoteClick = (event) => {
        event.preventDefault();
        console.log("Vote clicked ", id);
        if (typeof onVoteClick === "function") {
            onVoteClick(id);
        }
    }

    return (
        <div className="answer">
            <p>{answer}</p>
            <small>User: {username}</small>
            <div className="votes">Votes <span className="badge bg-info" style={{ cursor: "pointer" }} onClick={handleVoteClick}>{upvotes}</span></div>
        </div>
    );
}