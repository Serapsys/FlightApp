import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const SuperCard = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View >
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: 'black',
        alignItems: 'center',
        height: 70,
        elevation: 5,
        width: '90%',
        alignSelf: 'center',
    },
});

export default SuperCard;