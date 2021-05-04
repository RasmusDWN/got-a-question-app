import { useState } from "react";

export default function AnswerItem({answer, username, upvotes}) {
    return (
        <div className="answer">
            <p>{answer}</p>
            <small>{username}</small>
            <div className="votes">{upvotes}</div>
        </div>
    );
}