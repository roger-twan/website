import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const fetchNotesRepo = (
  request: string,
  values: Record<string, string>,
  headers?: Record<string, string>,
) => {
  return octokit.request(`GET /repos/{owner}/{repo}${request}`, {
    owner: 'roger-twan',
    repo: 'notes',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      ...headers,
    },
    ...values,
  });
};
