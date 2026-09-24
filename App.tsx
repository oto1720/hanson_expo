import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>カウンター</Text>
      <Text style={styles.count}>{count}</Text>

      <View style={styles.buttonRow}>
        <Pressable
          style={[styles.button, styles.minusButton]}
          onPress={() => setCount((prev) => prev - 1)}
        >
          <Text style={styles.buttonText}>-1</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.plusButton]}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>
      </View>

      <Pressable style={styles.resetButton} onPress={() => setCount(0)}>
        <Text style={styles.resetText}>リセット</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  count: {
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusButton: {
    backgroundColor: '#ef4444',
  },
  plusButton: {
    backgroundColor: '#3b82f6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 24,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  resetText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '600',
  },
});
