jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    publicAssetsPrefix: '',
  },
}))
