import styled from "styled-components";
import { mainStyle } from "../../../../styles/Globalstyle";
import detail from "./Image/detail.jpg";
import modetail from "./Image/modetail.png";

const Wrap = styled.div`
  width: 100%;
`;

const Img = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MoImg = styled.div`
  margin-top: 80px;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const Section3 = () => {
  return (
    <Wrap>
      <Img>
        <img alt="상세정보" src={detail} />
      </Img>
      <MoImg>
        <img alt="상세정보" src={modetail} />
      </MoImg>
    </Wrap>
  );
};
