import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {   
    render() {

        return (                       
            <WebView
                scalesPageToFit={true}
                style = {{ backgroundColor:'black'}}
                source={{ uri: 'https://virtualsky.lco.global/embed/index.html?longitude='+this.props.longitude+'&latitude='+this.props.latitude+'&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true' }}                
            />            
        )
    }
}