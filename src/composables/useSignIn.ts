import { ref } from "vue";
import { projectAuth } from "@/config/firebase";

const error = ref(null);
const isPending = ref(false);
const result = ref();

async function signin(email: string, password: string) {
  error.value = null;
  isPending.value = true;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    if (response == null) throw new Error("Cannot login with ...");
    return response;
  } catch (err: any) {
    error.value = err;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, result, signin };
}
