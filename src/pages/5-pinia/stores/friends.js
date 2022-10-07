import { defineStore } from "pinia";

export const useFriendsStore = defineStore("friends", {
  state: () => ({
    friends: [
      {
        id: "manuel",
        name: "Manuela Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com"
      },
      {
        id: "julie",
        name: "Julie Jones",
        phone: "09876 543 221",
        email: "julie@localhost.com"
      }
    ]
  }),
  getters: {
    getFriends: (state) => state.friends,
    getFriendById: (state) => {
      return (id) => {
        return state.friends.find((item) => item.id === id);
      };
    }
  },
  actions: {
    addFriend(friend) {
      this.friends.push(friend);
    }
  }
});
