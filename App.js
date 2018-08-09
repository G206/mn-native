import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Nav from './components/nav';
import Display from './components/display';
import Controls from './components/controls';
import SoundPlayer from 'react-native-sound-player';
//import TrackPlayer from 'react-native-track-player';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: ['3_1','3_2','3_3','3_4','3_5','3_6','3_7','3_8','3_9',
                '03_10','3_11','3_12'],
            message: ''
        };

        this.playlist = [
            {
                id: '3_1',
                url: require('./assets/audio/03_c.mp3'),
                title: '3rd C'
            },
            {
                id: '3_2',
                url: require('./assets/audio/03_c#.mp3'),
                title: '3rd C#'
            },
            {
                id: '3_3',
                url: require('./assets/audio/03_d.mp3'),
                title: '3rd D'
            },
            {
                id: '3_4',
                url: require('./assets/audio/03_d#.mp3'),
                title: '3rd D#'
            },
            {
                id: '3_5',
                url: require('./assets/audio/03_e.mp3'),
                title: '3rd E'
            },
            {
                id: '3_6',
                url: require('./assets/audio/03_f.mp3'),
                title: '3rd F'
            },
            {
                id: '3_7',
                url: require('./assets/audio/03_f#.mp3'),
                title: '3rd F#'
            },
            {
                id: '3_8',
                url: require('./assets/audio/03_g.mp3'),
                title: '3rd G'
            },
            {
                id: '3_9',
                url: require('./assets/audio/03_g#.mp3'),
                title: '3rd G#'
            },
            {
                id: '3_10',
                url: require('./assets/audio/03_a.mp3'),
                title: '3rd A'
            },
            {
                id: '3_11',
                url: require('./assets/audio/03_a#.mp3'),
                title: '3rd A#'
            },
            {
                id: '3_12',
                url: require('./assets/audio/03_b.mp3'),
                title: '3rd B'
            },

        ]
    }

    // subscribe to the finished playing event in componentDidMount
   componentDidMount() {
       SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
           console.log('Finished playing sound file', success)
       })
   }

    // unsubscribe when unmount
   componentWillUnmount() {
       SoundPlayer.unmount()
       console.log('Sound Player unmounted');
   }

    // componentDidMount() {
    //     TrackPlayer.setupPlayer();
    //     TrackPlayer.updateOptions({
    //         stopWithApp: true,
    //         capabilities: [
    //             TrackPlayer.CAPABILITY_PLAY,
    //             TrackPlayer.CAPABILITY_STOP,
    //             TrackPlayer.CAPABILITY_PLAY_FROM_ID,
    //             TrackPlayer.CAPABILITY_PLAY_FROM_SEARCH,
    //         ]
    //     });
    // }

    updateMessage = pText =>{
        let prevText = this.state.message;
        this.setState({
            message: prevText + pText
        })
    }

    playSound = (pNote, pType) =>{
        try {
//            SoundPlayer.playSoundFile(pNote, pType);
            SoundPlayer.playUrl('http://50.112.194.46/assets/audio/03_c.mp3');
            console.log('Played: ' + pNote);
        } catch (e) {
            console.log('Cannot play the sound file: ' + pNote);
            console.log(e);
        }
    }

    // playSound = async (pNote, pType) =>{
    //     try {
    //         TrackPlayer.reset();
    //         let positionNote = this.state.keys.indexOf(pNote);
    //         await TrackPlayer.add(this.playlist[positionNote]);
    //         TrackPlayer.play();
    //         console.log('Played: ' + pNote);
    //     } catch (e) {
    //         console.log('Cannot play the sound file: ' + pNote);
    //     }
    // }

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
