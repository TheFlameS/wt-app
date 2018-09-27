import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const _keyExtractor = item => item.code

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Choose a zip code</Text>),
        }
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
                />
            </View>
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
});
