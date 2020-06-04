import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { darkgreen } from 'color-name';

const AddItem = (props) => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput placeholder="Add todo" 
            style = {styles.input} 
            onChangeText={onChange}
            />
            <TouchableOpacity style={styles.button} onPress={() => props.addItem(text)}>
                <Text style={styles.txt}> 
                    <Icon name='plus' size={20}/>
                Add Item </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  input: {
      height:60,
      padding:8,
      fontSize:16,
  },
  button: {
      backgroundColor: '#c2bad8',
      padding:9,
      margin:5,
  },
  txt: {
      color: 'darkgreen',
      fontSize: 20,
      textAlign: 'center',
  },
});

export default AddItem;