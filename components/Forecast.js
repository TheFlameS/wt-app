import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.textBox}>{this.props.main}</Text>
                <Text style={styles.textBox}>{this.props.description}</Text>
                <Text style={styles.textBox}>{this.props.temp}°C</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%'},
    content: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textBox: {
        fontSize: 22,
        color: '#FFFFFF'
    }
  });