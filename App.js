import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Nav from './components/nav';
import Display from './components/display';
import Controls from './components/controls';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],
            message: ''
        };
    }

    updateMessage = pText =>{
        let prevText = this.state.message;
        this.setState({
            message: prevText + pText
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Nav/>
                <Display pMessage={this.state.message}/>
                <Controls
                    pKey={this.state.keys}
                    pUpdate={this.updateMessage}
                    />
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
