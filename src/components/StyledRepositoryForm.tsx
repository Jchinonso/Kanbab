import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

const StyledImageContainer = styled.div`
  position: absolute;
  left: calc(35% - 754px / 2);
  top: calc(50% - 254px / 2);
<<<<<<< Updated upstream
=======

  @media (max-width: 1200px) {
    left: 19%;
    top: 16%;
  }
>>>>>>> Stashed changes
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
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

// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;
// gap: 100px;

// position: absolute;
// width: 754px;
// height: 254px;
// left: calc(50% - 754px/2 + 194px);
// top: calc(50% - 254px/2);

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 100px;
  position: absolute;
  width: 754px;
  height: 254px;
  left: calc(50% - 754px / 2 + 194px);
  top: calc(50% - 254px / 2);
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
  gap: 8px;
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
  padding: 8px 16px;
  gap: 8px;
  width: 84px;
  height: 38px;
  background: #eeeeee;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const StyledErrorMessage = styled.p`
  color: #ff0000;
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
};
