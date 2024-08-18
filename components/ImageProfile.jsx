import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { icons, images } from "../constants";
import { changeImage, getUsers } from "../lib/supabase";

export default function ImageProfile({ imageProfile, isLoading }) {
  const [image, setImage] = useState(null);
  const [isImageProfile, setIsImageProfile] = useState();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  /////////////////////////////////////////
  useEffect(() => {
    async function changeImageFun() {
      setIsImageProfile(true);
      if (image) return await changeImage(image);
      setIsImageProfile(false);
    }
    changeImageFun();
  }, [image]);
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000, // Adjust duration for rotation speed
        useNativeDriver: false,
      })
    ).start();
  }, [rotation, isLoading]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  /////////////////////////////////////////////
  return (
    <TouchableOpacity className={`relative `} onPress={pickImage}>
      <Image
        source={icons.penwing}
        className="absolute bottom-0 right-0 opacity-100 bg-stone-300 rounded-full w-7 h-7  z-10"
      />
      {isLoading ? (
        <View className="w-[90px] rounded-full h-[90px] bg-stone-200">
          <Animated.Image
            style={[
              {
                transform: [{ rotate: rotateInterpolate }],
              },
            ]}
            className="w-8 h-8 m-auto my-auto "
            source={icons.clock}
          />
        </View>
      ) : image ? (
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          className="w-[90px] rounded-full h-[90px]"
        />
      ) : imageProfile ? (
        <Image
          source={{ uri: imageProfile }}
          resizeMode="contain"
          className="w-[90px] rounded-full h-[90px]"
        />
      ) : (
        <Image
          source={images.profileimage}
          className="w-[90px] rounded-full h-[90px]"
        />
      )}
    </TouchableOpacity>
    // <Image
    //   source={{ uri: imageProfile }}
    //   resizeMode="contain"
    //   className="w-[90px] rounded-full h-[90px]"
    // />
  );
}
