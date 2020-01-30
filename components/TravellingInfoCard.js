import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SuperCard from './SuperCard';

const TravellingInfoCard = ({ iconName, title, value }) => {
    return (
        <SuperCard style={{ height: 100, backgroundColor: 'white' }}>
            <View flex={1} style={{ flexDirection: 'row', height: 100 }}>
                <View flex={1} style={{ alignSelf: 'center', paddingLeft: 50 }}>
                    <Icon name={iconName} size={70} color="#4F8EF7" />
                </View>
                <View flex={3} style={{ alignSelf: 'center' }}>
                    <Text style={{ fontSize: 20 }}> {title}</Text>
                    <Text style={{ fontSize: 32 }}> {value}</Text>
                </View>
                <View flex={4}></View>
                <View flex={1} style={{ alignSelf: 'center' }}>
                    <Icon name="ios-arrow-forward" size={30} color="#000000" />
                </View>
            </View>
        </SuperCard>
    );
}

const styles = StyleSheet.create({

})

export default TravellingInfoCard;