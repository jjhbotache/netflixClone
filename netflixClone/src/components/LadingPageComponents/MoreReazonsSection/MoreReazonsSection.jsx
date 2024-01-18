import { StyledMoreReazonsSection } from "./MoreReazonsSectionStyledComponents";
import reasonsAndImgs from "./constants/reasons";

export default function MoreReazonsSection() {

  return(
    <StyledMoreReazonsSection>
      <h2>More reasons to join</h2>
      <ul>
        {
          reasonsAndImgs.map((reasonAndImg, index) => (
            <li key={index}>
              <h3>{reasonAndImg.reason}</h3>
              <img src={reasonAndImg.img} alt={reasonAndImg.reason} />
            </li>
          ))
        }
      </ul>
    </StyledMoreReazonsSection>
  )
};
