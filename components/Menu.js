import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

export default function Menu(params) {

  return (
    <View style={{ width: '60%', display: params.display, backgroundColor: '#333', paddingTop: 36 }}>
        
      <TouchableWithoutFeedback onPress={() => params.onTouchItem('home')}>
        <View style={{ paddingHorizontal: 12, paddingVertical: 18, borderBottomColor: '#FFF', borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 16, color: '#FFF' }}>Home</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => params.onTouchItem('receitas')}>
        <View style={{ paddingHorizontal: 12, paddingVertical: 18, borderBottomColor: '#FFF', borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 16, color: '#FFF' }}>Cadastrar Receita</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => params.onTouchItem('despesas')}>
        <View style={{ paddingHorizontal: 12, paddingVertical: 18, borderBottomColor: '#FFF', borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 16, color: '#FFF' }}>Cadastrar Despesa</Text>
        </View>
      </TouchableWithoutFeedback>

    </View>
  );
}
