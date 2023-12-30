import styled from "styled-components"
import { bigScreenWidthInPx } from "../../consts/styleConsts";

export default function PlansSection() {
  const StyledPlanSection = styled.section`

    padding: 0 2rem;
    &>div{
      display: flex;
      flex-direction: row;
      max-width: 120rem;
      gap: .5rem;
      &>h2 {
        font-size: 1.125rem;
        font-weight: 500;
        margin-bottom: 1rem;
      }
    }
    @media all and (width>${bigScreenWidthInPx + "px"}) {
      padding: 0 5rem;
      &>div{
        gap: .75rem;
      }
      &>h2 {
        font-weight: 500;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      
    }
  `;

  const StyledPlanArticle = styled.article`
    background: linear-gradient(180deg, #6c1f41 0%, #210d0e 100%);
    padding: 1.5rem 1rem;
    border-radius: 1rem;
    min-width: 200px;
    width: 100%;
    &>h3 {
      margin-top: .75rem;
      font-size: 1.25rem;
      font-weight: 500;
    }
    &>p {
      color: rgba(255,255,255,.7);
      font-size: 1rem;
      font-weight: 400;
    }
    &>p:last-child {
      font-size: 1rem;
      font-weight: 500;
    }
  `;

  return(
    <>
    <StyledPlanSection>
      <h2>A Plan To Suit Your Needs</h2>
      <div>
        <StyledPlanArticle>
          <h3>BASIC</h3>
          <p>A great way to enjoy all your favorite shows and movies on a budget.</p>
          <p>COP 16,900/month</p>
        </StyledPlanArticle>
        <StyledPlanArticle>
          <h3>STANDARD</h3>
          <p>All the entertainment you love, in Full HD video quality.</p>
          <p>COP 26,900/month</p>
        </StyledPlanArticle>
        <StyledPlanArticle>
          <h3>PREMIUM</h3>
          <p>A cinematic experience with the best picture and audio quality.</p>
          <p>COP 38,900/month</p>
        </StyledPlanArticle>
      </div>

    </StyledPlanSection>
    </>
  )
};
