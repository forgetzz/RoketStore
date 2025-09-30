import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';


export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="HigsDomino" options={{ presentation: 'modal', title: 'Highs Domino Chip' }} />
        <Stack.Screen name="Bongkar" options={{ presentation: 'modal', title: 'Bongkar Chip' }} />
        <Stack.Screen name="Royal" options={{ presentation: 'modal', title: 'Royal Chip Chip' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
