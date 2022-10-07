<script>
import FriendContact from "./components/FriendContact.vue";
import { useCounterStore } from "./stores/counter";
import { useFriendsStore } from "./stores/friends";

export default {
  setup() {
    const counterStore = useCounterStore();
    const friendsStore = useFriendsStore();

    return { counterStore, friendsStore };
  },
  components: {
    FriendContact,
  },
  methods: {
    addFriend() {
      this.friendsStore.addFriend({
        id: "Aleh",
        name: "Aleh Lorenz",
        phone: "9999 5678 991",
        email: "aleh@localhost.com",
      });
    },
  },
};
</script>

<template>
  <div>
    <section>Counter: {{ counterStore.doubleCount }}</section>
    <section>Name: {{ counterStore.name }}</section>
    <header>
      <h1>FriendList</h1>
    </header>
    <button @click="addFriend">Add friend</button>
    <section id="app">
      <ul>
        <friend-contact
          v-for="friend in friendsStore.getFriends"
          :key="friend.id"
          :friend="friend"
        />
      </ul>
    </section>
  </div>
</template>