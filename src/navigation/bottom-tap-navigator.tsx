import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "@/components/shared/icons";
import { useTheme } from "@shopify/restyle";
import { RootBottomTabParamList } from "./types";
import HomeStackNavigator from "./home-stack-navigator";
import CompletedScreen from "@/screen/completed-screen";
import TodayScreen from "@/screen/today-screen ";
import CategoriesStackNavigator from "./categories-stack-navigator";

const Tab = createBottomTabNavigator<RootBottomTabParamList>()

const BottonTapNavigator = () => {

    const theme = useTheme()
    return (
    <Tab.Navigator
     screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,
     }}
    >
        <Tab.Screen name="HomeStack" component={HomeStackNavigator} 
         options={() => ({
            title: "Home",
            tabBarIcon: ({ color }) => <Icons name="home" color={color} />,
            headerShown: false
            
         })}
        />
        <Tab.Screen name="Completed" component={CompletedScreen}
         options={() => ({
            title: "Completed",
            tabBarIcon: ({ color }) => <Icons name="completed" color={color} />,
            headerShown: false,
         })}
        />
        <Tab.Screen name="Today" component={TodayScreen} 
         options={() => ({
            title: "Today",
            tabBarIcon: ({ color }) => <Icons name="calendar" color={color} />,
            headerShown: false,
         })}
        />
        <Tab.Screen name="CategoriesStack" component={CategoriesStackNavigator} 
          options={() => ({
            title: "Categories",
            tabBarIcon: ({ color }) => <Icons name="categories" color={color} />,
            headerShown: false,
         })}
        />
    </Tab.Navigator>
    )
}

export default BottonTapNavigator