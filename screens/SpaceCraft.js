import React, { Component } from 'react';
import { Text, Platform, StyleSheet, StatusBar, View, SafeAreaView, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

export default class SpaceCraft extends Component {

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
        axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/').then((response) => {
            console.log(response);
            this.setState({
                apod: response.data.results
            });
        }).catch((error) => {
            alert(error.message);
        });
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <Image source={{ uri: item.agency.image_url }} style={styles.routeImage} />
                <Text style={styles.routeText}>{item.name}</Text>
                <Text style={styles.routeText}>{item.agency.name}</Text>
                <Text style={styles.routeText}>Description</Text>
                <Text style={styles.routeText}>{item.agency.description}</Text>
            </View>
        )
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
                        <Text style={styles.title}>Space Crafts</Text>

                        <FlatList
                            keyExtractor={this.state.apod.name}
                            data={this.state.apod}
                            renderItem={this.renderItem}
                        />

                    </SafeAreaView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,        
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },

    routeText: {
        fontSize: 25,
        backgroundColor:'black',
        fontWeight: "bold",
        color: '#aa66ff',
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
        alignSelf: 'center',
        width: 200,
        height: 100,
    }
})