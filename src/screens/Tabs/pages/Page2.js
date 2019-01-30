import React from 'react';
import { View, Text, Alert } from 'react-native';

export default class Page2 extends React.Component {

    componentWillMount() {
        Alert.alert('ecd', 'ecd');
    }

    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Page 2</Text>
        </View>);
    }
}
