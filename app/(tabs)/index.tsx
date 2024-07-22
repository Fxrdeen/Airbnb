import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { Link, Stack } from "expo-router";
import { useMemo, useState } from "react";
import { View, Text } from "react-native";
import listingData from "@/assets/data/airbnb-listings.json";
import ListingsMap from "@/components/ListingsMap";
import ListingMapData from "@/assets/data/airbnb-listings.geo.json";
const IndexPage = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingData as any, []);
  const onDataChange = (category: string) => {
    console.log("changed", category);
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChange} />,
        }}
      />
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listing={ListingMapData} />
    </View>
  );
};

export default IndexPage;
