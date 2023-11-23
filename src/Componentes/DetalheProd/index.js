import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const DetalhesProduto = ({ route }) => {
  const { produto } = route.params;
  const { nome, preco, imagem } = produto;
  const navigation = useNavigation();

  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={handleVoltar}>
        <Text style={styles.textoBotaoVoltar}>{'Voltar'}</Text>
      </TouchableOpacity>
      <Image
        source={{uri: imagem}}
        style={styles.imagem}
      />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>Preço: R$ {preco.toFixed(2)}</Text>
      <TouchableOpacity style={styles.botaoComprar}>
        <Text style={styles.textoBotaoComprar}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Agora está alinhado no topo
    paddingTop: 30, // Espaço para o botão de voltar
    paddingHorizontal: 16,
  },
  botaoVoltar: {
    position: 'absolute', 
    top: 0, 
    left: 13,
    padding: 10,
  },
  textoBotaoVoltar: {
    color: '#4f1964',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  preco: {
    fontSize: 18,
    marginBottom: 16,
  },
  botaoComprar: {
    backgroundColor: '#4f1964',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotaoComprar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});