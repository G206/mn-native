import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Nav from './components/nav';
import Display from './components/display';
import Controls from './components/controls';
import SoundPlayer from 'react-native-sound-player';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: ['03_C','03_CsDf','03_D','03_DsEf','03_E','03_F','03_FsGf','03_G','03_GsAf',
                '03_A','03_AsBf','03_B'],
            message: ''
        };
    }

    updateMessage = pText =>{
        let prevText = this.state.message;
        this.setState({
            message: prevText + pText
        })
    }

    playSound = (pNote, pType) =>{
        try {
            SoundPlayer.playSoundFile(pNote, pType);
        } catch (e) {
            console.log('Cannot play the sound file');
        }
    }

    keyAction = (pText, pNote) =>{
        this.updateMessage(pText);
        this.playSound(pNote, 'mp3');
    }
    render() {
        return (
            <View style={styles.container}>
                <Nav/>
                <Display pMessage={this.state.message}/>
                <Controls
                    pKey={this.state.keys}
                    pUpdate={this.keyAction}
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
