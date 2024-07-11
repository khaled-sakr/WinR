import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
const AuthLayout = () => {
  return (
    <>
    <Stack>
    <Stack.Screen name="over-all" options={{headerShown:false}}/>      
    <Stack.Screen name="address" options={{headerShown:false}}/>
    </Stack>
    <StatusBar backgroundColor="#ffffff" style="light"/>
    </>
  );
};

export default AuthLayout;
