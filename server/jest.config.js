export default {
  clearMocks: true,
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js"
  ],
  moduleNameMapper: {
    "#config/(.*)": "<rootDir>/config/$1",
    "#controllers/(.*)": "<rootDir>/src/controllers/$1",
    "#helpers/(.*)": "<rootDir>/src/helpers/$1",
    "#lib/(.*)": "<rootDir>/src/lib/$1",
    "#routes/(.*)": "<rootDir>/src/routes/$1",
    "#services/(.*)": "<rootDir>/src/services/$1",
    "#testUtils/(.*)": "<rootDir>/src/testUtils/$1"
  },
  roots: [
    "<rootDir>"
  ]
};