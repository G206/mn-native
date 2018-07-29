import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Nav extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Navigation Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        borderStyle: 'solid',
        borderColor: 'red',
        backgroundColor: 'lightgray',
        alignSelf: 'stretch'
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center'
    }
});

export default Nav;