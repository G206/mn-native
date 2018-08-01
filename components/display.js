import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Display extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.pMessage}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        borderStyle: 'solid',
        borderColor: 'red',
        backgroundColor: 'black',
        alignSelf: 'stretch'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 96,
        textAlign: 'center'

    }
});

export default Display;