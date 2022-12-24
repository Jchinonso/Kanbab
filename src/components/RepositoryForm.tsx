import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledFormContainer,
  StyledHeading,
  StyledImage,
  StyledErrorMessage,
  StyledContent,
  StyledInput,
} from "./StyledRepositoryForm";

const repositoryUrlRegex =
  /^https:\/\/github\.com\/(?<owner>[\w-]+)\/(?<repo>[\w-]+)/;

export const GitHubRepositoryForm: React.FC = () => {
  const navigate = useNavigate();
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [error, setError] = useState("");

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const match = repositoryUrl.match(repositoryUrlRegex);
    if (!match) {
      setError("Ops! Something went wrong. Try again.");
      return;
    }
    const { owner, repo } = match.groups;
    navigate(`/board`, { state: { owner, repo } });
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledImage src="/../svgs/logo.svg" alt="Description of the image" />
        <StyledFormContainer>
          <StyledHeading>Start by pasting the repository URL.</StyledHeading>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StyledForm onSubmit={handleClick}>
              <StyledInput
                type="text"
                name="repositoryUrl"
                id="repositoryUrl"
                value={repositoryUrl}
                placeholder="https://"
                onChange={(event) => setRepositoryUrl(event.target.value)}
              />
              <StyledButton type="submit">Submit</StyledButton>
            </StyledForm>
            {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
          </div>
        </StyledFormContainer>
      </StyledContent>
    </StyledContainer>
  );
};
