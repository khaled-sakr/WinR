import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zzvxpsktjmvumocovlxe.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dnhwc2t0am12dW1vY292bHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MzcyNjQsImV4cCI6MjAzNzQxMzI2NH0._8rrNfHLKI0zDc6E-EIDKicvxiFZcOP1KCX7IJ_IuAE";
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
export const login = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const id = data && data["session"]["user"]["id"];
    if (error) {
      console.error("Sign-in error:", error.message);
      return { success: false, error };
    }
    await AsyncStorage.setItem("AuthList", id || "");
    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: err };
  }
};

export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    return { success: false, error };
  }
  const id = data && data["session"]["user"]["id"];
  console.log("id:", id);
  await AsyncStorage.setItem("AuthList", id || "");
  return { success: true, data };
};
/////////////////////////////////////////////////
export const logOut = async () => {
  await AsyncStorage.setItem("AuthList", "");
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  return error;
};
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// export const getUserId = async () => {
//   const { data: user } = await supabase.auth.getUser();
//   if (user) {
//     console.log("User ID:", user.id);
//     return user.id;
//   } else {
//     console.log("No user logged in");
//     return null;
//   }
// };
////////////////////////////////////
// export const getCurrentUser = async () => {
//   try {
//     const {
//       data: { user },
//       error,
//     } = await supabase.auth.getUser();
//     if (error) throw error;
//     return user;
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return null;
//   }
// };
//////////////////////////////////////////
// export const getUserDetails = async () => {
//   try {
//     const {
//       data: { user },
//       error,
//     } = await supabase.auth.getUser();

//     if (error) {
//       console.error("Error fetching user details:", error.message);
//       return null;
//     }

