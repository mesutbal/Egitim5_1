import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import SideMenu from './src/screens/SideMenu';
import SecondScreen from './src/screens/SecondScreen';
import TabsMainScreen from './src/screens/Tabs/TabsMainScreen';


const Drawer = createDrawerNavigator({
    Home: {
      screen: MainScreen,
    },
    Second: {
      screen: SecondScreen
    },
    Tabs: {
      screen: TabsMainScreen
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width
  }
);

const App = createAppContainer(Drawer);
  
export default App;

/*const mainScreen = ({ navigation }) => (<MainScreen navigationRight={navigation} />);

const DrawerRight = createDrawerNavigator({
  Home: {
    screen: mainScreen
  }
},
{
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width,
  drawerPosition: 'right'
}
);

const DrawerLeft = createDrawerNavigator({
  Home: {
    screen: (DrawerRight)
  }
},
{
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width,
  drawerPosition: 'left'
}
);

const App = createAppContainer(DrawerLeft);

export default App;*/
