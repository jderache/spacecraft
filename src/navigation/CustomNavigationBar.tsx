import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";


// Définir les types de props



export default function CustomNavigationBar({ route, options, navigation, back, logout } : any) {
    const title = getHeaderTitle(options, route.name);

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} />
            {logout ? <Appbar.Action icon="logout" onPress={logout} /> : null}
        </Appbar.Header>
    )
}