'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container:{
    flex:1
  }
});

class HelloWorld extends React.Component {
  render() {
    //return React.createElement(React.Text, {style: styles.text}, "Hello World!");
    return <React.Text style={styles.text}> Hello World (Again)</React.Text>;
  }
}

class PropertyFinderApp extends React.Component{
  render(){
    return(
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Proerty Finder',
          component: HelloWorld,
          component: SearchPage
        }}/>
      );
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });