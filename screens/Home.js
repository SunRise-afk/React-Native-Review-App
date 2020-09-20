import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export const Home = (props) => {
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
      <FlatList
        data={reviews}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ReviewDetails", item)}
            >
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});
