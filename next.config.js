/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    publicAssetsPrefix: getPublicAssetsPrefix()
  }
}

function getPublicAssetsPrefix() {
  const isGithubActions = process.env.GITHUB_ACTIONS || false
  let prefix = ''

  if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
    prefix = `/${repo}`
  }

  return prefix
}

module.exports = nextConfig
