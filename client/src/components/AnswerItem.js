import { useState } from "react";

export default function AnswerItem({answer, username, upvotes}) {
    return (
        <div className="answer">
            <p>{answer}</p>
            <small>User: {username}</small>
            <div className="votes">Votes <span className="badge bg-info">{upvotes}</span></div>
        </div>
    );
}