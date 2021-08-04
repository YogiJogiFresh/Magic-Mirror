// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
};

export default config;

// Or async function
// export default async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   };
// };