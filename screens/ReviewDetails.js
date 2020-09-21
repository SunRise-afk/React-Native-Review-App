import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card } from "../shared/Card";
import { globalStyles, images } from "../styles/global";

export const ReviewDetails = (props) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{props.route.params.title}</Text>
        <Text style={globalStyles.titleText}>{props.route.params.body}</Text>
        <View style={styles.rating}>
          <Text>Game Reviewer rating: </Text>
          <Image source={images.ratings[props.route.params.rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});
