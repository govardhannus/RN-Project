import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TextInput, Text, TouchableOpacity,Image,Button,FlatList,TouchableHighlight
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {addNewTask} from "../Actions/index"
import {connect} from 'react-redux';
import taskItem from './taskItem';
//import * as actions from '../Actions/index'


class Tab2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attachments: '',
            fileName: '',
            fileType: '',
            filePath: '',
            subject:''
        };

       // this.sendAlert = this.sendAlert.bind(this)
    }

    // sendAlert = (subject) => {
    //     this.props.onClickAdd(subject)
    //     //alert('hi')
    // }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            header: null
        };
    };

    state = {
        avatarSource: null,
        videoSource: null
    };

    selectPhotoTapped() {
        var media = ["photo", "video"];
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true
            }
        };

            ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};
                let fileName = {uri: response.fileName};
                let fileType = {uri: response.type};
                let filePath = response.path;
                this.setState({
                    avatarSource: source,
                    fileName: fileName,
                    fileType: fileType,
                    filePath: filePath
                });
            }
        });
    }

    render() {
        console.log(this.state.avatarSource,'this.state')
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <Image source={require('../images/add-icon.png')}/>
                </TouchableOpacity>
                <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                    {this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                        <Image style={styles.avatar} source={this.state.avatarSource}/>
                    }
                </View>

                <TextInput style={styles.inputSubject}
                           multiline={true}
                           placeholder="Subject"
                           onChangeText={(subject) => this.setState({subject})}
                           value={this.state.subject}

                />
                <TouchableOpacity  onPress={() => this.props.onClickAdd(this.state.subject,this.state.avatarSource)} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>OK</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    avatarContainer: {
        borderColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 20,
        width: 80,
        height: 80
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    inputSubject: {
        //marginTop:24,
        marginLeft:32,
        marginBottom:16,
        marginRight:32,
        height: 40,
        borderColor: '#d0d0d0',
        borderWidth: 1,
    },
    formContainer: {
        justifyContent: 'center',
    },
    inputUsername: {
        marginTop: 200,
        marginLeft: 32,
        marginBottom: 16,
        marginRight: 32,
        height: 50,
        borderColor: '#d0d0d0',
        borderWidth: 1,
    },
    inputPassword: {
        marginTop: 10,
        marginLeft: 32,
        marginBottom: 16,
        marginRight: 32,
        height: 50,
        borderColor: '#d0d0d0',
        borderWidth: 1,
    },button: {
        marginLeft:32,
        marginTop:10,
        width: 320,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },buttonText: {
        padding: 10,
        color: 'white'
    }
});

const mapStateToProps = state => {
    return{
             state
        // tasks:!state.taskReducer ? [] : state.taskReducer
    }
    alert(state);
}

const mapDispatchToProps = (dispatch) => {
    return{
        onClickAdd:(inputTaskName,imageName) =>{
            dispatch(addNewTask(inputTaskName,imageName))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tab2)
