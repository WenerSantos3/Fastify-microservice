import { pathsToModuleNameMapper } from 'ts-jest';
import * as tsConfig from './tsconfig.json';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, { prefix: '<rootDir>/' }),
  clearMocks: true,
};
