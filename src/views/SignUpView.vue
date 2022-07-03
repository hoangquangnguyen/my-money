<template>
  <BrandLogo />
  <div class="container mx-auto px-5">
    <from @submit="onSubmit" class="flex flex-col gap-y-5">
      <div>
        <p class="text-gray-400 font-semibold">Full Name</p>
        <input
          class="w-full px-4 py-3 border-gray-200 border-2 rounded-md font-semibold"
          type="text"
          placeholder="Nguyen Van A"
          v-model="fullName"
        />
      </div>
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
        v-if="isPending == false"
        @click="onSubmit"
        class="px-10 py-3 bg-blue-700 text-white rounded-md mt-5"
      >
        Sign Up
      </button>
      <button
        v-if="isPending == true"
        class="px-10 py-3 bg-black text-white rounded-md mt-5"
      >
        Registing...
      </button>
      <p v-if="error == null && user != null" class="text-orange-500">
        Register success.
      </p>
    </from>
    <div class="text-center font-bold mt-3">
      <span>I'm already a member.</span>
      <router-link to="/signin" class="ml-2 text-blue-700">Sign In</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import BrandLogo from "@/components/BrandLogo.vue";
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";

export default {
  components: {
    BrandLogo,
  },
  setup() {
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    const { error, isPending, result, signup } = useSignUp();
    // async function testFirebase(db: Firestore) {
    //   const citiesCol = collection(db, "transactions");
    //   const citySnapshot = await getDocs(citiesCol);
    //   let data: any;
    //   let id = "";
    //   const cityList = citySnapshot.docs.map(
    //     (doc) => ((data = doc.data()), (id = doc.id))
    //   );
    //   return { ...data, id: id };
    // }
    // console.log(testFirebase(projectFirestore));
    // console.log(timeServer);

    async function onSubmit() {
      const res = await signup(email.value, password.value, fullName.value);
      console.log(error);
    }
    return { onSubmit, fullName, email, password, error, isPending };
  },
};
</script>
