import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Card } from "../shared/Card";
import { globalStyles } from "../styles/global";

export const ReviewDetails = (props) => {
  const pressHandler = () => {
    props.navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{props.route.params.title}</Text>
        <Text style={globalStyles.titleText}>{props.route.params.body}</Text>
        <Text style={globalStyles.titleText}>{props.route.params.rating}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});
