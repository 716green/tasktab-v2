// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
  },
  projects: [
    "./",
    {
      root: "./",
      package: "./package.json",
      jsconfig: "./jsonfig.json",
    },
  ],
};
