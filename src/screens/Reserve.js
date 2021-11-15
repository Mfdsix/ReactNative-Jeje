import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

import BottomNavigation from '../components/BottomNavigation';

import Colors from '../values/Colors';
import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Reserve';

import ACTIVITIES from '../datas/Activities';
import RESERVES from '../datas/Reserves';

export default function Reserve({navigation}) {
  return (
    <View style={Styles.full}>
      <ScrollView style={[Styles.full, Styles.bg]}>
        {/* header */}
        <View style={Styles.pd2}>
          <Text style={[Styles.textXl, Styles.textDark, Styles.textBold]}>
            Petualangan Anda
          </Text>
        </View>
        {/* search box */}
        <View style={[Styles.pd2, Styles.flexRow, Styles.flexBetween]}>
          <View style={[Styles.bdRad1, Styles.bd, Styles.pd1, Styles.flexRow]}>
            <Icon
              color={Colors.GREY}
              style={Styles.mr1}
              name="search"
              type="fontawesome-5"
            />
            <Text style={[Styles.textGrey]}>Cari pesanan petualangan anda</Text>
          </View>
          <View style={[Styles.bgPrimary, Styles.pd1, Styles.bdRad1]}>
            <Icon color={Colors.WHITE} name="calendar-outline" type="ionicon" />
          </View>
        </View>
        {/* daftar pesanan */}
        <View style={Styles.ph2}>
          {RESERVES.map((reserve, index) => (
            <View key={index}>
              <Text style={[Styles.textDark, Styles.textBold, Styles.mv2]}>
                {reserve.date}
              </Text>
              {reserve.items.map((item, index2) => (
                <View key={index2} style={Styles.relative}>
                  <Image
                    source={{uri: ACTIVITIES[item].image}}
                    style={ScreenStyles.activityImage}
                  />
                  <Text
                    style={[
                      Styles.absolute,
                      ScreenStyles.activityName,
                      Styles.textBold,
                      Styles.textWhite,
                    ]}>
                    {ACTIVITIES[item].name}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* bottom navigation */}
      <BottomNavigation active={1} navigation={navigation} />
    </View>
  );
}
