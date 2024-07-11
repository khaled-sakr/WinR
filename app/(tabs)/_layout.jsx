// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
// const TabIcon=()=>{
//   return(
//     <View></View>  )
// }
const Tabslayout = () => {
  return (
    <Tabs >
        <Tabs.Screen name='home' options={{title: "Home",headerShown: false}}/>
        <Tabs.Screen name='favorute' options={{title:'favourite' , headerShown:false,}}/>
        <Tabs.Screen name='account' options={{title:'account',headerShown:false}}/>
        <Tabs.Screen name='cart' options={{title:'cart',headerShown:false}}/>
  </Tabs>
  )
}

export default Tabslayout

