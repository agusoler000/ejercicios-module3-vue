<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  props: {
    friend: Object,
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <router-link :to="'ejercici9/contacts/' + friend.id"
      ><button>Go to contact</button></router-link
    >
  </li>
</template>
