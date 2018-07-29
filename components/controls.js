import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WhiteKey from './whiteKey';
import BlackKey from './blackKey';

class Controls extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <WhiteKey/>
                <BlackKey/>
                <WhiteKey/>
                <BlackKey/>
                <WhiteKey/>
                <WhiteKey/>
                <BlackKey/>
                <WhiteKey/>
                <BlackKey/>
                <WhiteKey/>
                <BlackKey/>
                <WhiteKey/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        borderStyle: 'solid',
        borderColor: 'red',
        backgroundColor: 'gray',
        justifyContent:'center'
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center'
    }
});

export default Controls;