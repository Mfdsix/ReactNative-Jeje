import React from "react";
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from "../values/Colors";
import Styles from "../styles/Styles";

const MENU_ITEMS = [
    {
        icon: "search",
        destination: "Explore"
    },
    {
        icon: "checkbox-outline",
        destination: "Reserve"
    },
    { icon: "chatbox-outline"},
    {icon: "person-outline"}
];

export default function BottomNavigation(props){
    return <View style={[Styles.bg, Styles.flexRow, Styles.flexAround, BottomNavigationStyles.container, Styles.alignCenter]}>
        { MENU_ITEMS.map((item, index) => (
            <TouchableHighlight
            activeOpacity={0.7}
            underlayColor={ Colors.GREY }
            onPress={ () => ( item.destination ) ? props.navigation.navigate(item.destination) : false }>
            <View style={[ Styles.pd1, (props.active == index) ? BottomNavigationStyles.itemActive : {} ]}>
                <Icon color={ props.active == index ? Colors.GREEN : Colors.GREY } name={ item.icon } key={index} type="ionicon"/>
            </View>
            </TouchableHighlight>
        ))}
    </View>
}

const BottomNavigationStyles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: Colors.WHITE,
        elevation: 10,
    },
    itemActive: {
        borderColor: Colors.GREEN,
        borderBottomWidth: 1,
    }
})