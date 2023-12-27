import styled from "styled-components"

export default function PlansSection() {
  const StyledPlanSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 120rem;
    padding: 0 2rem;
    gap: .5rem;
    &>h2 {
      font-size: 1.125rem;
      font-weight: 500;
    }
  `;

  const StyledPlanArticle = styled.article`
    background: linear-gradient(180deg, #6c1f41 0%, #210d0e 100%);
    padding: 2rem 1rem;
    border-radius: 1rem;
    &>h3 {
      font-size: 1.5rem;
      font-weight: 500;
    }
    &>p {
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

    </StyledPlanSection>
    </>
  )
};
