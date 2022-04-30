const { mountRoutes } = require("remix-mount-routes");
const STAGE = process.env.STAGE || "dev";

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "arc",
  server: "./server.js",
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "server/index.js",
  publicPath: `/${STAGE}/_static/build/`,
  routes: (defineRoutes) => {
    return mountRoutes(`/${STAGE}`, "routes");
  },
};
