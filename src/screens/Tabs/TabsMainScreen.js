import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

/*export default class TabsMainScreen extends React.Component {
    render() {
        return (<View style={{ flex: 1, backgroundColor: 'purple' }} />);
    }
}*/

const TabsMainScreen = createMaterialTopTabNavigator({
    Tab1: { 
        screen: Page1,
        navigationOptions: {
            title: 'Sayfa 1'
        }
    },
    Tab2: { screen: Page2,
        navigationOptions: {
            title: 'Sayfa 2'
        } },
    Tab3: { screen: Page3,
        navigationOptions: {
            title: 'Sayfa 3'
        } },
});

export default TabsMainScreen;
