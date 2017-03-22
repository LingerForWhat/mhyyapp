'use strict';

var React = require('React');
var AppState = require('AppState');
var LoginScreen = require('./login/LoginScreen');
var PushNotificationController = require('./PushNotificationController');
var StyleSheet = require('StyleSheet');
var MHNavigator = require('MHNavigator');
var CodePush = require('react-native-code-push');
var View = require('View');
var StatusBar = require('StatusBar');

var{
	loadConfig,
	loadMaps,
	loadNotifications,
	loadSessions,

	loadHuiben,
	loadMy,
} = require('./actions');

var {updateInstallation} = require('./actions/installation');
var {connect} = require('react-redux');

var {version} = require('./env.js');

var mhyyApp = React.createClass(
	componentDidMount: function() {
		AppState.addEventListener('change', this.handleAppStateChange);

		this.props.dispatch(loadHuiben);
		this.props.dispatch(loadMy);

		updateInstallation({version});
		CodePush.sync({installMode: CodePush.Installmode.ON_NEXT_RESUME});
	},

	componentWillUnmount: function() {
		AppState.removeEventListener('change', this.handleAppStateChange);
	},

	handleAppStateChange: function(appState) {
		if(appState === 'active') {
			this.props.dispatch(loadSessions());
			this.props.dispatch(loadNotifications());
			this.props.dispatch()
		}
	}

	render: function() {
		if (!this.props.isLoggedIn) {
			return <LoginScreen />;
		}
		return (
			<View style = {styles.container}>
				<StatusBar
					translucent = {true}
					backgroundColor="rgba(0, 0, 0, 0.2)"
          			barStyle="light-content"
        		 />
        		 <MHNavigator />
        		 <PushNotificationController />
        	</View>

		);
	},


)