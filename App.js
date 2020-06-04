import React, {useState} from 'react';
import {SafeAreaView,View,Text,StyleSheet,FlatList,Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuid from 'uuid-random';


const App = () => {
  const [items,setItems] = useState([
    {id: uuid(), text: 'Pack'},
    {id: uuid(), text: 'Clean'},
    {id: uuid(), text: 'Cook'},
    {id: uuid(), text: 'Eat'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  };
  
  const addItem = (text) => {
    if (!text) {
      Alert.alert('No item', 'Please enter an item.', [{text: 'Ok'}]);
    } else {
    setItems(prevItems => {
      return [{id: uuid(), text: text}, ...prevItems];
    });
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Todo List"/>
      <AddItem addItem={addItem}/>
      <FlatList 
      data={items} 
      renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      keyExtractor={item=>item.id}
      />
    </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;