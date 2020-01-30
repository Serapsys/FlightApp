import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image, TextInput, Modal, TouchableOpacity, Alert, Button } from "react-native";
import SearchFlight from './components/SearchFlight';
import Header from './components/Header';
import SuperCard from './components/SuperCard';
import Icon from 'react-native-vector-icons/Ionicons';
import TravellingInfoCard from './components/TravellingInfoCard'
export default class App extends Component {
  state = {
    data: [],
    text: "",
    isModal: false,
    to: '',
    from: '',
    isFrom: true
  };
  fetchData = async (text) => {
    if (text != "") {
      const cityName = "DEL";
      const response = await fetch(`https://www.cleartrip.com/places/airports/search?string=${text}`);
      const json = await response.json();
      // console.log("lol", json)
      this.setState({ data: json });
    }
  };

  onModalToggle = () => {
    this.setState({
      isModal: !this.state.isModal,
      data: [],
    });
  }

  selectedAirport = (text) => {
    this.state.isFrom ? this.setState({ from: text, isModal: !this.state.isModal, data: [], }) : this.setState({ to: text, isModal: !this.state.isModal, data: [], });
  }

  goBack = () => {
    console.log("Go back is calling2");

  }

  switchAirports = () => {
    let temp = this.state.from;
    this.setState({
      from: this.state.to,
      to: temp,

    });

  }

  render() {
    return (
      <View>
        <Header back={"Back"} title={"Flight Booking"} goBack={this.goBack} iconName="ios-arrow-back" />
        <View style={{ height: 20 }}>

        </View>
        <View style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
        }}>
          <SuperCard style={styles.fromToStyle}>
            <View style={{ flexDirection: 'row' }}>
              <View flex={3} style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() =>
                  this.setState({
                    isModal: !this.state.isModal,
                    isFrom: true
                  })}>
                  <Text style={styles.input}>{this.state.from == '' ? 'From' : this.state.from}</Text>
                </TouchableOpacity>
              </View>
              <View flex={3} style={{ alignItems: 'center', alignSelf: 'center' }}>

                <TouchableOpacity onPress={this.switchAirports}>
                  <Icon name="ios-swap" size={100} color="#4F8EF7" />
                </TouchableOpacity>
              </View>
              <View flex={3} style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                  this.setState({
                    isModal: !this.state.isModal,
                    isFrom: false
                  })
                }}>
                  <Text style={styles.input}>{this.state.to == '' ? 'To' : this.state.to}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SuperCard>
        </View>


        <SearchFlight selectAirport={this.selectedAirport} isModal={this.state.isModal} data={this.state.data} onModalClose={this.onModalToggle} takeData={this.fetchData} />
        <View style={{ height: 30, }}></View>
        <TravellingInfoCard iconName="ios-calendar" title="Departure Date" value="Wed, 16 Jan '19" />
        <View style={{ height: 30, }}></View>
        <TravellingInfoCard iconName="md-contacts" title="Passengers" value="2 Adults" />
        <View style={{ height: 30, }}></View>
        <TravellingInfoCard iconName="md-paper-plane" title="Cabin Class" value="Business" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    fontSize: 50
  },
  fromToStyle: {
    flex: 1,
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});