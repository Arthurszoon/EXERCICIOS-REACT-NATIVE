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
  const [saldo, setSaldo] = useState(1000.0);
  const [valorInput, setValorInput] = useState('');

  const parseValor = () => {
    Keyboard.dismiss();
    const v = parseFloat(valorInput.replace(',', '.'));
    if (isNaN(v) || v <= 0) {
      Alert.alert('Valor Inválido', 'Insira uma quantia positiva maior que zero.');
      return null;
    }
    return v;
  };

  const depositar = () => {
    const v = parseValor();
    if (v === null) return;
    setSaldo((prev) => prev + v);
    setValorInput('');
  };

  const sacar = () => {
    const v = parseValor();
    if (v === null) return;
    if (v > saldo) {
      Alert.alert('Saldo Insuficiente', `O valor solicitado (R$ ${v.toFixed(2)}) é maior que seu saldo atual.`);
      return;
    }
    setSaldo((prev) => prev - v);
    setValorInput('');
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
              <Text style={styles.badgeText}>CONTA DIGITAL</Text>
            </View>
            <Text style={styles.title}>Simulador Bancário</Text>

            <View style={styles.balanceContainer}>
              <Text style={styles.balanceCaption}>Saldo em conta</Text>
              <Text style={styles.balanceValue}>
                R$ {saldo.toFixed(2).replace('.', ',')}
              </Text>
            </View>

            <Text style={styles.label}>Valor da operação (R$)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 150,00"
              placeholderTextColor="#64748B"
              keyboardType="numeric"
              value={valorInput}
              onChangeText={setValorInput}
            />

            <View style={styles.actionsRow}>
              <Pressable
                style={({ pressed }) => [styles.btnAction, styles.btnDeposit, pressed && styles.btnPressed]}
                onPress={depositar}
              >
                <Text style={styles.actionText}>Depositar</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [styles.btnAction, styles.btnWithdraw, pressed && styles.btnPressed]}
                onPress={sacar}
              >
                <Text style={styles.actionText}>Sacar</Text>
              </Pressable>
            </View>
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
  balanceContainer: {
    backgroundColor: '#0A0F1D',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E293B',
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceCaption: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  balanceValue: {
    color: '#F8FAFC',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 6,
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
    fontSize: 16,
    color: '#F8FAFC',
    marginBottom: 18,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  btnAction: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnDeposit: {
    backgroundColor: '#059669',
  },
  btnWithdraw: {
    backgroundColor: '#DC2626',
  },
  btnPressed: {
    opacity: 0.85,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});