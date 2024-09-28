import styled from "styled-components";

const Title = styled.h1`
  color: #0a5ed7;
  font-size: 24px;
  padding-top: 10px;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 100px;
    margin-bottom: 5px;
  }
`;

const Description = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  margin-bottom: 15px;
`;

export default {
  Title,
  CardBody,
  Description,
};
