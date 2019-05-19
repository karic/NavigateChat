import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ChatList from './components/ChatList'


export default class ChatScreen extends React.Component {
  state = {
    userLocation: null,
    friendLocation: null
  }

  submitMessage = (ob) => {
      //We can implement sockets here
    console.log(ob.text);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Test live reload</Text>
        <ChatList />
        <TextInput
          style={{height: 40}}
          placeholder="Send message!"
          onSubmitEditing={(text) => this.submitMessage({text})}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});
