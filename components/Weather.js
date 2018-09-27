import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Forecast from './Forecast'

export default class Weather extends React.Component {
  
  doIt = () => {
    console.log("Hello from console")
  }

  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
    .then((response) => response.json())
    .then((json) => {
      this.setState(
        {
          forecast: {
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp
          }
        });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
   
  componentDidMount = () => this.fetchData()
  
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        main: 'MAIN', 
        description: '-DESCRIPTION-', 
        temp: 0
      }
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg2.jpg')} style={styles.backdrop}>
          <View style={styles.contentBox}>
            <Text style={styles.textBox}>Zip code is {this.props.zipCode}.</Text>
            <Forecast {...this.state.forecast} />
          </View>
        </ImageBackground>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: { 
    paddingTop: 24 
  },
  backdrop: { 
    width: '100%', 
    height: '100%', 
  },
  contentBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor:'#000000',
    opacity: 0.5,
  },
  textBox: {
    fontSize: 30,
    color: '#FFFFFF',
  }
});
