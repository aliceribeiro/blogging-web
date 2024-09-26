import styled from "styled-components";

const Container = styled.div`
  .custom-collapse:hover {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    cursor: pointer;
  }
`;

const Search = styled.div`
  padding: 20px 0;
`;

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
  Container,
  Title,
  Search,
  CardBody,
  Description,
};
