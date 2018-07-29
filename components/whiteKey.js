import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class WhiteKey extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>White</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 125,
        height: 250,
        borderStyle: 'solid',
        borderColor: 'red',
        backgroundColor: 'white'
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default WhiteKey;