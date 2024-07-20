import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const IdPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>IdPage</Text>
    </View>
  );
};

export default IdPage;
