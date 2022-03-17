import {BubbleProp} from "../types";
import {StyleSheet, View} from "react-native";

export function Bubble(props : BubbleProp) {

    const radius = props.radius??5;
    const position = props.position??{x:0,y:0};
    const posX = position.x - radius/2;
    const posY = position.y - radius/2;

    return (
        <View style={[styles.bubble,
            {backgroundColor: props.background},
            {height: radius, width: radius},
            {borderRadius: radius},
            {transform: [{translateX: posX},{translateY: posY}],}
        ]} />
    )

}

const styles = StyleSheet.create({
   bubble: {
       position: "absolute",
   }
});
