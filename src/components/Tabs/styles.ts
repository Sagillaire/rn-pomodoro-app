import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tab: {
        width: '33%',
        borderWidth: 3,
        borderRadius: 10,
        marginVertical: 20,
        paddingVertical: 5,
        fontWeight: 'bold',
        alignItems: 'center',
        borderColor: 'transparent',
    },
    activeTab: {
        borderColor: 'white',
    }
})