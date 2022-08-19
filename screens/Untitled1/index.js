import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: "#fbfbfb",
    padding: 10,
    position: "relative",
    height: "100%"
  }}>
      <View style={{
      left: 0,
      top: 0,
      position: "absolute",
      height: 64,
      width: 357,
      backgroundColor: "#9dcdf2",
      borderRadius: 0,
      color: "#777777"
    }}></View><Text style={{
      left: 52,
      top: 16,
      position: "absolute",
      width: 102,
      height: 30,
      lineHeight: 25,
      fontSize: 25,
      borderRadius: 0,
      color: "#3d3d3d"
    }}>My app.</Text><View style={{
      position: "absolute",
      left: 108.5,
      top: 251.5,
      height: 134,
      width: 140,
      backgroundColor: "#9df1ab",
      borderRadius: "50%",
      color: "#777777"
    }}></View><Text style={{
      left: 52,
      top: 197,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum… </Text></View>;
};

export default Untitled1;