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
        @click="onSubmit"
        class="px-10 py-3 bg-blue-700 text-white rounded-md mt-5"
      >
        Sign Up
      </button>
    </from>
    <div class="text-center font-bold mt-3">
      <span>I'm already a member.</span>
      <router-link to="/signin" class="ml-2 text-blue-700">Sign In</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import BrandLogo from "@/components/BrandLogo.vue";
import { projectFirestore, timeServer } from "../config/firebase";
import { collection, Firestore, getDocs } from "firebase/firestore";
import { ref } from "vue";

export default {
  components: {
    BrandLogo,
  },
  setup() {
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    async function testFirebase(db: Firestore) {
      const citiesCol = collection(db, "transactions");
      const citySnapshot = await getDocs(citiesCol);
      let data: any;
      let id = "";
      const cityList = citySnapshot.docs.map(
        (doc) => ((data = doc.data()), (id = doc.id))
      );
      return { ...data, id: id };
    }
    // console.log(testFirebase(projectFirestore));
    // console.log(timeServer);

    function onSubmit() {
      console.log(fullName, email, password);
    }

    return { onSubmit, fullName, email, password };
  },
};
</script>
