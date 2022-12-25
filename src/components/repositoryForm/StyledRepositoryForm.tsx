
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const StyledContent = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  gap: 13.75em;
`;

const StyledImageContainer = styled.div``;
const StyledImage = styled.img`
  display: flex;
  align-self: flex-start;
`;
const StyledHeading = styled.h1`
  width: 480px;
  height: 116px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 3em;
  line-height: 120%;
  margin: 0;
  letter-spacing: -0.05em;
  color: #151515;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6.25em;
  width: 754px;
  height: 254px;
`;
// styled components
const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  width: 660px;
  margin-right: 10px;
  height: 33px;
  border: none;
  border-bottom: 1px solid #ccc;
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
  }
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  gap: 0.5em;
  width: 84px;
  height: 38px;
  background: #eeeeee;
  border-radius: 4px;
  border: none;
  outline: none;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const StyledErrorMessage = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #d62617;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export {
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledFormContainer,
  StyledHeading,
  StyledImage,
  StyledErrorMessage,
  StyledInput,
  StyledImageContainer,
  StyledContent,
};