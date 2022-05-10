import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import styles from './helpers/styles.js';
import { findNearest } from '../apis/api.js';
import Modal from "react-native-modal";

export default function Map({ navigation }) {
  const [latitude, setLatitude] = useState(0.);
  const [longitude, setLongitude] = useState(0.);
  const [dispensers, setDispensers] = useState([]);
  const [mapView, setMapView] = useState(MapView.ref);
  const [doneLoading, setDoneLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
    // console.log(isModalVisible)
  }

  React.useEffect(() => {
    // if (!doneLoading) {
    setLatitude(42.43619)
    setLongitude(-76.48615)


    findNearest(latitude, longitude).then(data => {
      const initialMarkers = data.data.map((dispenser, _) => ({
        latitude: dispenser.latitude,
        longitude: dispenser.longitude,
        isEmpty: dispenser.num_boxes_full == 0,
        isFull: dispenser.num_boxes_full == dispenser.num_boxes,
        full: dispenser.num_boxes_full,
        all: dispenser.num_boxes,
        id: dispenser.id,
        address: dispenser.address,
        description: dispenser.description
      }))
      setDispensers(initialMarkers)
    }, []);
    //   setDoneLoading(true);
    // }
  });

  const onRegionChange = (region) => {
    setLatitude(region.latitude)
    setLongitude(region.longitude)
  }

  const animateMap = () => {
    mapView.animateToRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }, 800);
  }


  return (
    <><MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      ref={ref => setMapView(ref)}
    >
      {dispensers.map((dispenser) =>
        <Marker
          key={dispenser.id}
          coordinate={{ latitude: dispenser.latitude, longitude: dispenser.longitude }}
          title={dispenser.description}
          description={dispenser.address}
        >
          {dispenser.isEmpty ? <Image source={require('../assets/img/empty.png')} />
            : <Image source={require('../assets/img/filled.png')} />}
        </Marker >)}
    </MapView>

      <View style={styles.locationArrow}>
        <Icon
          raised
          type="font-awesome"
          name='location-arrow'
          color="orange"
          onPress={animateMap} />

      </View><View style={styles.image}>
        <TouchableOpacity
          onPress={handleModal}>
          <Image style={styles.image}
            source={require('../assets/img/find_nearest.png')} />
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={handleModal}>
              <Image style={styles.list}
                source={require('../assets/img/dispensers.png')} />
              {dispensers.map((dispenser) =>
                <View style={styles.dispensers} key={dispenser.id}>
                  <Image
                    style={styles.marker}
                    source={dispenser.isEmpty ?
                      require('../assets/img/empty.png') : require('../assets/img/filled.png')}
                  >
                  </Image>
                  <Text style={styles.description}>{dispenser.description}</Text>
                  <Text style={styles.fraction}>{dispenser.full}/{dispenser.all}</Text>
                  <Text style={styles.address}>{dispenser.address}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </>
  );
}

