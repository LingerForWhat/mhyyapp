'use strict'

var mhyyApp = require('mhyyApp');
var React = require('React');
var Parse = require('parse/react-native');
var Relay = require('react-relay')

var {Provider} = require('react-redux');

var {serverURL} = require('./env');

function setup(): ReactClass<{}> {
	//黄屏警告
	console.disableYellowBox = true;
	Parse.initialize('mhyy-app-2017');
	Parse.serverURL = `${serverURL}/parse`;

	//facebook utils @todo

	class Root extends React.Component {
		state: {
			isLoading: boolean;
			store: any;
		}

		constructor() {
			super();
			this.state = {
				isLoading: true,
				store: configureStore() => this.setState({isLoading: false}).
			};
		}

		render() {
			is(this.state.isLoading) {
				return null;
			}
			return (
				<Provider store = {this.state.store}>
					<mhyyApp />
				</Provider>
			);
		}
	}
	return Root;
}

global.LOG = (...args) => {
	console.log('/------------------\\');
	console.log(...args);
	console.log('\\-------------------/');
	return args[args.length-1];
};

module.exports = setup;


