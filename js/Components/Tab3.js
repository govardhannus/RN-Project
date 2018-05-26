import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TextInput, Text, TouchableHighlight, FlatList,Image
} from 'react-native';
import {connect} from 'react-redux';

///Components
import taskItem from './taskItem'

class Tab3 extends Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            header: null
        };
    };

    render() {
        console.log(this.props.tasks)
        return (
            <View>
                <FlatList
                    data={this.props.tasks}
                    renderItem={({item, index}) => {
                        return (
                            <View style={{flex:1}}>
                                <Text style={{margin:20,color:'darkgreen'}}>
                                    {item.taskName}
                                </Text>
                                <Image source={{uri:item.imageName.uri}}/>
                            </View>
                        )
                    }}

                >
                </FlatList>
            </View>
        )
    }
}

const mapStateTOProps = state => {
    return {
        tasks: !state.taskReducer ? [] : state.taskReducer
    }

    alert(state);

    //console.log(state);

}

export default taskContainer = connect(mapStateTOProps)(Tab3)

