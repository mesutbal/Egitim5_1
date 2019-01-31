import React from 'react';
import { View, Button, Alert, Linking } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
//import Page1 from '../Tabs/pages/Page1';
import Page2 from '../Tabs/pages/Page2';
import Page3 from '../Tabs/pages/Page3';


const StackScreen = createStackNavigator({
    Sayfa1: {
        screen: ({ navigation }) => (
            <View style={{ flex: 1, padding: 100 }}>
                <Button 
                    title="Tab 2 ye Git" 
                    onPress={() => {
                        navigation.navigate('Sayfa2', { name: 'Aga', kod: '0' });
                    }} 
                />
            </View>
        ),
        navigationOptions: ({ navigation }) => ({
            title: 'Sayfa 1',
            headerBackTitle: 'Geri Geri Geri Geri Geri Geri',
            headerTruncatedBackTitle: 'Geri 2',
            //headerBackground: (<View style={{ backgroundColor: 'yellow', height: '100%', width: '100%' }}></View>)
            headerLeft: () => (<Entypo.Button 
                name="menu"
                size={40}
                backgroundColor="transparent"
                color="gray"
                onPress={() => { navigation.dispatch(DrawerActions.openDrawer()); }}
            />),
            headerRight: (<View style={{ paddingRight: 2 }}><Entypo.Button 
                name="facebook"
                size={40}
                backgroundColor="transparent"
                color="gray"
                onPress={() => { Linking.openURL('http://www.facebook.com'); }}
            /></View>)
        })
    },
    Sayfa2: {
        screen: ({ navigation }) => (
            <View style={{ flex: 1, padding: 100 }}>
                <Button 
                    title="Tab 1 ye Git" 
                    onPress={() => {
                        navigation.navigate('Sayfa1');
                    }} 
                />
                <Button 
                    title="Tab 3 ye Git" 
                    onPress={() => {
                        navigation.navigate('Sayfa3');
                    }} 
                />
                <Button 
                    title="Geri Git" 
                    onPress={() => {
                        navigation.goBack();
                    }} 
                />
                <Button 
                    title="En Üste Git" 
                    onPress={() => {
                        navigation.popToTop();
                    }} 
                />
            </View>
        ),
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}'nın Mekanı'`
        })
    },
    Sayfa3: {
        screen: Page3,
        navigationOptions: {
            title: 'Sayfa 3'
        }
    }
},
{
    initialRouteName: 'Sayfa1',
    backBehavior: 'initialRoute',
    headerLayoutPreset: 'center',
    headerBackTitleVisible: true
});

export default StackScreen;
