import React from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Detail';

import ACTIVITIES from '../datas/Activities';
import PACKETS from '../datas/Packets';
import Colors from '../values/Colors';

export default function Detail({navigation}) {
  const activity = ACTIVITIES[1];

  return (
    <View style={[Styles.full, Styles.relative]}>
      <View>
        <Image style={ScreenStyles.image} source={{uri: activity.image}} />
      </View>
      <ScrollView
        style={[Styles.absolute, Styles.full, ScreenStyles.container]}>
        <View style={Styles.pd2}>
          <TouchableHighlight
            activeOpacity={0.7}
            underlayColor={Colors.GREY}
            onPress={() => navigation.navigate('Explore')}
            style={ScreenStyles.backBtn}>
            <View
              style={[
                ScreenStyles.backBtn,
                Styles.mb4,
                Styles.flexCenter,
                Styles.bdRad1,
              ]}>
              <Icon
                color={Colors.WHITE}
                name="chevron-back-outline"
                type="ionicon"
              />
            </View>
          </TouchableHighlight>
        </View>
        <Image
          style={ScreenStyles.divider}
          source={require('../assets/images/divider.png')}
        />
        <View style={[Styles.bg, Styles.ph2, Styles.pv3]}>
          {/* top */}
          <View style={[Styles.flexRow, Styles.flexBetween]}>
            <View>
              <Text style={[Styles.textBold, Styles.textLg, Styles.textDark]}>
                {activity.name}
              </Text>
              <View style={Styles.flexRow}>
                <Icon
                  size={14}
                  color={Colors.GREY}
                  name="map-outline"
                  type="ionicon"
                  style={Styles.mr1}
                />
                <Text style={[Styles.textGrey, Styles.textSm, Styles.mb2]}>
                  {activity.address}
                </Text>
              </View>
            </View>
            <Icon name="heart-outline" type="ionicon" />
          </View>
          <Text numberOfLines={3} style={[Styles.textGrey]}>
            {activity.description}
          </Text>
          {/* packet trip */}
          <View style={[Styles.mv1, Styles.mt4, Styles.mb2]}>
            <Text style={[Styles.textBold, Styles.textDark, Styles.mb2]}>
              Paket yang Tersedia
            </Text>
            {PACKETS.map((packet, index) => (
              <View
                key={index}
                style={[
                  Styles.flexRow,
                  Styles.flexBetween,
                  Styles.mb2,
                  Styles.bd,
                  Styles.pd1,
                  Styles.bdRad1,
                  index == 0 ? ScreenStyles.bdActive : {},
                ]}>
                <View style={[Styles.mr1, {flex: 2}]}>
                  <Text style={[Styles.textDark]}>{packet.name}</Text>
                  <Text style={[Styles.textGrey, Styles.textWrap]}>
                    {packet.description}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={[
                      Styles.textPrimary,
                      Styles.textBold,
                      Styles.textMd,
                      Styles.textRight,
                    ]}>
                    ${packet.price}
                  </Text>
                  <Text style={[Styles.textGrey, Styles.textRight]}>
                    {packet.capacity} orang
                  </Text>
                </View>
              </View>
            ))}
          </View>
          {/* button */}
          <View style={Styles.btn}>
            <Text style={Styles.btnText}>Pesan</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
