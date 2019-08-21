module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '__tests__/(.*)$': '<rootDir>/__tests__/$1'
  },
  setupFiles: ['dotenv/config']
}
