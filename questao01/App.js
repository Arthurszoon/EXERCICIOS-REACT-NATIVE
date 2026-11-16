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
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularAgua = () => {
    Keyboard.dismiss();
    const pesoNum = parseFloat(peso.replace(',', '.'));

    if (isNaN(pesoNum) || pesoNum <= 0) {
      Alert.alert('Valor inválido', 'Informe um peso numérico maior que zero.');
      setResultado(null);
      return;
    }

    const consumoLitros = (pesoNum * 35) / 1000;
    setResultado(consumoLitros.toFixed(2));
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
          <View style={styles.card}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>HIDRATAÇÃO DIÁRIA</Text>
            </View>
            <Text style={styles.title}>Cálculo de Consumo de Água</Text>
            <Text style={styles.subtitle}>
              Estime a recomendação diária com base na taxa de 35 mL por quilograma.
            </Text>

            <Text style={styles.label}>Peso corporal (kg)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 70"
              placeholderTextColor="#64748B"
              keyboardType="numeric"
              value={peso}
              onChangeText={setPeso}
            />

            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
              onPress={calcularAgua}
            >
              <Text style={styles.buttonText}>Calcular</Text>
            </Pressable>

            {resultado && (
              <View style={styles.resultBox}>
                <Text style={styles.resultLabel}>Meta Recomendada</Text>
                <Text style={styles.resultValue}>{resultado} <Text style={styles.unitText}>litros/dia</Text></Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#0F293E',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 12,
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
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#94A3B8',
    marginBottom: 20,
    lineHeight: 20,
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
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#F8FAFC',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00D1FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  buttonText: {
    color: '#090D16',
    fontSize: 15,
    fontWeight: '800',
  },
  resultBox: {
    marginTop: 20,
    padding: 18,
    backgroundColor: '#0A1322',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0284C7',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#38BDF8',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  resultValue: {
    fontSize: 30,
    fontWeight: '800',
    color: '#00E5FF',
    marginTop: 4,
  },
  unitText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E0F2FE',
  },
});