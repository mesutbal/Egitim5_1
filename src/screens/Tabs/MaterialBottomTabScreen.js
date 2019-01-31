import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Entypo from 'react-native-vector-icons/Entypo';

const MaterialBottomTabScreen = createMaterialBottomTabNavigator(
    {
        Tab1: { 
            screen: Page1,
            navigationOptions: {
                title: 'Sayfa 1',
                tabBarIcon: () => (<Entypo 
                    name="facebook"
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
                    name="twitter"
                    color="white"
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
                    name="instagram"
                    color="white"
                    size={25}
                />)
            }
        }
    }, 
    {
    });

export default MaterialBottomTabScreen;
