import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
export default class SearchNearBy extends React.Component {  
  constructor(props)
  {
    super(props);
    this.state = { 
        hasLocationPermission: false,
        current_latitude: 0,
        current_longitude: 0,
        target_latitude: 0,
        target_longitude: 0,
        hospitalList: [],
        hospitalName: [],
        hospitallatitudes: [],
        hospitallongitudes: []
    }
  }
  navigate  = this.props.navigation;
  
  componentDidMount() {
    this.getLocationAsync();
  }

  async getLocationAsync () {
    const { status } = await Permissions.askAsync(
      Permissions.LOCATION
    );
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        hasLocationPermissions: true,
        current_latitude: location.coords.latitude,
        current_longitude: location.coords.longitude,
      });
    } else {
      alert('Location permission not granted');
    }
  };

  renderItemComponent = (data) =>
        <TouchableOpacity style={styles.buttonList}
          onPress={() => this.hadnleHospitalSelect(data, this.state.hospitalName, this.state.hospitallatitudes, this.state.hospitallongitudes)}>
          <Text style={styles.buttonText}>
            {data}
          </Text>
        </TouchableOpacity>

  hadnleHospitalSelect = (hospital_name, hospitalName, hospitallatitudes, hospitallongitudes) => {
    let idx
    idx = hospitalName.indexOf(hospital_name)
    this.setState({
      target_latitude: hospitallatitudes[idx],
      target_longitude: hospitallongitudes[idx]
    })
    console.log(idx)
    console.log(this.state.target_latitude)
    console.log(this.state.target_longitude)
    if (this.state.target_longitude === 0){
      console.log('click again')
    }else{
      this.props.navigation.navigate("MapDirection", {
        cur_lat:this.state.current_latitude, 
        cur_long:this.state.current_longitude,
        tar_lat:this.state.target_latitude,
        tar_long:this.state.target_longitude})
    }
  }

  handleHospitalSearch = () => {
    console.log("here")
    const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    const location = `location=${this.state.current_latitude},${this.state.current_longitude}`;
    const radius = '&radius=1000';
    const type = '&type=hospital';
    const key = '&key=<GOOGLE_API_KEY>';
    const hospitalSearchUrl = url + location + radius + type + key;
    fetch(hospitalSearchUrl)
      .then(response => response.json())
      .then(result => this.setState({hospitalList: result}))
      .catch( e => console.log(e))
    console.log(hospitalSearchUrl)
    if (typeof (this.state.hospitalList.results) === 'undefined'){
      console.log('undefinde state')
    } 
    else{
      if (this.state.hospitalName.length < 5){
        for (let i = 0; i < this.state.hospitalList.results.length; i++) {
          this.state.hospitallatitudes.push(this.state.hospitalList.results[i].geometry.location.lat)
          this.state.hospitallongitudes.push(this.state.hospitalList.results[i].geometry.location.lng)
          this.state.hospitalName.push(this.state.hospitalList.results[i].name)
        }
      }
    }
  }
  render() {
    if (typeof (this.state.hospitalList.results) !== 'undefined'){
      this.state.hospitalList.results = this.state.hospitalList.results.slice(0, 5)
    }
    return (
      <View style={styles.container}>
        <FlatList style={styles.flatList}  
          data={this.state.hospitalName}
          renderItem={({item}) => this.renderItemComponent(item)}
        />
        {this.state.current_latitude === 0 &&
        <Text>Getting your location. It takes a few seconds</Text> 
        }
        
        {this.state.current_latitude === 0 &&
          <TouchableOpacity style={styles.buttonWait}>
            <Text style={styles.buttonText}>Search Hospitals</Text>
          </TouchableOpacity>
        }
        {this.state.current_latitude !== 0 &&
          <TouchableOpacity style={styles.button}
            onPress={() => this.handleHospitalSearch()}>
            <Text style={styles.buttonText}>Search Hospitals</Text>
          </TouchableOpacity>
        }
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
  },
  flatList: {
    width:'100%',
    flex: 1
  },
  button: {
    width:'80%',
    height: 50,
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonList: {
    width:'80%',
    height: 50,
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 15,
    alignSelf: 'center'
  },
  buttonWait: {
    width:'80%',
    height: 50,
    borderRadius: 6,
    backgroundColor: "#dcdcdc",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "#f8f8ff",
    textAlign: "center",
    fontSize: 16,
  }
})