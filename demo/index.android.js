/**
 *android启动配置，需要注册：设置文件为js/setup
 */
 'use strict'
const {AppRegistry} = require('react-native');
const setup = require('./js/setup');

AppRegistry.registerComponent('mhyyapp', setup);
