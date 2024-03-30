import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const notesReposReq = (request: string, values: any, headers?: any) => {
  return octokit.request(`GET /repos/{owner}/{repo}${request}`, {
    owner: 'roger-twan',
    repo: 'notes',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      ...headers,
    },
    ...values,
  })
}

export { notesReposReq }
