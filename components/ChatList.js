import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ChatList = props => {

    state = {
        messageList: [{
            user: 'root',
            text: 'randomtext',
            timestamp: '1',

        },
        {
            user: 'root',
            text: 'randomtext',
            timestamp: '2',

        },
        {
            user: 'root',
            text: 'randomtext',
            timestamp: '3',

        },
        {
            user: 'root',
            text: 'randomtext',
            timestamp: '41',

        },
        {
            user: 'root',
            text: 'randomtext',
            timestamp: '5',

        }
        ],
      }
    


messageListView = this.state.messageList.map(function (i) {
        return (
        <Text key={i.timestamp}>{i.user}: {i.text}</Text>
        )});

 return (
    <View>
    {messageListView}
    </View>

    );

};

export default ChatList;
