import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps'; 


const UsersMaps = props => {
    let userLocationMarker = null;
    let friendsLocationMarker = null;
    if (props.userLocation){
    userLocationMarker = <MapView.Marker coordinate={props.userLocation}/> };

    if (props.friendsLocation){

        friendsLocationMarker = props.friendsLocation.map(function (i) {
            return <MapView.Marker key={i.timestamp} coordinate={i.coords}/>;
        })



}


    return (
        <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          region={props.userLocation}
        >
            {userLocationMarker}
            {friendsLocationMarker}
         </MapView>
      </View>
    );
};


const styles = StyleSheet.create({
    mapContainer: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });


export default UsersMaps;