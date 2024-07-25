// import { useRef, useEffect } from 'react';
// import { View, GestureResponderEvent } from 'react-native';

// const useOutsideTouch = (callback: () => void) => {
//   const ref = useRef<View>(null);

//   useEffect(() => {
//     const handleTouchOutside = (event: GestureResponderEvent) => {
//       if (ref.current) {
//         ref.current.measure((fx, fy, width, height, px, py) => {
//           const { pageX, pageY } = event.nativeEvent;
//           if (
//             pageX < px ||
//             pageX > px + width ||
//             pageY < py ||
//             pageY > py + height
//           ) {
//             callback();
//           }
//         });
//       }
//     };

//     const touchableListener = (event: GestureResponderEvent) => {
//       handleTouchOutside(event);
//     };

//     // Add a listener to the ref's parent view
//     const parentView = ref.current?.getParent();
//     if (parentView) {
//       parentView.addEventListener('touchstart', touchableListener);
//     }

//     return () => {
//       if (parentView) {
//         parentView.removeEventListener('touchstart', touchableListener);
//       }
//     };
//   }, [callback]);

//   return ref;
// };

// export default useOutsideTouch;

import { useRef, useEffect, useCallback } from 'react';
import { View } from 'react-native';

const useOutsideTouch = (callback) => {
  const ref = useRef<View>(null);

  const handleTouchOutside = useCallback((event) => {
    if (ref.current) {
      ref.current.measure((x, y, width, height, px, py) => {
        const { pageX, pageY } = event.nativeEvent;
        if (pageX < px || pageX > px + width || pageY < py || pageY > py + height) {
          callback();
        }
      });
    }
  }, [ref, callback]);

  useEffect(() => {
    const touchListener = ref.current?.onTouchStart(handleTouchOutside);

    return () => {
      touchListener?.remove();
    };
  }, [handleTouchOutside]);

  return ref;
};

export default useOutsideTouch;
