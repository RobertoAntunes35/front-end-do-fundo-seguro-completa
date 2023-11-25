import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import * as Animation from 'react-native-animatable'

const TransactionCard = ({ type, amount, description }) => {
    const backgroundColorCard = type === 'debit' ? '#F8D7DA' : '#D4EDDA'
    const colorTextAmount = type === 'debit' ? '#c71c24' : '#28a745'
    const colorTitle = type === 'debit' ? '#721c24' : '#155724'
    
    const styles = StyleSheet.create({
    cardContainer: {
        marginBottom:10,
        marginTop: 10,
    },
    card: {
        marginBottom: 10,
        backgroundColor: backgroundColorCard
      },
      title: {
        fontSize: 18,
        color: colorTitle,
        fontWeight: 'bold',
      },
      amount: {
        color: colorTextAmount,
        fontWeight:'bold',
        fontSize: 20,
        marginBottom: 10,
      },
      description: {
        fontSize: 15,
        color: colorTextAmount,
        fontWeight: 'bold'
      }

    });
    return (
        <TouchableOpacity>
            <Animation.View style={styles.cardContainer} animation="fadeInUp">
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.title}>{type === 'debit' ? 'Débito' : 'Crédito'}</Title>
                    <Paragraph style={styles.amount}>{`R$ ${amount}`}</Paragraph>
                    <Text style={styles.description}>{description}</Text>
                </Card.Content>
            </Card>
            </Animation.View>
        </TouchableOpacity>
  );
};



export default TransactionCard;