import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
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
                />),
                //tabBarVisible: false,
                //tabBarLabel: 'Eklenti',
                //tabBarButtonComponent: () => (<TouchableOpacity><Text>Facebook</Text></TouchableOpacity>)
                //tabBarAccesibilityLabel: 'This is an attachment'
                tabBarOnPress: ({ navigation, defaultHandler }) => {
                    //console.log(navigation.state);
                    Alert.alert('React Native Eğitim', `${navigation.state.routeName} Tıklandı`);
                    defaultHandler();
                }
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
        initialRouteName: 'Tab5',
        order: ['Tab5', 'Tab4', 'Tab3', 'Tab2', 'Tab1'],
        lazy: true,
        tabBarOptions: 
        {
            showIcon: true,
            activeTintColor: 'blue',
            activeBackgroundColor: 'yellow',
            inactiveTintColor: 'white',
            inactiveBackgroundColor: 'purple',
            //upperCaseLabel: true,
            safeAreaInset: { bottom: 'always', top: 'never' },
            labelStyle: {
                //fontSize: 30,
                color: 'red'
            },
            tabStyle: {
                padding: 3,
                backgroundColor: 'gray'
            }
        }
    });

export default TabsMainScreen;
