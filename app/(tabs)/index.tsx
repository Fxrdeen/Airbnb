import { Link } from "expo-router";
import { View, Text } from "react-native";

const IndexPage = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/122"}>ListingDetails</Link>
    </View>
  );
};

export default IndexPage;
