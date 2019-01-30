import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class SideMenu extends React.Component {

    state = {
        menuDetay2: false
    }

    navigateToScreen = (route) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    renderMenuDetay2() {
        if (this.state.menuDetay2) {
            return (<View style={styles.subStyle}>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => { this.navigateToScreen('Second'); }}>
                    <Text style={styles.textStyle}>Menu 2.1</Text>
                </TouchableOpacity>
            </View>);
        }
    }

    render() {

        return (
        <View style={{ flex: 1 }} >
            <ScrollView style={styles.scrollStyle}>
                <TouchableOpacity style={styles.opacityStyle}>
                    <Text style={styles.textStyle}>Menu 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => { this.setState({ menuDetay2: !this.state.menuDetay2 }); }}>
                    <Text style={styles.textStyle}>Menu 2</Text>
                </TouchableOpacity>
                { this.renderMenuDetay2() }
                <TouchableOpacity style={styles.opacityStyle}>
                    <Text style={styles.textStyle}>Menu 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => { this.navigateToScreen('Tabs'); }}>
                    <Text style={styles.textStyle}>Tabs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityStyle}>
                    <Text style={styles.textStyle}>Menu 5</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>);
    }
}

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1
    },
    subStyle: {
        marginLeft: 20
    },
    opacityStyle: {
         flex: 1,
         padding: 20
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'micnrwr'
    }
});
