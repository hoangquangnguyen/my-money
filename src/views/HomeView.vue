<template>
  <div class="home">
    <p class="font-bold text-3xl text-purple-700">Test Tailwin</p>
    <div v-if="user != null">{{ user.displayName }}</div>
  </div>
</template>

<script lang="ts">
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
