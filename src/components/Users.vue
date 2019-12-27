<template>
  <div class="my-4 bg-white p-4 rounded-lg shadow-xl">
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="w-10 rounded-full bg-black h-10 mr-2 "></div>

        <div class="user">{{ user.name }}</div>
      </div>
      <div><img src="../images/user.png" alt="" class="w-8" /></div>
    </div>
    <div class=" ml-16  m-auto text-gray-600">
      <div class=""><i class="fa fa-user w-4"></i> {{ user.username }}</div>
      <div><i class="fa fa-envelope-open w-5"></i>{{ user.email }}</div>

      <div class="user font-bold">+ 2 more</div>

      <div>
        <i class="fa fa-map-marker w-4" aria-hidden="true"></i
        >{{ user.company.name }}
      </div>
      <div class="flex justify-start md:w-1/2">
        <div class="bg-gray-300 p-1 rounded-lg m-1">
          {{ user.address.street }}
        </div>
        <div class="bg-gray-300 p-1 rounded-lg m-1">
          {{ user.address.suite }}
        </div>
        <div class="bg-gray-300 p-1 rounded-lg m-1">
          {{ user.address.city }}
        </div>
        <div class="bg-gray-300 p-1 rounded-lg m-1">
          {{ user.address.zipcode }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    search() {
      return this.$store.getters.search;
    }
  },
  props: ["user"],
  created() {}
};
</script>

<style>
.user {
  color: #4c57b8;
}
</style>
