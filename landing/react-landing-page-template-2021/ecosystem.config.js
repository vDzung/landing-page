module.exports = {
  apps : [{
    name      : 'nextjs',
    script    : 'yarn',
    args      : 'start',
    interpreter: '/bin/bash',
    env: {
      NODE_ENV: 'development'
    }
  }]
};