//     if (user) {
//       console.log("User Details:", user);
//       return user; // Return the user object which contains the email
//     } else {
//       console.log("No user logged in");
//       return null;
//     }
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     return null;
//   }
// };
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
export async function getProducts(filtercol, filterval) {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq(filtercol, filterval);

  if (error) {
    console.error("Error:", error);
  }
  return products;
}
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
export async function getFavourite() {
  const id = await AsyncStorage.getItem("AuthList");
  let { data: favourites, error } = await supabase
    .from("favourites")
    .select("*")
    .eq("user_id", id);
  if (error) {
    console.error("Error:", error);
  }
  return favourites;
}
export async function checkFav(idProd) {
  const id = await AsyncStorage.getItem("AuthList");
  try {
    let { data: fav, error } = await supabase
      .from("favourites")
      .select("*")
      .eq("user_id", id)
      .eq("id", idProd)
      .single();
    if (error) {
      if (error.code === "PGRST116") {
        console.log("Element not found");
        return null;
      }
    }
    console.log("Element found:", fav);
    return fav;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
export const insertFav = async (newFav) => {
  const id = await AsyncStorage.getItem("AuthList");
  const { data, error } = await supabase
    .from("favourites")
    .insert([{ ...newFav, user_id: id }]);
  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", data);
  }
};
export const deleteFav = async (id) => {
  const user_id = await AsyncStorage.getItem("AuthList");
  const { error } = await supabase
    .from("favourites")
    .delete()
    .eq("id", id)
    .eq("user_id", user_id);

  if (error) {
    console.error("Error inserting data:", error);
  }
};
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
export async function getCart() {
  const id = await AsyncStorage.getItem("AuthList");
  let { data: carts, error } = await supabase
    .from("carts")
    .select("*")
    .eq("user_id", id);
  if (error) {
    console.error("Error:", error);
  }
  return carts;
}
//////////////////////////////////////////////
export async function checkCart(idProd) {
  const id = await AsyncStorage.getItem("AuthList");
  try {
    let { data: cart, error } = await supabase
      .from("carts")
      .select("*")
      .eq("user_id", id)
      .eq("id", idProd)
      .single();
    if (error) {
      if (error.code === "PGRST116") {
        console.log("Element not found");
        return null;
      }
      // throw error; // Other errors
    }
    console.log("Element found:", cart);
    return cart;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
//////////////////////////////////////////////
export const insertCart = async (newCart) => {
  const id = await AsyncStorage.getItem("AuthList");
  const { data, error } = await supabase
    .from("carts")
    .insert([{ ...newCart, user_id: id }]);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", data);
  }
};
//////////////////////////////////////////////
export const changeQuantity = async (productId, newValue) => {
  const id = await AsyncStorage.getItem("AuthList");

  const { data, error } = await supabase
    .from("carts")
    .update({ quantity_product: newValue })
    .eq("user_id", id)
    .eq("id", productId)
    .select();

  // if (error) {
  //   console.error("Error updated data:", error);
  // } else {
  //   console.log("Data updated successfully:", data);
  // }
};
//////////////////////////////////////////////
export const changeSize = async (productId, newSize) => {
  const id = await AsyncStorage.getItem("AuthList");

  const { data, error } = await supabase
    .from("carts")
    .update({ size: newSize })
    .eq("user_id", id)
    .eq("id", productId)
    .select();

  // if (error) {
  //   console.error("Error updated data:", error);
  // } else {
  //   console.log("Data updated successfully:", data);
  // }
};
//////////////////////////////////////////////
export const deleteCart = async (id) => {
  const user_id = await AsyncStorage.getItem("AuthList");
  const { error } = await supabase
    .from("carts")
    .delete()
    .eq("id", id)
    .eq("user_id", user_id);

  if (error) {
    console.error("Error inserting data:", error);
  }
};
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
export async function getOrder() {
  const id = await AsyncStorage.getItem("AuthList");
  let { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", id);
  if (error) {
    console.error("Error:", error);
  }
  return orders;
}
//////////////////////////////////////////////
export async function checkOrder(idProd) {
  const id = await AsyncStorage.getItem("AuthList");
  try {
    let { data: orders, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", id)
      .eq("id", idProd)
      .single();
    if (error) {
      if (error.code === "PGRST116") {
        console.log("Element not found");
        return null;
      }
      // throw error; // Other errors
    }
    console.log("Element found:", fav);
    return orders;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
//////////////////////////////////////////////
export const insertOrder = async (newOrder) => {
  const id = await AsyncStorage.getItem("AuthList");
  const { data: orders, error } = await supabase
    .from("orders")
    .insert([{ ...newOrder, user_id: id }]);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", orders);
  }
};
//////////////////////////////////////////////
export const deleteOrder = async (id) => {
  const user_id = await AsyncStorage.getItem("AuthList");
  const { error } = await supabase
    .from("orders")
    .delete()
    .eq("id_order", id)
    .eq("user_id", user_id);

  if (error) {
    console.error("Error inserting data:", error);
  }
};
///////////////////////////////////////////////
export async function getOrderById(id_order) {
  let { data: order, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id_order", id_order);

  if (error) {
    console.error("Error:", error);
  }
  return order;
}
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
export async function getUsers() {
  const id = await AsyncStorage.getItem("AuthList");
  let { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", id);
  if (error) {
    console.error("Error:", error);
  }
  return user;
}
//////////////////////////////////////////////
export const insertUser = async (newCart) => {
  const id = await AsyncStorage.getItem("AuthList");
  const { data, error } = await supabase
    .from("users")
    .insert([{ ...newCart, user_id: id }]);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", data);
  }
};
//////////////////////////////////////////////
export const changeUserDetails = async (value, newValue) => {
  const id = await AsyncStorage.getItem("AuthList");

  const { data, error } = await supabase
    .from("users")
    .update({ [value]: newValue })
    .eq("user_id", id)
    .select();
};
//////////////////////////////////////////////
export const changeCountry = async (newCountry) => {
  const id = await AsyncStorage.getItem("AuthList");

  const { data, error } = await supabase
    .from("users")
    .update({ country: newCountry })
    .eq("user_id", id)
    .select();
};
//////////////////////////////////////////////
export const changeLanguage = async (newLaguage) => {
  const id = await AsyncStorage.getItem("AuthList");

  const { data, error } = await supabase
    .from("users")
    .update({ language: newLaguage })
    .eq("user_id", id)
    .select();
};
//////////////////////////////////////////////
export const changeNotification = async (notification) => {
  const id = await AsyncStorage.getItem("AuthList");

  const { data, error } = await supabase
    .from("users")
    .update({ notification: notification })
    .eq("user_id", id)
    .select();
};
//////////////////////////////////////////////
export const changeImage = async (imageProfile) => {
  const id = await AsyncStorage.getItem("AuthList");

  const { data, error } = await supabase
    .from("users")
    .update({ imageProfile: imageProfile })
    .eq("user_id", id)
    .select();
};
//////////////////////////////////////////////
// export async function checkUsers(idProd) {
//   const id = await AsyncStorage.getItem("AuthList");
//   try {
//     let { data: orders, error } = await supabase
//       .from("users")
//       .select("*")
//       .eq("user_id", id)
//       .eq("id", idProd)
//       .single();
//     if (error) {
//       if (error.code === "PGRST116") {
//         console.log("Element not found");
//         return null;
//       }
//       // throw error; // Other errors
//     }
//     console.log("Element found:", fav);
//     return orders;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// }
//////////////////////////////////////////////
export const deleteUsers = async (id) => {
  const user_id = await AsyncStorage.getItem("AuthList");
  const { error } = await supabase
    .from("users")
    .delete()
    .eq("id", id)
    .eq("user_id", user_id);

  if (error) {
    console.error("Error inserting data:", error);
  }
};
////////////////////////////////////////////////
///////////////////////////////////////////////
export async function getCards() {
  const id = await AsyncStorage.getItem("AuthList");
  let { data: user, error } = await supabase
    .from("creditcards")
    .select("*")
    .eq("user_id", id);
  if (error) {
    console.error("Error:", error);
  }
  return user;
}
//////////////////////////////////////////////
export const insertCards = async (newCart) => {
  const id = await AsyncStorage.getItem("AuthList");
  const { data, error } = await supabase
    .from("creditcards")
    .insert([{ ...newCart, user_id: id }]);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", data);
  }
};
//////////////////////////////////////////////
export const changeCardsDetails = async (id_hosen, value, newValue) => {
  const id = await AsyncStorage.getItem("AuthList");

  const { data, error } = await supabase
    .from("creditcards")
    .update({ [value]: newValue })
    .eq("user_id", id)
    .eq("id", id_hosen)
    .select();
};
export const deleteCards = async (id) => {
  const user_id = await AsyncStorage.getItem("AuthList");
  const { error } = await supabase
    .from("creditcards")
    .delete()
    .eq("id", id)
    .eq("user_id", user_id);

  if (error) {
    console.error("Error inserting data:", error);
  }
};
////////////////////////////////////////////////
