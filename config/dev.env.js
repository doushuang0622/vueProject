'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"', //开发环境
  // HOST: 'https://commonp.cmfchina.com/commonweb'
  HOST: 'http://59.37.15.12:8089/commonweb'
})
