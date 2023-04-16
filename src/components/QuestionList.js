import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {questions, setQuestions} ) {

  function onDelete(deletedQuestion){
    const updatedQuestion = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestion)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDelete={onDelete}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
