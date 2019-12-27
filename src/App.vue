<template>
  <div
    id="q-app "
    class="flex bg-gray-200 p-6 md:flex-row-reverse flex-no-wrap flex-col"
  >
    <div class="w-full md:w-1/4 ">
      <app-filters></app-filters>
    </div>
    <div class="w-full md:w-3/4 user-container md:p-10 md:mx-2 mt-4 md:mt-0 ">
      <div class="text-gray-600 p-4">Uploaded CV's</div>
      <app-users
        v-for="(user, index) in filteredList"
        :key="index"
        :user="user"
      >
      </app-users>
    </div>
  </div>
</template>

<script>
import Filters from "./components/Filters";
import Users from "./components/Users";
export default {
  components: {
    appUsers: Users,
    appFilters: Filters
  },
  name: "App",

  created() {
    this.$store.dispatch("getUsers");
  },

  computed: {
    filteredList() {
      if (this.$store.getters.getUsers !== "") {
        console.log("notempty");
        return this.$store.getters.getUsers.filter(user => {
          return user.name
            .toLowerCase()
            .includes(this.$store.getters.search.toLowerCase());
        });
      } else {
        return this.$store.getters.getUsers;
      }
    },

    getUsers() {
      return this.$store.getters.getUsers;
    }
  }
};
</script>
<style>
.user-container {
  background: #fdfdfd;
}
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
