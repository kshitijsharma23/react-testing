module.exports = {
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    "collectCoverageFrom": [
        "src/**/*.{js,ts,tsx}",
        "!src/index.tsx",
        "!src/App.tsx"
    ],
    "setupFiles": [
        "<rootDir>/src/setupTests.ts"
    ],
    "moduleNameMapper": {
        "\\.css$": "<rootDir>/src/styleMock.js"
    }
};
