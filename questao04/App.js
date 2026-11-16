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
  const [temperatura, setTemperatura] = useState('');
  const [modo, setModo] = useState('C_PARA_F');
  const [resultado, setResultado] = useState(null);

  const converter = () => {
    Keyboard.dismiss();
    const tempNum = parseFloat(temperatura.replace(',', '.'));

    if (isNaN(tempNum)) {
      Alert.alert('Valor Inválido', 'Insira um valor numérico para conversão.');
      return;
    }

    if (modo === 'C_PARA_F') {
      const f = (tempNum * 9) / 5 + 32;
      setResultado({
        origem: `${tempNum} °C`,
        convertido: `${f.toFixed(2)} °F`,
      });
    } else {
      const c = ((tempNum - 32) * 5) / 9;
      setResultado({
        origem: `${tempNum} °F`,
        convertido: `${c.toFixed(2)} °C`,
      });
    }
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
              <Text style={styles.badgeText}>METEOROLOGIA</Text>
            </View>
            <Text style={styles.title}>Conversor de Escala</Text>

            <Text style={styles.label}>Sentido da Conversão</Text>
            <View style={styles.modeSelector}>
              <Pressable
                style={[styles.modeTab, modo === 'C_PARA_F' && styles.modeTabActive]}
                onPress={() => {
                  setModo('C_PARA_F');
                  setResultado(null);
                }}
              >
                <Text style={[styles.modeTabText, modo === 'C_PARA_F' && styles.modeTabTextActive]}>
                  Celsius → °F
                </Text>
              </Pressable>

              <Pressable
                style={[styles.modeTab, modo === 'F_PARA_C' && styles.modeTabActive]}
                onPress={() => {
                  setModo('F_PARA_C');
                  setResultado(null);
                }}
              >
                <Text style={[styles.modeTabText, modo === 'F_PARA_C' && styles.modeTabTextActive]}>
                  Fahrenheit → °C
                </Text>
              </Pressable>
            </View>

            <Text style={styles.label}>
              Temperatura em {modo === 'C_PARA_F' ? 'Celsius (°C)' : 'Fahrenheit (°F)'}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 30"
              placeholderTextColor="#64748B"
              keyboardType="numeric"
              value={temperatura}
              onChangeText={setTemperatura}
            />

            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
              onPress={converter}
            >
              <Text style={styles.buttonText}>Converter</Text>
            </Pressable>

            {resultado && (
              <View style={styles.resultBox}>
                <Text style={styles.resultOriginText}>{resultado.origem} equivale a</Text>
                <Text style={styles.resultConvertedText}>{resultado.convertido}</Text>
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
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#CBD5E1',
    marginBottom: 8,
  },
  modeSelector: {
    flexDirection: 'row',
    backgroundColor: '#0A0F1D',
    borderRadius: 10,
    padding: 4,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  modeTab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  modeTabActive: {
    backgroundColor: '#1E293B',
  },
  modeTabText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },
  modeTabTextActive: {
    color: '#00E5FF',
    fontWeight: '700',
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
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00E5FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#090D16',
    fontSize: 15,
    fontWeight: '800',
  },
  resultBox: {
    marginTop: 20,
    padding: 18,
    backgroundColor: '#0A0F1D',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0284C7',
    alignItems: 'center',
  },
  resultOriginText: {
    fontSize: 14,
    color: '#94A3B8',
  },
  resultConvertedText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#00E5FF',
    marginTop: 4,
  },
});