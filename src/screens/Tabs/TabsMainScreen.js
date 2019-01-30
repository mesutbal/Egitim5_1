import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Entypo from 'react-native-vector-icons/Entypo';

/*export default class TabsMainScreen extends React.Component {
    render() {
        return (<View style={{ flex: 1, backgroundColor: 'purple' }} />);
    }
}*/

const TabsMainScreen = createBottomTabNavigator(
    {
        Tab1: { 
            screen: Page1,
            navigationOptions: {
                title: 'Sayfa 1',
                tabBarIcon: () => (<Entypo 
                    name="app-store"
                    size={25}
                />)
            }
        },
        Tab2: 
        { 
            screen: Page2,
            navigationOptions: {
                title: 'Sayfa 2',
                tabBarIcon: () => (<Entypo 
                    name="attachment"
                    size={25}
                />)
            }
        },
        Tab3: 
        { 
            screen: Page3,
            navigationOptions: {
                title: 'Sayfa 3',
                tabBarIcon: () => (<Entypo 
                    name="calculator"
                    size={25}
                />)
            }
        },
        Tab4: 
        { 
            screen: Page3,
            navigationOptions: {
                title: 'Sayfa 4',
                tabBarIcon: () => (<Entypo 
                    name="calculator"
                    color="white"
                    size={25}
                />)
            }
        },
        Tab5: 
        { 
            screen: Page3,
            navigationOptions: {
                title: 'Sayfa 5',
                tabBarIcon: () => (<Entypo 
                    name="calculator"
                    color="white"
                    size={25}
                />)
            }
        }
    }, 
    {
        lazy: true,
        tabBarOptions: 
        {
            showIcon: true,
            activeTintColor: 'blue',
            activeBackgroundColor: 'yellow',
            inactiveTintColor: 'white',
            inactiveBackgroundColor: 'purple',
            upperCaseLabel: false
        }
    });

export default TabsMainScreen;
