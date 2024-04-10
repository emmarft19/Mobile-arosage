import { createStackNavigator } from "@react-navigation/stack";
import  Home from './Home.tsx';
import  user_profil from './user_profil.tsx';

type RootParamList = {
    Home: undefined;
    Profile: { userId: number };
  };

const Stack = createStackNavigator<RootParamList>()();

const SwitchPages = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component ={Home} />
            <Stack.Screen name="user_profil" component ={user_profil} />


        </Stack.Navigator>
    )
}

export default SwitchPages();