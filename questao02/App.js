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
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularMedia = () => {
    Keyboard.dismiss();
    if (!nome.trim()) {
      Alert.alert('Campo Obrigatório', 'Informe o nome do estudante.');
      return;
    }

    const n1 = parseFloat(nota1.replace(',', '.'));
    const n2 = parseFloat(nota2.replace(',', '.'));
    const n3 = parseFloat(nota3.replace(',', '.'));

    const notas = [n1, n2, n3];
    const invalida = notas.some((n) => isNaN(n) || n < 0 || n > 10);

    if (invalida) {
      Alert.alert('Notas Inválidas', 'Informe as 3 notas com valores válidos entre 0.0 e 10.0.');
      return;
    }

    const media = (n1 + n2 + n3) / 3;
    const situacao = media >= 7.0 ? 'Aprovado' : 'Reprovado';

    setResultado({
      nome: nome.trim(),
      media: media.toFixed(1),
      situacao,
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
              <Text style={styles.badgeText}>SISTEMA ACADÊMICO</Text>
            </View>
            <Text style={styles.title}>Avaliação de Desempenho</Text>

            <Text style={styles.label}>Nome do Aluno</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Maria Silva"
              placeholderTextColor="#64748B"
              value={nome}
              onChangeText={setNome}
            />

            <View style={styles.notesRow}>
              <View style={styles.noteField}>
                <Text style={styles.label}>Nota 1</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0.0 - 10.0"
                  placeholderTextColor="#64748B"
                  keyboardType="numeric"
                  value={nota1}
                  onChangeText={setNota1}
                />
              </View>
              <View style={styles.noteField}>
                <Text style={styles.label}>Nota 2</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0.0 - 10.0"
                  placeholderTextColor="#64748B"
                  keyboardType="numeric"
                  value={nota2}
                  onChangeText={setNota2}
                />
              </View>
              <View style={styles.noteField}>
                <Text style={styles.label}>Nota 3</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0.0 - 10.0"
                  placeholderTextColor="#64748B"
                  keyboardType="numeric"
                  value={nota3}
                  onChangeText={setNota3}
                />
              </View>
            </View>

            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
              onPress={calcularMedia}
            >
              <Text style={styles.buttonText}>Calcular média</Text>
            </Pressable>

            {resultado && (
              <View
                style={[
                  styles.resultBox,
                  resultado.situacao === 'Aprovado' ? styles.resultApproved : styles.resultRejected,
                ]}
              >
                <Text style={styles.studentName}>{resultado.nome}</Text>
                <Text style={styles.mediaText}>Média Aritmética: {resultado.media}</Text>
                <View
                  style={[
                    styles.statusTag,
                    resultado.situacao === 'Aprovado' ? styles.tagApproved : styles.tagRejected,
                  ]}
                >
                  <Text
                    style={[
                      styles.statusTagText,
                      resultado.situacao === 'Aprovado' ? styles.tagTextApproved : styles.tagTextRejected,
                    ]}
                  >
                    {resultado.situacao.toUpperCase()}
                  </Text>
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
    color: '#38BDF8',
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
  notesRow: {
    flexDirection: 'row',
    gap: 10,
  },
  noteField: {
    flex: 1,
  },
  button: {
    backgroundColor: '#00E5FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
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
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  resultApproved: {
    backgroundColor: '#052317',
    borderColor: '#059669',
  },
  resultRejected: {
    backgroundColor: '#270F14',
    borderColor: '#DC2626',
  },
  studentName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  mediaText: {
    fontSize: 16,
    color: '#CBD5E1',
    marginTop: 4,
  },
  statusTag: {
    marginTop: 10,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  tagApproved: {
    backgroundColor: '#064E3B',
  },
  tagRejected: {
    backgroundColor: '#7F1D1D',
  },
  statusTagText: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },
  tagTextApproved: {
    color: '#34D399',
  },
  tagTextRejected: {
    color: '#F87171',
  },
});