import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [candidatos, setCandidatos] = useState([
    { id: 1, nome: 'Chapa 01 - Arthur Rocha', votos: 0 },
    { id: 2, nome: 'Chapa 02 - Carlos Kauan', votos: 0 },
    { id: 3, nome: 'Chapa 03 - Pedro Alexandrino', votos: 0 },
  ]);

  const registrarVoto = (id) => {
    setCandidatos((prev) =>
      prev.map((c) => (c.id === id ? { ...c, votos: c.votos + 1 } : c))
    );
  };

  const totalGeral = candidatos.reduce((acc, c) => acc + c.votos, 0);

  const apurarLideranca = () => {
    if (totalGeral === 0) return 'Nenhum voto computado.';
    const maiorQtd = Math.max(...candidatos.map((c) => c.votos));
    const maisVotados = candidatos.filter((c) => c.votos === maiorQtd);

    if (maisVotados.length > 1) {
      return `Empate na liderança: ${maisVotados.map((c) => c.nome).join(' e ')} (${maiorQtd} votos cada)`;
    }
    return `Mais votado: ${maisVotados[0].nome} (${maiorQtd} votos)`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>GRÊMIO ESTUDANTIL</Text>
        </View>
        <Text style={styles.title}>Votação de Representantes</Text>

        {candidatos.map((c) => (
          <View key={c.id} style={styles.candidateCard}>
            <View style={styles.candidateInfo}>
              <Text style={styles.candidateName}>{c.nome}</Text>
              <Text style={styles.candidateVotes}>{c.votos} voto(s)</Text>
            </View>
            <Pressable
              style={({ pressed }) => [styles.voteBtn, pressed && styles.btnPressed]}
              onPress={() => registrarVoto(c.id)}
            >
              <Text style={styles.voteBtnText}>Votar</Text>
            </Pressable>
          </View>
        ))}

        <View style={styles.summaryBox}>
          <Text style={styles.totalLabel}>Total Geral de Votos: {totalGeral}</Text>
          <Text style={styles.leaderLabel}>{apurarLideranca()}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#090D16',
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
  candidateCard: {
    backgroundColor: '#0A0F1D',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  candidateInfo: {
    flex: 1,
  },
  candidateName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  candidateVotes: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 4,
  },
  voteBtn: {
    backgroundColor: '#00E5FF',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  btnPressed: {
    opacity: 0.85,
  },
  voteBtnText: {
    color: '#090D16',
    fontWeight: '800',
    fontSize: 14,
  },
  summaryBox: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#0A0F1D',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 12,
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#00E5FF',
  },
  leaderLabel: {
    fontSize: 13,
    color: '#CBD5E1',
    marginTop: 6,
    textAlign: 'center',
    lineHeight: 18,
  },
});