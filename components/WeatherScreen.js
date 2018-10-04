import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import Weather from './Weather';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text style={styles.topBarLeft}>Weather</Text>),
            headerRight: (
                <Button 
                    title="Change zip" 
                    onPress={() => navigation.navigate('ZipCode')}
                />
            )
        }
    }
    
    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (
            <Weather zipCode={zipCode}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    zipItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    topBarLeft: {
        justifyContent: 'center',
        paddingLeft: 15,
    },
});
