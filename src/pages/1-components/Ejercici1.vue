<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenzo",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<template>
  <div>
    <header>
      <h1>FriendList</h1>
    </header>
    <section id="app">
      <ul>
        <li v-for="friend in friends" :key="friend.id">
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails()">
            {{ detailsAreVisible ? "Hide" : "Show" }} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>
