import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://zzvxpsktjmvumocovlxe.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dnhwc2t0am12dW1vY292bHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MzcyNjQsImV4cCI6MjAzNzQxMzI2NH0._8rrNfHLKI0zDc6E-EIDKicvxiFZcOP1KCX7IJ_IuAE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

    export  const signUp = async(email,password) =>{
        const { error } = await supabase.auth.signInWithOtp({
            email: email,
            password: password,
        })
        if (error) throw error;
        return error
    }
    export const signIn = async ( email , password ,firstname , lastname) => {
        const { error } =await supabase.auth.signUp({
            email:email,
            password:password,
            options: {
            data: {
                firstname:firstname
                ,lastname:lastname
            },
            },
        })
        if (error) throw error;
        return  error
    }
    export const getCurrentUser = async() => {
        try {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) throw error;
            return user;
        } catch (error) {
            console.error("Error fetching user:", error);
            return null;
        }
    }