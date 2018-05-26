import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TextInput,Text,TouchableHighlight,FlatList
} from 'react-native';
import Tab1 from "./Tab1";

export default class taskItem extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{margin:20,color:this.props.completed ==true ? 'darkgreen': 'black'}}>
                    {this.props.taskName}
                </Text>

            </View>
        )
    }
}