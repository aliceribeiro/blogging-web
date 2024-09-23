import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    color: #0a5ed7;
    font-weight: 600;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const CreationDate = styled.span`
  color: #0a5ed7;
  font-weight: 600;
  margin-right: 5px;
`;

export default {
  Flex,
  Container,
  Title,
  CreationDate,
};
