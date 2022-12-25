import React, { useState, useCallback } from "react";
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
import { formatCards, columns } from "../../utils";

const repositoryUrlRegex =
  /^https:\/\/github\.com\/(?<owner>[\w-]+)\/(?<repo>[\w-]+)/;

export const RepositoryForm: React.FC = () => {
  const navigate = useNavigate();
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchBranches = useCallback(async (owner, repo) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/branches`
      );
      const data = await response.json();
      if (response.status === 200) {
        return formatCards(columns, data, 0);
      } else {
        throw new Error("Ops! Something went wrong. Try again.");
      }
    } catch (e) {
      throw new Error("Ops! Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      let match;
      try {
        match = repositoryUrl.match(repositoryUrlRegex);
        if (!match) {
          setError("Ops! Something went wrong. Try again.");
          return;
        }
        const { groups } = match;
        const { owner, repo } = groups;
        const data = await fetchBranches(owner, repo);

        navigate(`/board`, { state: { columns: data, owner, repo } });
      } catch (e) {
        setError(e.message);
      }
    },
    [fetchBranches, navigate, repositoryUrl]
  );

  return (
    <StyledContainer>
      <StyledContent>
        <StyledImage src="/../svgs/logo.svg" alt="Description of the image" />
        <StyledFormContainer>
          <StyledHeading>Start by pasting the repository URL.</StyledHeading>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="text"
                name="repositoryUrl"
                id="repositoryUrl"
                value={repositoryUrl}
                placeholder="https://"
                onChange={(event) => setRepositoryUrl(event.target.value)}
              />
              <StyledButton type="submit" data-testid="submit-button">
                {isLoading ? "Loading..." : "Submit"}
              </StyledButton>
            </StyledForm>
            {error && (
              <StyledErrorMessage data-testid="error-message">
                {error}
              </StyledErrorMessage>
            )}
          </div>
        </StyledFormContainer>
      </StyledContent>
    </StyledContainer>
  );
};
