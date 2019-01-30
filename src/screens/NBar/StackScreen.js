import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Page1 from '../Tabs/pages/Page1';
import Page2 from '../Tabs/pages/Page2';
import Page3 from '../Tabs/pages/Page3';


const StackScreen = createStackNavigator({
    Sayfa1: {
        screen: Page1,
        navigationOptions: {
            title: 'Sayfa 1'
        }
    },
    Sayfa2: {
        screen: Page2,
        navigationOptions: {
            title: 'Sayfa 2'
        }
    },
    Sayfa3: {
        screen: Page3,
        navigationOptions: {
            title: 'Sayfa 3'
        }
    }
},
{
    initialRouteName: 'Sayfa1'
});

export default StackScreen;
