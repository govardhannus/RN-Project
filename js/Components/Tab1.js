import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TextInput,Text,TouchableHighlight
} from 'react-native';

export default class Tab1 extends Component {

    // static navigationOptions = ({navigation}) => {
    //     const {params = {}} = navigation.state;
    //     return {
    //         header: null
    //     };
    // };
    render() {
        return (
            <View>
                <Text>Tab 1</Text>
            </View>
        )
    }
}