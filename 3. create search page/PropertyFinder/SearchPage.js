
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

class SearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
      </View>
    );
  }
}

module.exports = SearchPage;

// var{
// 	StyleSheet,
// 	Text,
// 	TextInput,
// 	View,
// 	TouchableHighlight,
// 	ActivityIndicatorIOS,
// 	Image,
// 	Component,
// } = React;

// var styles = StyleSheet.create({
// 	description: {
// 		marginBottom: 20,
// 		fontSize: 18,
// 		textAlign: 'center',
// 		color: '#656565'
// 	},

// 	container: {
// 		padding: 30,
// 		marginTop: 65,
// 		alignItems: 'center'
// 	}
// });
// class searchPage extends Component {
// 	render(){
// 		return(
// 				<View style={styles.container}>
// 					<Text style={styles.description}>
// 						Search for houses to buy 1
// 					</Text>
// 					<Text style={styles.description}>
// 						Search for houses to buy 2
// 					</Text>
// 				</View>
// 			);
// 	}
// }

// module.exports = SearchPage;var React = require('react-native');
