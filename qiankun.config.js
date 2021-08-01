const { name } = require('./package.json');

const base = {
  name,
  container: '#app',
  activeRule: '/react',
}

module.exports = {
  default: {
    ...base,
    entry: '//localhost:3002',
  }
}