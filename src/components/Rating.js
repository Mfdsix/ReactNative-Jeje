import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../values/Colors";
import Styles from "../styles/Styles";

export default function Rating(props){
    return <View style={ [Styles.flexRow, Styles.alignCenter] }>
        { [1,2,3,4,5].map((index) => (
            <Icon size={12} color={ (index <= props.rating) ? Colors.GREEN : Colors.GREY } name="star" type="fontawesome-5"/>
        )) }
        { props.ratingCount && <Text style={ [Styles.textGrey, Styles.mh1, Styles.textSm] }>( {props.ratingCount} )</Text> }
    </View>
}