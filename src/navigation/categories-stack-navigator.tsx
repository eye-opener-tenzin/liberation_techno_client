import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesStackParamList } from "./types";
import CategoriesScreen from "@/screen/categories-screen";
import CategoryScreen from "@/screen/category-screen";

const Stack = createNativeStackNavigator<CategoriesStackParamList>()

const CategoriesStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen}
             options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="Category" component={CategoryScreen} 
            options={{
                headerShown: false
            }}
            />

        </Stack.Navigator>
    )
}

export default CategoriesStackNavigator