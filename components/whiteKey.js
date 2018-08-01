import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

class WhiteKey extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={styles.container}
                    title={this.props.pKey}
                    onPress={e=>this.props.pUpdate(this.props.pKey,e)}
                />
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