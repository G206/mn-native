import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Nav from './components/nav';
import Display from './components/display';
import Controls from './components/controls';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Nav/>
                <Display/>
                <Controls/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 25
    },
});
