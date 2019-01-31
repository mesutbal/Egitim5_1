import React from 'react';
import { View, Button } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import Page from '../Tabs/pages/Page';

const SwitchNavigatorScreen = createSwitchNavigator({
    Sayfa1: { 
        screen: ({ navigation }) => (<View style={{ flex: 1 }}>
            <Button title="2. Sayfaya Git" onPress={() => { navigation.navigate('Sayfa2'); }} />
        </View>)
    },
    Sayfa2: { 
        screen: ({ navigation }) => (<Page navigation={navigation}>Sayfa 2</Page>)
    },  
}, { 
    initialRouteName: 'Sayfa1'
});

export default SwitchNavigatorScreen;
