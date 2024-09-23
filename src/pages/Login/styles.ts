import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
  width: 100%;
  max-width: 600px;
  gap: 20px;

  img {
    width: 50px;
  }

  input {
    width: 25vw;
    height: 60px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  button {
    width: 82%;
    height: 50px;
  }
`;

export default {
  Container,
  FormContainer,
};
