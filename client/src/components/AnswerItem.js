export default function AnswerItem({id, answer, username, upvotes}) {
    return (
        <div className="answer" key={`a${id}`}>
            <h4>{username}</h4>
            <p>{answer}</p>

        </div>
    );
}