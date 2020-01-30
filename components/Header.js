import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ back, title, goBack, iconName }) => {
    return (

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            height: 150,
            paddingLeft: 20,

        }}>

            <View flex={1}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name={iconName} size={100} color="#4F8EF7" />
                </TouchableOpacity>
            </View>
            <View flex={8} style={{}}>
                <Text style={{ fontSize: 50, textAlign: 'center', fontFamily: 'impact' }}>{title}</Text>
            </View>
            <View flex={1}></View>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Header;