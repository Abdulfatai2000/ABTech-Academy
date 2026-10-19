# Practice React Native examples with Expo

ABTech Academy's embedded editor is for drafting and comparing code; it does **not** run React Native apps. To try runnable examples, create a separate Expo project.

## Prerequisites
- Install a supported Node.js LTS release and npm.
- Install Expo Go on a compatible device, or configure an Android/iOS emulator.
- Use a terminal and code editor.

## Create a practice app
```bash
npx create-expo-app@latest abtech-practice
cd abtech-practice
npx expo start
```

Follow the instructions printed by Expo to open the project. The generated project may use Expo Router; edit its initial screen (often `app/index.tsx` or `src/app/index.tsx`) rather than assuming `App.tsx` exists.

## Try a counter
```tsx
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ padding: 24, gap: 12 }}>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount((previous) => previous + 1)} />
    </View>
  );
}
```

## Troubleshooting
- If the QR connection fails, verify the computer and phone are on the same network; Expo also documents tunnel mode.
- If a module is missing, install it in the **practice project**, not the Academy repository.
- If your template differs, locate the actual route file before replacing code.
- Never paste API keys or personal secrets into public snippets.

Official references: https://docs.expo.dev/get-started/create-a-project/ and https://reactnative.dev/docs/getting-started.
