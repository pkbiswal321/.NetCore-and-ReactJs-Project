module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json|svg)$)": "<rootDir>/config/jest/fileTransform.js"
    // "\\.(jpg|jpeg|png|gif)$": "<rootDir>/src/fileTransformer.js"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
}