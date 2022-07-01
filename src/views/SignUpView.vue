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
        />
      </div>
      <div>
        <p class="text-gray-400 font-semibold">Email</p>
        <input
          class="w-full px-4 py-3 border-gray-200 border-2 rounded-md font-semibold"
          type="email"
          placeholder="example@gmail.com"
        />
      </div>
      <div>
        <p class="text-gray-400 font-semibold">Password</p>
        <input
          class="w-full px-4 py-3 border-gray-200 border-2 rounded-md font-semibold"
          type="password"
        />
      </div>
      <button class="px-10 py-3 bg-blue-700 text-white rounded-md mt-5">
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
export default {
  components: {
    BrandLogo,
  },
  setup() {
    function onSubmit() {
      const abc = 0;
    }

    return { onSubmit };
  },
};
</script>
