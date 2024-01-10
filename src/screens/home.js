import { Text, View } from "react-native";

import HomeStyle from "../styles/homeStyle";

import JeSuisNouveau from "../components/home/jeSuisNouveau";
import JeReviensDeLoin from "../components/home/jeReviensDeLoin";

const Home = () => {
    return (
        <View style = {HomeStyle.view}>
            <Text>Bienvenue</Text>
            <JeSuisNouveau/>
            <JeReviensDeLoin/>
        </View>
    );
}

export default Home