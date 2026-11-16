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
  const [estoque, setEstoque] = useState(0);
  const [movimentacao, setMovimentacao] = useState('');
  const [iniciado, setIniciado] = useState(false);

  const definirInicial = () => {
    Keyboard.dismiss();
    const qtd = parseInt(movimentacao, 10);
    if (!produto.trim()) {
      Alert.alert('Erro', 'Informe o nome do produto.');
      return;
    }
    if (isNaN(qtd) || qtd < 0) {
      Alert.alert('Erro', 'Informe uma quantidade inicial válida (zero ou positiva).');
      return;
    }
    setEstoque(qtd);
    setIniciado(true);
    setMovimentacao('');
    checarAlerta(qtd);
  };

  const checarAlerta = (qtd) => {
    if (qtd < 5) {
      Alert.alert('Aviso de Reposição', `O estoque de ${produto} está crítico: ${qtd} unidade(s) restante(s).`);
    }
  };

  const adicionarEstoque = () => {
    Keyboard.dismiss();
    const qtd = parseInt(movimentacao, 10);
    if (isNaN(qtd) || qtd <= 0) {
      Alert.alert('Erro', 'Informe uma quantidade inteira maior que zero.');
      return;
    }
    const novoTotal = estoque + qtd;
    setEstoque(novoTotal);
    setMovimentacao('');
    checarAlerta(novoTotal);
  };

  const retirarEstoque = () => {
    Keyboard.dismiss();
    const qtd = parseInt(movimentacao, 10);
    if (isNaN(qtd) || qtd <= 0) {
      Alert.alert('Erro', 'Informe uma quantidade inteira maior que zero.');
      return;
    }
    if (qtd > estoque) {
      Alert.alert('Saldo Insuficiente', `Retirada bloqueada! Disponível atual: ${estoque}`);
      return;
    }
    const novoTotal = estoque - qtd;
    setEstoque(novoTotal);
    setMovimentacao('');
    checarAlerta(novoTotal);
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
              <Text style={styles.badgeText}>INVENTÁRIO</Text>
            </View>
            <Text style={styles.title}>Controle de Estoque</Text>

            <Text style={styles.label}>Produto</Text>
            <TextInput
              style={[styles.input, iniciado && styles.inputDisabled]}
              placeholder="Ex: Cabo Drop 1 FO"
              placeholderTextColor="#64748B"
              value={produto}
              onChangeText={setProduto}
              editable={!iniciado}
            />

            <Text style={styles.label}>
              {iniciado ? 'Quantidade para Movimentação' : 'Quantidade Inicial'}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 10"
              placeholderTextColor="#64748B"
              keyboardType="number-pad"
              value={movimentacao}
              onChangeText={setMovimentacao}
            />

            {!iniciado ? (
              <Pressable
                style={({ pressed }) => [styles.buttonPrimary, pressed && styles.buttonPressed]}
                onPress={definirInicial}
              >
                <Text style={styles.buttonText}>Cadastrar Estoque Inicial</Text>
              </Pressable>
            ) : (
              <View style={styles.buttonRow}>
                <Pressable
                  style={({ pressed }) => [styles.btnAction, styles.btnAdd, pressed && styles.buttonPressed]}
                  onPress={adicionarEstoque}
                >
                  <Text style={styles.buttonText}>Adicionar estoque</Text>
                </Pressable>
                <Pressable
                  style={({ pressed }) => [styles.btnAction, styles.btnRemove, pressed && styles.buttonPressed]}
                  onPress={retirarEstoque}
                >
                  <Text style={styles.buttonText}>Retirar estoque</Text>
                </Pressable>
              </View>
            )}

            {iniciado && (
              <View style={[styles.stockCard, estoque < 5 && styles.stockCardWarning]}>
                <Text style={styles.stockItemName}>{produto}</Text>
                <Text style={styles.stockQuantity}>{estoque}</Text>
                <Text style={styles.stockCaption}>unidades disponíveis</Text>

                {estoque < 5 && (
                  <View style={styles.alertPill}>
                    <Text style={styles.alertPillText}>Alerta: menos de 5 unidades!</Text>
                  </View>
                )}
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
    marginBottom: 6,
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
  inputDisabled: {
    backgroundColor: '#131C2E',
    color: '#94A3B8',
  },
  buttonPrimary: {
    backgroundColor: '#00E5FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  btnAction: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnAdd: {
    backgroundColor: '#059669',
  },
  btnRemove: {
    backgroundColor: '#DC2626',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  stockCard: {
    marginTop: 20,
    backgroundColor: '#0A0F1D',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  stockCardWarning: {
    borderColor: '#DC2626',
    backgroundColor: '#1C0E13',
  },
  stockItemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E2E8F0',
  },
  stockQuantity: {
    fontSize: 40,
    fontWeight: '800',
    color: '#00E5FF',
    marginTop: 4,
  },
  stockCaption: {
    fontSize: 13,
    color: '#94A3B8',
  },
  alertPill: {
    marginTop: 12,
    backgroundColor: '#7F1D1D',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  alertPillText: {
    color: '#FCA5A5',
    fontSize: 12,
    fontWeight: '700',
  },
});