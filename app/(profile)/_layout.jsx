import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
const AuthLayout = () => {
  return (
    <>
    <Stack>
    <Stack.Screen name="address" options={{headerShown:false}}/>
    <Stack.Screen name="edit" options={{headerShown:false}}/>
    <Stack.Screen name="payment" options={{headerShown:false}}/>
    <Stack.Screen name="change-password" options={{headerShown:false}}/>
    <Stack.Screen name="orders" options={{headerShown:false}}/>      
    <Stack.Screen name="settings" options={{headerShown:false}}/>      
    <Stack.Screen name="add-card" options={{headerShown:false}}/>      
    </Stack>
    <StatusBar backgroundColor="#ffffff" style="dark"/>
    </>
  );
};

export default AuthLayout;
