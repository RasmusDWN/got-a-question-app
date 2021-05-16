import "./QuestionList.css";
import QuestionItem from "./QuestionItem";

export default function QuestionList({questions}) {
    
    const list = [
        {
            id: 1,
            question: "How do I start using MongoDB?",
            username: "Alloy464",
            desc: "I've never really tried implementing MongoDB in my projects before...",
        },
        {
            id: 2,
            question: "What is the best pattern to optimistic rendering with Apollo in react?",
            username: "Xenia97", 
            desc: "I would like to avoid flicker because of the delay in the server...",
        },
    ];

    if (!questions) {
        return (
            <div>Loading...</div>
        )
    }

    return (
      <div className="question-list">
          {questions.map((question) => (
              <QuestionItem
                id={question._id}
                key={question._id}
                question={question.title}
                desc={question.description} 
                />
          ))}
      </div>  
    );
}