import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View>
      
      <View style={styles.whiteBox}>
        <Text style={{ fontSize: 18 }}>Saldo</Text>
        <Text style={{ fontSize: 24 }}>R$810.00</Text>
      </View>


      <View style={styles.whiteBox}>

        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#CCC', paddingVertical: 12 }}>
            <View style={{ width: '20%'}}>
                <Text style={{ fontSize: 20, color: '#999' }}>18</Text>
                <Text style={{ color: '#999' }}>Maio</Text>
            </View>
            <View style={{ width: '40%'}}>
                <Text>Cemig</Text>
            </View>
            <View style={{ width: '40%', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 20, color: '#C00' }} >R$-100,00</Text>
            </View>
        </View>

        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#CCC', paddingVertical: 12 }}>
            <View style={{ width: '20%'}}>
                <Text style={{ fontSize: 20, color: '#999' }}>18</Text>
                <Text style={{ color: '#999' }}>Maio</Text>
            </View>
            <View style={{ width: '40%'}}>
                <Text>Copasa</Text>
            </View>
            <View style={{ width: '40%', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 20, color: '#C00' }} >R$-90,00</Text>
            </View>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
            <View style={{ width: '20%'}}>
                <Text style={{ fontSize: 20, color: '#999' }}>18</Text>
                <Text style={{ color: '#999' }}>Maio</Text>
            </View>
            <View style={{ width: '40%'}}>
                <Text>Salario</Text>
            </View>
            <View style={{ width: '40%', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 20, color: '#0C0' }} >R$1000,00</Text>
            </View>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    whiteBox: { 
        backgroundColor: '#FFF', 
        margin: 12, 
        padding: 12, 
        shadowColor: '#000', 
        shadowRadius: 3, 
        shadowOpacity: 0.3, 
        shadowOffset: { 
            width: 0, 
            height: 3
        } 
    }
});