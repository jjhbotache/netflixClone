import { TrendImgContainer } from "./TrendImgStyledComponents";

export default function TrendImg({img,index}) {
  return(
    <TrendImgContainer>
      <span>{index}</span>
      <img src={img} alt="trend" />
    </TrendImgContainer>
  )
};
