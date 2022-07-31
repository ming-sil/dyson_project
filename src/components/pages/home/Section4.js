import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TitleWrap = styled.div`
  margin-bottom: 40px;
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
const Title = styled.div`
  font-size: 100px;
  font-weight: 900;
  font-family: ${mainStyle.fontType};
  color: ${mainStyle.fontColor};
  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
`;
const STitle = styled.div`
  font-size: 55px;
  font-weight: 100;
  color: ${mainStyle.fontColor};
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-left: 20px;
    margin-top: 10px;
  }
`;
const ProductWrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
const LeftCon = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 38.4%;
  }
`;
const Con = styled.div`
  width: 100%;
  height: 48%;
  background-color: beige;
  &:hover .box {
    display: flex;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(${mainStyle.mainRgbColor}, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
`;
const ViewBtn = styled.div`
  width: 225px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
  border: 1px solid white;
  span {
    margin-left: 10px;
  }
`;
const CenterCon = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 38.4%;
  }
`;
const RightCon = styled.div`
  width: 32%;
  height: 100%;
  background-color: beige;
  &:hover .box {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 20%;
  }
`;

export const Section4 = () => {
  return (
    <>
      <Container>
        <TitleWrap>
          <Title>Product</Title>
          <STitle>제품</STitle>
        </TitleWrap>
        <ProductWrap>
          <LeftCon>
            <Con>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </Con>
            <Con>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </Con>
          </LeftCon>
          <CenterCon>
            <Con>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </Con>
            <Con>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </Con>
          </CenterCon>
          <RightCon>
            <Box className="box">
              <Link to={"/product"}>
                <ViewBtn>
                  제품보러가기{" "}
                  <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </ViewBtn>
              </Link>
            </Box>
          </RightCon>
        </ProductWrap>
      </Container>
    </>
  );
};
