import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => {
  return (
    <View>
      <FlatList 
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});

export default NoteList;