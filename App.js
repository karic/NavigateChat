import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UsersMap from './components/UsersMap';
import FetchLocation from './components/FetchLocation';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
  state = {
    userLocation: null,
    friendLocation: null
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      fetch('https://arcane-beyond-37685.herokuapp.com/api/updatelocation', {
        method: "POST",
        headers: {      'Accept': 'application/json',  'Content-Type':'application/json'},
        body: JSON.stringify(position)
      })
      .then(res => {console.log(res)
      })
      .then(err => console.log(err));

      fetch('https://arcane-beyond-37685.herokuapp.com/api/locations', {
        method: "GET",})
      .then(res => {
       locations=JSON.parse(res._bodyText);
       this.setState({friendLocation: locations});
      })
      .then(err => console.log(err));


      this.setState({
        userLocation:{
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        }
      })
    }, err => console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Test live reload</Text> */}
        < UsersMap userLocation={this.state.userLocation} friendsLocation={this.state.friendLocation}/>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Update locations" onPress={() => {this.getUserLocationHandler()}}>
            <Icon name="md-refresh" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Chat" onPress={() => {}}>
            <Icon name="md-chatboxes" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
 

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
