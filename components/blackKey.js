import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BlackKey extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Black</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 140,
        borderStyle: 'solid',
        borderColor: 'red',
        backgroundColor: 'black'
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default BlackKey;