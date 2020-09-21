import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Modal } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "../shared/Card";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

export const Home = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="fade">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />
          <Text>Hello</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ReviewDetails", item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#111",
    borderRadius: 10,
    padding: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
