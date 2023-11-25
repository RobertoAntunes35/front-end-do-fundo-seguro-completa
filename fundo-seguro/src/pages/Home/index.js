import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import TransactionCard from "../../components/TransactionCard";
import Actions from "../../components/Actions";
import { useNavigation } from "@react-navigation/native";
import { useDebit } from "../../context/accountsContext";
import { useState } from "react";


const list = [
    {
        id:1,
        type: 'credit',
        amount: '4.200,00',
        description: 'SALARIO'
    },
    {
        id:2,
        type: 'debit',
        amount: '120,00',
        description: 'CONTA DE AGUA'
    },
    {
        id:3,
        type: 'credit',
        amount: '400,00',
        description: 'INVESTIMENTO'
    },   
]

const Home = () => {
    const navigation = useNavigation()
    const {state, totalAmount} = useDebit();

    const renderItem = ({item}) => (
        <TransactionCard
        type={item.type}
        amount={item.amount}
        description={item.description}
        />
    )

    return (
        <View style={styles.container}>
            <Header name="Roberto Antunes"/>
            <Balance saldo={totalAmount} gastos="0.00"/>
            <Actions/>
            <Text style={styles.title}>Últimas Movimentação</Text>
            <FlatList 
            style={styles.list}
            data={state.debitList}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F4F4F4'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginLeft: 14,
        marginTop:14
    },
    list: {
        marginStart: 14,
        marginEnd: 14,

    }
})

export default Home;