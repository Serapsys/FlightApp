import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SuperCard from './SuperCard';
import Icon from 'react-native-vector-icons/Ionicons';


class Card extends React.Component {
    render() {
        const { k: key, v } = this.props;
        return (
            <SuperCard style={styles.card}>
                <View style={{ paddingLeft: 30 }}>
                    <Icon name="md-pin" size={50} color="#4F8EF7" />
                </View>
                <Text style={{ fontSize: 24, width: '50%', paddingLeft: 20 }}>{v}</Text>
                <Text style={{ width: '20%' }}></Text>
                <Text style={{ fontSize: 24, width: '20%', paddingRight: 20, textAlign: 'right' }}>{key}</Text>
            </SuperCard>

        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderColor: 'blue',
        width: '90%',
    },
});

export default Card;