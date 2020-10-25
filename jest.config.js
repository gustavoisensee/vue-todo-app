module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  cache: false,
  setupFilesAfterEnv: [
    './src/setupJest.js'
  ]
}