module.exports = {
  apps : [{
    name: "api",
    script: "index.js",
    watch: "./src",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }],
};
