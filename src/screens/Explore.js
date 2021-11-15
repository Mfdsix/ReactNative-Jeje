import React from 'react';

import { View, Text, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

import BottomNavigation from "../components/BottomNavigation";
import Rating from "../components/Rating";

import Colors from "../values/Colors";
import Styles from "../styles/Styles";
import ScreenStyles from "../styles/Explore";

import CATEGORIES from "../datas/Categories";
import ACTIVITIES from "../datas/Activities";

export default function Explore({ navigation }){
    return <View style={ Styles.full }>
        {/* scrollable view */}
        <ScrollView style={[Styles.full, Styles.bg]}>
            {/* header */}
            <View style={[Styles.flexRow, Styles.flexBetween, Styles.ph2, Styles.mt3]}>
                <Text style={[Styles.textXl, Styles.textDark, Styles.textBold]}>Explore</Text>
                <Icon color={ Colors.BLACK } name="notifications-outline" type="ionicon"/>
            </View>
            {/* search bar */}
                <View style={[Styles.flexRow, Styles.bd, Styles.bdRad1, Styles.pd1, Styles.alignCenter, Styles.mv2, Styles.mh2]}>
                    <Icon color={ Colors.GREY } style={Styles.mr1} name="search-outline" type="ionicon"/>
                    <Text style={ Styles.textGrey }>Kemana petualangan selanjutnya?</Text>
                </View>
            {/* categories */}
            <View style={ [Styles.mv1, Styles.ph2, Styles.pr0] }>
                <Text style={ [Styles.textBold, Styles.textDark, Styles.textMd, Styles.mb1] }>Kategori</Text>
                <View style={ [ Styles.flexRow, Styles.flexBetween ] }
                horizontal={true}>
                    { CATEGORIES.map((category, index) => (
                        <View key={index} style={[Styles.mr1]}>
                            <View style={ [Styles.pd1, Styles.bdRad1] }>
                                <Image style={ ScreenStyles.iconSize } source={ category.icon }/>
                            </View>
                            <Text style={ [Styles.textGrey, Styles.textCenter, Styles.textSm] }>{ category.name }</Text>
                        </View>
                    )) }
                </View>
            </View>
            {/* petualangan terfavorit */}
            <View style={ [Styles.mv1, Styles.ph2, Styles.pr0] }>
                <Text style={ [Styles.textDark, Styles.textBold, Styles.textMd, Styles.mb1] }>Petualangan Terfavorit</Text>
                <ScrollView
                horizontal={true}>
                    { ACTIVITIES.slice(0, 3).map((activity, index) => (
                        <TouchableHighlight
                        activeOpacity={0.7}
                        underlayColor={ Colors.GREY }
                        onPress={ () => navigation.navigate("Detail") }
                        key={index}>
                        <View style={ Styles.mr1 }>
                            <Image source={{ uri: activity.image}} style={ [Styles.mb1, ScreenStyles.activityImage] }/>
                            <View>
                                <Text style={ [Styles.textDark, Styles.textBold] }>{ activity.name }</Text>
                                <Rating rating={ activity.rating } ratingCount={ activity.ratingCount }/>
                            </View>
                        </View>
                        </TouchableHighlight>
                    )) }
                </ScrollView>
            </View>
            {/* petualangan terdekat */}
            <View style={ [Styles.mv1, Styles.ph2, Styles.pr0] }>
                <Text style={ [ Styles.textBold, Styles.textDark, Styles.textMd, Styles.mb1] }>Terdekat dari Tempatmu</Text>
                <ScrollView
                horizontal={true}>
                    { ACTIVITIES.slice(2, 4).map((activity, index) => (
                        <TouchableHighlight
                        activeOpacity={0.7}
                        underlayColor={ Colors.GREY }
                        onPress={ () => navigation.navigate("Detail") }
                        key={index}>
                        <View style={ Styles.mr1 }>
                            <Image style={ [Styles.mb1, ScreenStyles.activityImage] } source={ {uri: activity.image} }/>
                            <View>
                                <Text style={ [Styles.textDark, Styles.textBold] }>{ activity.name }</Text>
                                <Rating rating={ activity.rating } ratingCount={ activity.ratingCount }/>
                            </View>
                        </View>
                        </TouchableHighlight>
                    )) }
                </ScrollView>
            </View>
        </ScrollView>
        {/* footer menu */}
        <BottomNavigation active={ 0 } navigation={ navigation }/>
    </View>
}