import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="log-in" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#ffffff" style="light" />
    </>
  );
};

export default AuthLayout;
