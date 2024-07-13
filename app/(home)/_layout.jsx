import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
const AuthLayout = () => {
  return (
    <>
    <Stack>
    <Stack.Screen name="men" options={{headerShown:false}}/>
    <Stack.Screen name="women" options={{headerShown:false}}/>
    <Stack.Screen name="children" options={{headerShown:false}}/>
    {/* <Stack.Screen name="home2" options={{headerShown:false}}/>       */}
    </Stack>
    <StatusBar backgroundColor="#ffffff" style="light"/>
    </>
  );
};

export default AuthLayout;
