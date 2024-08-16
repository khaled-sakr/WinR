import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="settings" options={{ headerShown: false }} />
        <Stack.Screen name="address" options={{ headerShown: false }} />
        <Stack.Screen name="edit" options={{ headerShown: false }} />
        <Stack.Screen name="payment" options={{ headerShown: false }} />
        <Stack.Screen name="change-password" options={{ headerShown: false }} />
        <Stack.Screen name="orderStation" options={{ headerShown: false }} />
        <Stack.Screen name="add-card" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#ffffff" style="dark" />
    </>
  );
};

export default AuthLayout;
