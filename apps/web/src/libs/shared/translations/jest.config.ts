/* eslint-disable */
export default {
  displayName: 'shared-translations',
  preset: './jest.preset.js',
  rootDir: '../../..',
  roots: [__dirname],
  globals: {},
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      { tsconfig: `${__dirname}/tsconfig.spec.json` },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '<rootDir>/coverage/libs/shared/translations',
}
