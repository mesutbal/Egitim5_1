import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import SideMenu from './src/screens/SideMenu';

const Drawer = createDrawerNavigator({
    Home: {
      screen: MainScreen
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width
  }
);

const App = createAppContainer(Drawer);

export default App;
