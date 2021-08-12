import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import Web from '../components/Webview';

export default class StarMapScreen extends Component {

    constructor() {

        super()
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {

        return (
            <View style = {{flex:1 , backgroundColor:'black'}}>
                <TextInput style={{ height:50,marginTop:20,alignSelf:'center',width:'50%',backgroundColor:'grey' , color:'white',borderRadius: 20, borderWidth: 3, textAlign: 'center' }} placeholder="Enter Latitiude" value={this.state.latitude} onChangeText={(text) => this.setState({ latitude: text })} />
                <TextInput style={{  height:50,marginTop:20,alignSelf:'center',width:'50%',backgroundColor:'grey' , color:'white',borderRadius: 20, borderWidth: 3, textAlign: 'center' }} placeholder="Enter Longitude" value={this.state.longitude} onChangeText={(text) => this.setState({ longitude: text })} />
                <Web latitude = {this.state.latitude} longitude = {this.state.longitude}/>                    
            </View>
        )
    }
}

