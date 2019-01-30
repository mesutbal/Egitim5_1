import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';

export default class MainScreen extends React.Component {
    render() {
        return (
        <View style={styles.containerStyle} >
            <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere erat ut ante iaculis, nec vestibulum orci efficitur. Vestibulum ac ante eu leo mattis sagittis vitae at enim. Quisque sed velit id erat mattis rhoncus. Duis et rutrum mauris. Sed sit amet vestibulum velit. Proin eu justo ultrices, porta augue nec, venenatis lacus. Duis faucibus tincidunt justo a bibendum. Pellentesque tempus neque vitae arcu tempus egestas. Integer sit amet bibendum odio. Mauris ullamcorper, nisl eget auctor dictum, erat ante mollis ipsum, ultrices ultricies lacus nibh sed odio.</Text>
            <View style={styles.hamburgerIconStyle}>
                <Entypo.Button 
                    name="menu"
                    size={40}
                    backgroundColor="transparent"
                    color="gray"
                    onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()); }}
                />
            </View>
        </View>);
    }
}


const styles = StyleSheet.create({ 
    containerStyle: {
        flex: 1
    },
    hamburgerIconStyle: {
        position: 'absolute',
        left: 20,
        top: 10,
        elevation: 1
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'micnrwr',
        elevation: 2
    }
});
