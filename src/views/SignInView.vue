<template>
  <BrandLogo />
  <div class="container mx-auto px-5">
    <from @submit="onSubmit" class="flex flex-col gap-y-5">
      <div>
        <p class="text-gray-400 font-semibold">Email</p>
        <input
          class="w-full px-4 py-3 border-gray-200 border-2 rounded-md font-semibold"
          type="email"
          placeholder="example@gmail.com"
          v-model="email"
        />
      </div>
      <div>
        <p class="text-gray-400 font-semibold">Password</p>
        <input
          class="w-full px-4 py-3 border-gray-200 border-2 rounded-md font-semibold"
          type="password"
          v-model="password"
        />
      </div>
      <button
        @click="onSubmit"
        v-if="isPending == false"
        class="px-10 py-3 bg-blue-700 text-white rounded-md mt-5"
      >
        Sign In
      </button>
      <button v-else class="px-10 py-3 bg-black text-white rounded-md mt-5">
        Loading...
      </button>
    </from>
    <div v-if="user != null">{{ user.displayName }}</div>
    <div class="text-center font-bold mt-3">
      <span>I'm a new user.</span>
      <router-link to="/signup" class="ml-2 text-blue-700">Sign Up</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import BrandLogo from "@/components/BrandLogo.vue";
import { useSignIn } from "@/composables/useSignIn";
import { projectAuth } from "@/config/firebase";
import { ref } from "vue";
export default {
  components: {
    BrandLogo,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const user = ref();
    user.value = projectAuth.currentUser;

    const { error, isPending, result, signin } = useSignIn();
    async function onSubmit() {
      const res = await signin(email.value, password.value);
      user.value = res?.user;
      console.log(error);
    }

    return { onSubmit, email, password, user, isPending };
  },
};
</script>
