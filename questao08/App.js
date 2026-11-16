import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  const [estudantes, setEstudantes] = useState([]);

  const cadastrarEstudante = () => {
    Keyboard.dismiss();
    if (!nome.trim() || !matricula.trim() || !email.trim() || !curso.trim()) {
      Alert.alert('Campos Obrigatórios', 'Preencha todos os campos do formulário.');
      return;
    }

    const duplicado = estudantes.some((e) => e.matricula.trim() === matricula.trim());
    if (duplicado) {
      Alert.alert('Matrícula Duplicada', 'Esta matrícula já se encontra registrada no sistema.');
      return;
    }

    const novo = {
      nome: nome.trim(),
      matricula: matricula.trim(),
      email: email.trim(),
      curso: curso.trim(),
    };

    setEstudantes([...estudantes, novo]);
    setNome('');
    setMatricula('');
    setEmail('');
    setCurso('');
  };

  const removerEstudante = (mat) => {
    setEstudantes(estudantes.filter((e) => e.matricula !== mat));
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>CADASTRO ACADÊMICO</Text>
          </View>
          <Text style={styles.title}>Registro de Estudantes</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            placeholderTextColor="#64748B"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Matrícula</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 20260001"
            placeholderTextColor="#64748B"
            value={matricula}
            onChangeText={setMatricula}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="estudante@dominio.com"
            placeholderTextColor="#64748B"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Curso</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Sistemas de Informação"
            placeholderTextColor="#64748B"
            value={curso}
            onChangeText={setCurso}
          />

          <Pressable
            style={({ pressed }) => [styles.btnSubmit, pressed && styles.btnPressed]}
            onPress={cadastrarEstudante}
          >
            <Text style={styles.btnSubmitText}>Cadastrar Estudante</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>
          Estudantes Registrados ({estudantes.length})
        </Text>

        {estudantes.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum estudante adicionado ainda.</Text>
          </View>
        ) : (
          estudantes.map((item) => (
            <View key={item.matricula} style={styles.studentCard}>
              <View style={styles.infoCol}>
                <Text style={styles.cardName}>{item.nome}</Text>
                <Text style={styles.cardDetail}>Matrícula: {item.matricula}</Text>
                <Text style={styles.cardDetail}>E-mail: {item.email}</Text>
                <Text style={styles.cardCourse}>{item.curso}</Text>
              </View>
              <Pressable
                style={({ pressed }) => [styles.btnDelete, pressed && styles.btnPressed]}
                onPress={() => removerEstudante(item.matricula)}
              >
                <Text style={styles.btnDeleteText}>Remover</Text>
              </Pressable>
            </View>
          ))
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: '#090D16',
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 36,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#1E293B',
    marginBottom: 24,
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
    marginBottom: 16,
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
    marginBottom: 12,
  },
  btnSubmit: {
    backgroundColor: '#00E5FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  btnSubmitText: {
    color: '#090D16',
    fontSize: 15,
    fontWeight: '800',
  },
  btnPressed: {
    opacity: 0.85,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#94A3B8',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  emptyContainer: {
    padding: 24,
    backgroundColor: '#111827',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1E293B',
    alignItems: 'center',
  },
  emptyText: {
    color: '#64748B',
    fontSize: 14,
  },
  studentCard: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoCol: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  cardDetail: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 2,
  },
  cardCourse: {
    fontSize: 13,
    color: '#00E5FF',
    marginTop: 4,
    fontWeight: '600',
  },
  btnDelete: {
    backgroundColor: '#270F14',
    borderWidth: 1,
    borderColor: '#7F1D1D',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 10,
  },
  btnDeleteText: {
    color: '#F87171',
    fontWeight: '700',
    fontSize: 12,
  },
});