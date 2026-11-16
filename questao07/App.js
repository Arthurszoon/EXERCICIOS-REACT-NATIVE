import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

export default function App() {
  const [produto, setProduto] = useState('');
  const [preco, setPreco] = useState('');
  const [desconto, setDesconto] = useState('');
  const [resultado, setResultado] = useState(null);

  const aplicarDesconto = () => {
    Keyboard.dismiss();
    if (!produto.trim()) {
      Alert.alert('Erro', 'Informe o nome do produto.');
      return;
    }

    const p = parseFloat(preco.replace(',', '.'));
    const d = parseFloat(desconto.replace(',', '.'));

    if (isNaN(p) || p < 0) {
      Alert.alert('Erro', 'Informe um preço válido e não negativo.');
      return;
    }

    if (isNaN(d) || d < 0 || d > 100) {
      Alert.alert('Erro', 'O desconto deve estar compreendido entre 0% e 100%.');
      return;
    }

    const valorEconomia = p * (d / 100);
    const totalFinal = p - valorEconomia;

    setResultado({
      produto: produto.trim(),
      economia: valorEconomia.toFixed(2),
      precoFinal: totalFinal.toFixed(2),
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>E-COMMERCE</Text>
            </View>
            <Text style={styles.title}>Cálculo de Desconto</Text>

            <Text style={styles.label}>Nome do Produto</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Teclado Mecânico"
              placeholderTextColor="#64748B"
              value={produto}
              onChangeText={setProduto}
            />

            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.label}>Preço Original (R$)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: 200,00"
                  placeholderTextColor="#64748B"
                  keyboardType="numeric"
                  value={preco}
                  onChangeText={setPreco}
                />
              </View>
              <View style={styles.col}>
                <Text style={styles.label}>Desconto (%)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: 15"
                  placeholderTextColor="#64748B"
                  keyboardType="numeric"
                  value={desconto}
                  onChangeText={setDesconto}
                />
              </View>
            </View>

            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.btnPressed]}
              onPress={aplicarDesconto}
            >
              <Text style={styles.buttonText}>Aplicar desconto</Text>
            </Pressable>

            {resultado && (
              <View style={styles.resultBox}>
                <Text style={styles.prodTitle}>{resultado.produto}</Text>
                <Text style={styles.economyText}>Economia de R$ {resultado.economia.replace('.', ',')}</Text>
                <View style={styles.finalBox}>
                  <Text style={styles.finalCaption}>Preço Final</Text>
                  <Text style={styles.finalPrice}>R$ {resultado.precoFinal.replace('.', ',')}</Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: '#090D16',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#1E293B',
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
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#CBD5E1',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#0A0F1D',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#F8FAFC',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  col: {
    flex: 1,
  },
  button: {
    backgroundColor: '#00E5FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#090D16',
    fontSize: 15,
    fontWeight: '800',
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: '#0A0F1D',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1E293B',
    alignItems: 'center',
  },
  prodTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  economyText: {
    fontSize: 14,
    color: '#34D399',
    marginTop: 4,
    fontWeight: '600',
  },
  finalBox: {
    marginTop: 12,
    alignItems: 'center',
  },
  finalCaption: {
    fontSize: 12,
    color: '#94A3B8',
    textTransform: 'uppercase',
  },
  finalPrice: {
    fontSize: 28,
    fontWeight: '800',
    color: '#00E5FF',
    marginTop: 2,
  },
});