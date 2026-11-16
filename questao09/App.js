import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';

const CARDAPIO = [
  { id: 1, nome: 'Sanduíche Natural', preco: 8.0 },
  { id: 2, nome: 'Suco Natural', preco: 5.0 },
  { id: 3, nome: 'Salgado Assado', preco: 6.0 },
  { id: 4, nome: 'Refrigerante Lata', preco: 4.5 },
];

export default function App() {
  const [pedido, setPedido] = useState([]);

  const adicionarAoPedido = (produto) => {
    setPedido((prev) => {
      const idx = prev.findIndex((item) => item.id === produto.id);
      if (idx > -1) {
        const novo = [...prev];
        novo[idx].quantidade += 1;
        novo[idx].subtotal = novo[idx].quantidade * novo[idx].preco;
        return novo;
      }
      return [
        ...prev,
        {
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          quantidade: 1,
          subtotal: produto.preco,
        },
      ];
    });
  };

  const removerDoPedido = (id) => {
    setPedido((prev) => {
      const item = prev.find((i) => i.id === id);
      if (!item) return prev;
      if (item.quantidade > 1) {
        return prev.map((i) =>
          i.id === id
            ? { ...i, quantidade: i.quantidade - 1, subtotal: (i.quantidade - 1) * i.preco }
            : i
        );
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const totalGeral = pedido.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <View style={styles.mainWrapper}>
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>AUTOATENDIMENTO</Text>
          </View>
          <Text style={styles.title}>Lanchonete Universitária</Text>
        </View>

        <Text style={styles.sectionHeader}>Itens do Cardápio</Text>
        {CARDAPIO.map((prod) => (
          <View key={prod.id} style={styles.menuCard}>
            <View>
              <Text style={styles.menuName}>{prod.nome}</Text>
              <Text style={styles.menuPrice}>R$ {prod.preco.toFixed(2).replace('.', ',')}</Text>
            </View>
            <Pressable
              style={({ pressed }) => [styles.btnAdd, pressed && styles.btnPressed]}
              onPress={() => adicionarAoPedido(prod)}
            >
              <Text style={styles.btnAddText}>+ Adicionar</Text>
            </Pressable>
          </View>
        ))}

        <Text style={[styles.sectionHeader, { marginTop: 20 }]}>Resumo do Pedido</Text>
        {pedido.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>Nenhum item selecionado.</Text>
          </View>
        ) : (
          pedido.map((item) => (
            <View key={item.id} style={styles.orderRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.orderName}>{item.nome}</Text>
                <Text style={styles.orderSub}>
                  {item.quantidade}x R$ {item.preco.toFixed(2).replace('.', ',')} = R${' '}
                  {item.subtotal.toFixed(2).replace('.', ',')}
                </Text>
              </View>
              <Pressable
                style={({ pressed }) => [styles.btnRemove, pressed && styles.btnPressed]}
                onPress={() => removerDoPedido(item.id)}
              >
                <Text style={styles.btnRemoveText}>-</Text>
              </Pressable>
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomCaption}>Total a Pagar</Text>
          <Text style={styles.bottomTotal}>R$ {totalGeral.toFixed(2).replace('.', ',')}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#090D16',
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 36,
    paddingBottom: 110,
  },
  header: {
    marginBottom: 16,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#1E293B',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  badgeText: {
    color: '#00E5FF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: '#94A3B8',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  menuCard: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  menuPrice: {
    fontSize: 13,
    color: '#00E5FF',
    marginTop: 2,
    fontWeight: '600',
  },
  btnAdd: {
    backgroundColor: '#00E5FF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  btnAddText: {
    color: '#090D16',
    fontWeight: '800',
    fontSize: 13,
  },
  btnPressed: {
    opacity: 0.85,
  },
  emptyBox: {
    padding: 20,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 12,
    alignItems: 'center',
  },
  emptyText: {
    color: '#64748B',
    fontSize: 14,
  },
  orderRow: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  orderSub: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 2,
  },
  btnRemove: {
    backgroundColor: '#270F14',
    borderWidth: 1,
    borderColor: '#7F1D1D',
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRemoveText: {
    color: '#F87171',
    fontWeight: '800',
    fontSize: 16,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#111827',
    borderTopWidth: 1,
    borderColor: '#1E293B',
    paddingHorizontal: 24,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomCaption: {
    fontSize: 12,
    color: '#94A3B8',
    textTransform: 'uppercase',
  },
  bottomTotal: {
    fontSize: 24,
    fontWeight: '800',
    color: '#00E5FF',
    marginTop: 2,
  },
});