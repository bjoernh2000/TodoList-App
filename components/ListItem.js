import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = (prop) => {
  return (
  <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>
              {prop.item.text}
          </Text>
          <Icon name="remove" size={20} color="firebrick" 
          onPress={() => prop.deleteItem(prop.item.id)}>
          </Icon>
      </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: 'lightgray',
        borderBottomWidth: 1,
        borderColor: 'green',
    }
});

export default ListItem;