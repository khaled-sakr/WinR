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

export const login = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const id = data && data["session"]["user"]["id"];
    // console.log(data);
    // console.log(data.user);
    // console.log(data["session"]["user"]);
    // console.log("id:", id);
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

export const signUp = async (email, password, firstname, lastname) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          firstname: firstname,
          lastname: lastname,
        },
      },
    });
    const id = data && data["session"]["user"]["id"];
    // console.log("id:", id);
    if (error) {
      console.error("Sign-Up error:", error.message);
      return { success: false, error };
    }
    await AsyncStorage.setItem("AuthList", id || "");
    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: err };
  }
};
/////////////////////////////////////////////////
export const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  await AsyncStorage.setItem("AuthList", "");
  if (error) throw error;
  return error;
};
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
export async function getFavourite() {
  const id = await AsyncStorage.getItem("AuthList");
  let { data: favourites, error } = await supabase
    .from("favourite")
    .select("*")
    .eq("user_id", id);
  if (error) {
    console.error("Error:", error);
  }
  return favourites;
}
//////////////////////////////////////////////
export async function checkFav(idProd) {
  const id = await AsyncStorage.getItem("AuthList");
  try {
    let { data: fav, error } = await supabase
      .from("favourite")
      .select("*")
      .eq("user_id", id)
      .eq("id", idProd)
      .single();
    if (error) {
      if (error.code === "PGRST116") {
        console.log("Element not found");
        return null;
      }
      throw error; // Other errors
    }
    console.log("Element found:", fav);
    return fav;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
// export const insertFav = async ({ newFav }) => {
//   const { id } = await getUserId();
//   const { data, error } = await supabase.from("favourite");
//   // .insert([{ ...newFav, user_id: id }]);

//   if (error) {
//     console.error("Error inserting data:", error);
//   } else {
//     console.log("Data inserted successfully:", data);
//   }
// };
export async function getCart() {
  const id = await AsyncStorage.getItem("AuthList");
  let { data: carts, error } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", id);
  if (error) {
    console.error("Error:", error);
  }
  return carts;
}
