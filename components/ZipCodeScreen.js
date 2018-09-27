import React from 'react';
import { StyleSheet, FlatList, View, Text,TouchableHighlight } from 'react-native';
    
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
    
const ZipItem = ({place, code, navigate}) => (
    <View style={styles.zipItem}>
        <Text style={styles.zipPlace}>{place}</Text>
        <Text style={styles.zipCode}>{code}</Text>
    </View>
)

export default class ZipCodeScreen extends React.Component{

    render(){
        return {

        }
    }
}