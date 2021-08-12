import React, { Component } from 'react';
import { ScrollView, Linking, Text, Platform, StyleSheet, StatusBar, View, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends Component {

    constructor() {
        super();
        this.state = {
            apod: {},
        }
    }

    componentDidMount() {
        this.retrieveData();
    }

    retrieveData() {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=uMQJQT1JekIcB2QcibBetkLWXTVVerIlhyVbopGK').then((response) => {

            this.setState({
                apod: response.data
            });
        }).catch((error) => {
            alert(error.message);
        });
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/space.gif')}>

                    <SafeAreaView style={styles.droidSafeArea}>
                        <ScrollView>
                            <Text style={styles.routeText}>Daily Pic</Text>
                            <Text style={styles.title}>{this.state.apod.title}</Text>
                            <TouchableOpacity onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.log('Couldnt load Page', err))}>
                                <Image style={{ width: 70, height: 70, alignSelf: 'center' }} source={require('../assets/play-video.png')} />
                            </TouchableOpacity>
                            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>{this.state.apod.explanation}</Text>
                        </ScrollView>
                    </SafeAreaView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },

    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center'
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center'
    },

    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 80,
        width: 80,
        resizeMode: "contain"
    }

})