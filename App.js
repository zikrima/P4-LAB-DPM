import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  // State untuk skor tim
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  // Fungsi untuk reset skor
  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  // Fungsi untuk menampilkan pemenang
  const getWinnerMessage = () => {
    if (scoreA === 10) return 'Tim A Menang!';
    if (scoreB === 10) return 'Tim B Menang!';
    return '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pertandingan Futsal</Text>

      {/* Nama Tim */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Tim A</Text>
        <Text style={styles.teamName}>Tim B</Text>
      </View>

      {/* Skor */}
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{scoreA}</Text>
        <Text style={styles.score}>{scoreB}</Text>
      </View>

      {/* Tombol Penambahan dan Pengurangan Skor */}
      <View style={styles.buttonRow}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScoreA(scoreA + 1)}
          >
            <Text style={styles.buttonText}>+ Tim A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScoreA(scoreA > 0 ? scoreA - 1 : 0)}
          >
            <Text style={styles.buttonText}>- Tim A</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScoreB(scoreB + 1)}
          >
            <Text style={styles.buttonText}>+ Tim B</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScoreB(scoreB > 0 ? scoreB - 1 : 0)}
          >
            <Text style={styles.buttonText}>- Tim B</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pesan Pemenang */}
      <Text style={styles.winnerMessage}>{getWinnerMessage()}</Text>

      {/* Tombol Reset */}
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  buttonGroup: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  winnerMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d9534f',
    marginVertical: 20,
  },
  resetButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,  
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  resetButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
