import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function Header(params) {
  return (
    <View style={{ backgroundColor: '#315223', paddingTop: 24, flexDirection: 'row' }}>
        
        <TouchableWithoutFeedback onPress={params.onPressMenuIcon}>
            <View style={{ padding: 24 }}>
                <Image source={require('../assets/icon-menu.png')}></Image>
            </View>
        </TouchableWithoutFeedback>

        <Text style={{ fontSize: 20, color: '#FFF', paddingVertical: 24 }}>SmartFinance</Text>
    </View>
  );
}
