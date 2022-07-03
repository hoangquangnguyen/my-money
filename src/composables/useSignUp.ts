import { ref } from "vue";
import { projectAuth } from "@/config/firebase";
const error = ref(null);
const isPending = ref(false);
const result = ref();

async function signup(email: string, password: string, fullname: string) {
  error.value = null;
  isPending.value = true;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (response == null) throw new Error("Cannot create new user.");
    await response.user?.updateProfile({ displayName: fullname });
    return response;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, result, signup };
}
