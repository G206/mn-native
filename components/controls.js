import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WhiteKey from './whiteKey';
import BlackKey from './blackKey';
import Display from './display';

class Controls extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <WhiteKey
                    pKey={this.props.pKey[0]}
                    pUpdate={this.props.pUpdate}
                />
                <BlackKey
                    pKey={this.props.pKey[1]}
                    pUpdate={this.props.pUpdate}
                />
                <WhiteKey
                    pKey={this.props.pKey[2]}
                    pUpdate={this.props.pUpdate}
                />
                <BlackKey
                    pKey={this.props.pKey[3]}
                    pUpdate={this.props.pUpdate}
                />
                <WhiteKey
                    pKey={this.props.pKey[4]}
                    pUpdate={this.props.pUpdate}
                />
                <WhiteKey
                    pKey={this.props.pKey[5]}
                    pUpdate={this.props.pUpdate}
                />
                <BlackKey
                    pKey={this.props.pKey[6]}
                    pUpdate={this.props.pUpdate}
                />
                <WhiteKey
                    pKey={this.props.pKey[7]}
                    pUpdate={this.props.pUpdate}
                />
                <BlackKey
                    pKey={this.props.pKey[8]}
                    pUpdate={this.props.pUpdate}
                />
                <WhiteKey
                    pKey={this.props.pKey[9]}
                    pUpdate={this.props.pUpdate}
                />
                <BlackKey
                    pKey={this.props.pKey[10]}
                    pUpdate={this.props.pUpdate}
                />
                <WhiteKey
                    pKey={this.props.pKey[11]}
                    pUpdate={this.props.pUpdate}
                />
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