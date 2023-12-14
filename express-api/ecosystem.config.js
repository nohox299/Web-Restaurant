module.exports = {
    apps : [{
      name: 'RestauranteAPI',
      script: 'build/index.js',
      watch: false,
      watch_delay: 1000,
      ignore_watch: ["node_modules", ".git"],
      watch_options: {
        "followSymlinks": false
      }
    }]
  };