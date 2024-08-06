import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons, images } from "../constants";

const InputForm = ({
  name,
  value,
  title,
  placeholder,
  type,
  size,
  addclass,
  handleChangeText,
  error,
  validation,
  LogInError,
  addViewStyle,
  addInputStyle,
  finalInput,
  disabled,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View
      className={`mb-1 relative ${!finalInput && "bg-white"} ${
        size === "full" ? " w-11/12 mx-auto" : "w-[48%]"
      } ${addViewStyle} `}
    >
      <Text
        className={`inline ${
          finalInput ? " text-base mb-1 font-[400]" : "text-sm font-semibold"
        } text-Font px-1 `}
      >
        {title}
      </Text>
      <TextInput
        name={name}
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        secureTextEntry={name === "Password" && !showPassword}
        placeholderTextColor="#b6b6b7"
        className={`${addclass} ${
          finalInput
            ? "bg-white h-[42px] border"
            : "bg-[#DFDFDF]  h-[52px] border-2"
        } text-Font ${type} ${addInputStyle} w-full rounded-[10px] placeholder:text-sm  font-semibold px-3 ${
          error ? " border-red-300 " : "border-[#C1C1C1]"
        }`}
      />
      {error && (
        <Text className="text-xs text-red-400 font-[500] px-1"> {error} </Text>
      )}
      {name.includes("Password") && !disabled && (
        <TouchableOpacity
          className={`
          absolute ${
            error
              ? finalInput
                ? "right-4 bottom-5.5"
                : "right-4 bottom-7"
              : finalInput
              ? " right-4 bottom-2.5 "
              : " right-4 bottom-4 "
          } 
          `}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            source={!showPassword ? icons.eye : icons.eyeHide}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputForm;

// export default InputForm;

// import {
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import { icons, images } from "../constants";

// type Props = {
//   name: string;
//   value: string;
//   title: string;
//   placeholder: string;
//   type: string;
//   size: string;
//   addclass: string;
//   handleChangeText: (text: string) => void;
//   error: string;
//   validation?: string;
//   LogInError?: string;
//   addViewStyle: string;
//   addInputStyle: string;
//   finalInput: boolean;
//   disabled: boolean;
//   srcIcon?: string;
// };

// const InputForm: React.FC<Props> = ({
//   name,
//   value,
//   title,
//   placeholder,
//   type,
//   size,
//   addclass,
//   handleChangeText,
//   error,
//   validation,
//   LogInError,
//   addViewStyle,
//   addInputStyle,
//   finalInput,
//   disabled,
//   ...props
// }) => {
//   const [showPassword, setShowPassword] = useState<boolean>(true);

//   return (
//     <View
//       className={`mb-1 relative ${!finalInput && "bg-white"} ${
//         size === "full" ? " w-11/12 mx-auto" : "w-[48%]"
//       } ${addViewStyle}`}
//     >
//       <Text
//         className={`inline ${
//           finalInput ? " text-base mb-1 font-[400]" : "text-sm font-semibold"
//         } text-Font px-1`}
//       >
//         {title}
//       </Text>
//       <TextInput
//         value={value}
//         placeholder={placeholder}
//         onChangeText={handleChangeText}
//         secureTextEntry={name === "Password" && !showPassword}
//         placeholderTextColor="#b6b6b7"
//         className={`${addclass} ${
//           finalInput
//             ? "bg-white h-[42px] border"
//             : "bg-[#DFDFDF]  h-[52px] border-2"
//         } text-Font ${type} ${addInputStyle} w-full rounded-[10px] placeholder:text-sm  font-semibold px-3 ${
//           error ? " border-red-300 " : "border-[#C1C1C1]"
//         }`}
//         {...props}
//       />
//       {error && (
//         <Text class className="text-xs text-red-400 font-[500] px-1">
//           {" "}
//           {error}{" "}
//         </Text>
//       )}
//       {name.includes("Password") && !disabled && (
//         <TouchableOpacity
//           className={`
//           absolute ${
//             error
//               ? finalInput
//                 ? "right-4 bottom-5.5"
//                 : "right-4 bottom-7"
//               : finalInput
//               ? " right-4 bottom-2.5 "
//               : " right-4 bottom-4 "
//           }
//           `}
//           onPress={() => setShowPassword(!showPassword)}
//         >
//           <Image
//             source={!showPassword ? icons.eye : icons.eyeHide}
//             className="w-6 h-6"
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default InputForm;
