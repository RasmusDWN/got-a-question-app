// import { useState } from "react";

// export default function AddQuestion({props}) {
//     const { AddQuestion } = props;

//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     return (
//         <>
//         <h3> Got a Question? Ask!</h3>
//         <input onChange={(event) => setTitle(event.target.value)} type="text" /> <br />
//             What is your question? <br />
//         <input onChange={(event) => setDescription(event.target.value)} type="text" /> <br />

//         <button type="button" onClick={(event) => {
//             console.log(title + description);
//         }}> Submit question
//         </button>
//         </>
//     );

// }