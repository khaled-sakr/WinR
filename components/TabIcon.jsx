import { Text, View } from 'react-native'
import React from 'react'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
          <View className="flex items-center justify-center gap-2">
            <Image
              source={icon}
              resizeMode="contain"
              tintColor={color}
              className="w-10 h-10"
            />
            <Text
              className={`${focused ? "font-bold" : "font-semibold"} text-xs`}
              style={{ color: color }}
            >
              {name}
            </Text>
          </View>
        );
}

export default TabIcon
