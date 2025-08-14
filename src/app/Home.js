import { Text, SafeAreaView, FlatList, ActivityIndicator, View, StyleSheet } from "react-native";
import { fetchUser } from "../api/api";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUser,
    });

    if (isLoading) return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator />
        </View>
    );

    if (isError) return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Erro ao buscar os usuários: {error.message}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                style={styles.itemList}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name} - {item.address.city}</Text>
                        <Text style={styles.itemEmail}>{item.email}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
    
    },
    itemList: {
        width: '95%',
    },
    itemContainer: {
        padding: 16, 
        borderWidth: 1, 
        borderColor: '#E5E7EB',
        marginBottom: 8,
        borderRadius: 16,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    itemName: {
        fontSize: 18, 
        fontWeight: 'bold', 
    },
    itemEmail: {
        color: '#6B7280',
    },
});