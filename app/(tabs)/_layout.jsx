import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons} from '../../constants'
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={` ${focused ?( name === 'Home' ? 'w-14 h-14' : 'w-12 h-12') : (name === 'Home' ? ' w-12 h-12 ':' w-10 h-10 ') }`}
      />
      <Text
        className={`${focused ? "font-bold" : "font-semibold"} text-xs ${name==='Home' && 'mb-1' }`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const Tabslayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#0D4641",
      tabBarInactiveTintColor: "#7b7b85",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#F2F4F7",
        borderTopWidth: 0,
        height: 90,
      },
    }}
  >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.cart}
                color={color}
                name="cart"
                focused={focused}
              />
            ),
          }}
        />
           <Tabs.Screen
          name="categoriesStation"
          options={{
            title: "Categories",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.categories}
                color={color}
                name="categories"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
          <Tabs.Screen
                  name="categories/[category]"
                  options={{
                    headerShown: false,
                    tabBarItemStyle: {
                      display: 'none',
                    },
                  }}
          />
          <Tabs.Screen
                  name="products/[product]"
                  options={{
                    headerShown: false,
                    tabBarItemStyle: {
                      display: 'none',
                    },
                  }}
          />
          <Tabs.Screen
                  name="(section)"
                  options={{
                    headerShown: false,
                    tabBarItemStyle: {
                      display: 'none',
                    },
                  }}
          />
  </Tabs>
  )
}

export default Tabslayout

