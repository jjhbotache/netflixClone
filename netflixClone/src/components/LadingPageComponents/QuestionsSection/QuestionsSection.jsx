import { useRef } from "react";
import { StyledQuestionsSection } from "./QuestionsSectionStyledComponents";
import questions from "./constants/questions";

export default function QuestionsSection() {
  return(
    <StyledQuestionsSection>
      <h2>Frequently Asked Questions</h2>
      <ul>
      {
        questions.map((question, index) => (
          <li key={index}>
            <details >
              <summary>
              {question.question}
              <button>+</button>
              </summary>
              <hr />
              <p>{question.answer}</p>
            </details>
          </li>
        ))
      }
      </ul>
        
    </StyledQuestionsSection>
  )
};
