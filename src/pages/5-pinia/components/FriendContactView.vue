<script>
import { useFriendsStore } from "../stores/friends";

export default {
  setup() {
    const friendsStore = useFriendsStore();

    return { friendsStore };
  },
  computed: {
    friend() {
      return this.friendsStore.getFriendById(this.$route.params.name);
    },
  },
};
</script>

<template>
  <h2>{{ friend.name }}</h2>
  <ul>
    <li>Phone: {{ friend.phone }}</li>
    <li>Email: {{ friend.email }}</li>
  </ul>
</template>
