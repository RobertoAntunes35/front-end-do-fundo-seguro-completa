import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { TextInput, Button, HelperText, Divider, Menu } from 'react-native-paper';

import { useDebit } from '../../context/accountsContext';


const AddDebitScreen = ({ navigation }) => {
  const id = 0
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [dateV, setDateV] = useState(null);
  const [amountError, setAmountError] = useState('');
  const {addDebit} = useDebit();


  const handleAddDebit = () => {
    if (!description) {
      alert('Por favor, insira uma descrição.');
      return;
    }

    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      setAmountError('Insira um valor válido.');
      return;
    } else {
      setAmountError('');
    }

    // Lógica para adicionar o débito
    const newDebit = {
      description,
      amount,
      type,
      dateV
    }


    addDebit(newDebit);
    // Navegar para a tela anterior ou realizar qualquer outra ação desejada
    navigation.navigate('Home');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <Text style={styles.header}>Novo Débito</Text>

        <TextInput
          label="Descrição"
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={styles.input}
        />

        <TextInput
          label="Tipo (credit or debit)"
          value={type}
          onChangeText={(text) => setType(text)}
          style={styles.input}
        />

        <TextInput
          label="Data Vencimento"
          value={dateV}
          onChangeText={(text) => setDateV(text)}
          style={styles.input}
        />

        <TextInput
          label="Valor (R$)"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
          style={styles.input}
          error={amountError !== ''}
        />

        <HelperText type="error" visible={amountError !== ''}>
          {amountError}
        </HelperText>

        <Button
          mode="contained"
          onPress={handleAddDebit}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Adicionar Débito
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#38a69d',
    marginTop: 10,
  },
  buttonLabel: {
    color: '#fff',
  },
  menuButton: {
    marginTop: 10,
  },
});

export default AddDebitScreen;