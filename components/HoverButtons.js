import React from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const HoverButtons = props =>  {
    props.styles
    
    return (
<ActionButton buttonColor="rgba(231,76,60,1)">
<ActionButton.Item buttonColor='#9b59b6' title="Update locations" onPress={() => {this.getUserLocationHandler}}>
  <Icon name="md-refresh" style={styles.actionButtonIcon} />
</ActionButton.Item>
<ActionButton.Item buttonColor='#3498db' title="Chat" onPress={() => {}}>
  <Icon name="md-chatboxes" style={styles.actionButtonIcon} />
</ActionButton.Item>
</ActionButton>



);
};


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
export default HoverButtons;