// UserProfile.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const UserProfile = ({ user, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [newPhoto, setNewPhoto] = useState('');

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onEdit(newPhoto);
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <View>
          <TextInput
            placeholder="Enter new photo URL"
            value={newPhoto}
            onChangeText={(text) => setNewPhoto(text)}
            style={styles.input}
          />
          <Button title="Save" onPress={handleSave} color="#3498db" />
        </View>
      ) : (
        <View>
          <Image source={{ uri: user.photo }} style={styles.photo} />
          <Text style={styles.username}>{`Username: ${user.username}`}</Text>
          <Button title="Edit" onPress={handleEdit} color="#3498db" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f39c12',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default UserProfile;
