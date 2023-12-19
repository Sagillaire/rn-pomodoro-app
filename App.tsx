import { useState, useEffect } from 'react';
import { pomoTabs, styles } from './src/utils';
import { Tabs, Timer } from './src/components';
import { Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native';

export default function App() {
  // States
  const [time, setTime] = useState<number>(pomoTabs[0].time * 60)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [tab, setTab] = useState<number>(0)

  // Contants
  const currentColor = pomoTabs[tab].color

  // Handlers
  const handleClick = () => setIsActive(!isActive)

  // Effects
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isActive) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1)
      }, 1000)
    } else {
      clearInterval(String(interval))
    }

    if (time === 0) setIsActive(false)

    return () => clearInterval(interval as NodeJS.Timeout)
  }, [isActive, time])

  useEffect(() => {
    setIsActive(false)
  }, [tab])

  return (
    <SafeAreaView style={[styles.safeContainer, { backgroundColor: currentColor }]}>
      <View style={[styles.container, Platform.OS === 'android' && { paddingTop: 30 }]}>
        <Text style={styles.text}>Pomodoro</Text>
        <Tabs
          tab={tab}
          setTab={setTab}
          setTime={setTime}
        />
        <Timer time={time} />

        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.buttonColor}>
            {isActive ? 'Stop' : 'Start'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
