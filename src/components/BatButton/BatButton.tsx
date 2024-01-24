import React from 'react';
import { Button, Text, Pressable, View } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View>
      <Pressable
        onPress={()=> {console.log("Fui pressionado")}}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={()=> {console.log("Fui pressionado")}}
        style={styles.button}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </View>
  );
}