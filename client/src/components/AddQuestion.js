import { useState } from "react";

export default function AddQuestion({onQuestionPost}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleQuestionPost = (event) => {
        event.preventDefault();

        if (typeof onQuestionPost === "function") {
            onQuestionPost({
                title,
                description
            });
            setTitle("");
            setDescription("");
        }
    } 


    return (
        <form>
            <div className="form-group mb-2">
                <label htmlFor="questionTitle" className="form-label">Enter your question:</label>
                <input className="form-control" onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Title" value={title} />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="questionDescription" className="form-label">Describe your question:</label>
                <textarea className="form-control" id="questionDescription" onChange={(event) => setDescription(event.target.value)} value={description}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleQuestionPost}>Submit question</button>
        </form>
    );

}