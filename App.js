import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

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
