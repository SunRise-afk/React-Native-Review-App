import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export const ReviewDetails = (props) => {
  const pressHandler = () => {
    props.navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{props.route.params.title}</Text>
      <Text style={globalStyles.titleText}>{props.route.params.body}</Text>
      <Text style={globalStyles.titleText}>{props.route.params.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
