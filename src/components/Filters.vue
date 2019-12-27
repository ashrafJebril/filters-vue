<template>
  <div class="bg-white height">
    <div class="header p-2 rounded-t text-white">Filters</div>
    <div class="p-4">
      <div class="mb-4 flex justify-between md:flex-col">
        <div class="flex my-1 cursor-pointer">
          <div class="flex  justify-between md:w-full">
            <div class="flex items-center">
              <i class="fa fa-sort color w-4" aria-hidden="true"></i>
              <div class="mx-2 text-gray-600" @click="sort">Sort by</div>
            </div>
            <div><i class="fa fa-angle-down"></i></div>
          </div>
        </div>
        <div class="flex my-1 cursor-pointer">
          <div class="flex  justify-between md:w-full">
            <div class="flex items-center">
              <i class="fa fa-copy color w-4" aria-hidden="true"></i>
              <div class="mx-2 text-gray-600">Match Cv's</div>
            </div>
            <div><i class="fa fa-angle-down"></i></div>
          </div>
        </div>

        <div class="flex my-1 cursor-pointer">
          <div class="flex  justify-between md:w-full">
            <div class="flex items-center">
              <i class="fa fa-handshake-o color w-4" aria-hidden="true"></i>
              <div class="mx-2 text-gray-600">Experiances</div>
            </div>
            <div><i class="fa fa-angle-down"></i></div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center md:mb-32 md:mt-8">
        <q-input outlined label="Search by name" v-model="search" class="mb-4">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-input outlined label="Search by job title" class="mb-4">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-input outlined label="Search by major" class="mb-4">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-input outlined label="Search by career level" class="mb-4">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sort() {
      this.$store.dispatch("sort");
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("updateSearch", value);
      }
    }
  }
};
</script>

<style>
.q-field {
  width: 100%;
}
.q-field__label {
  font-size: 12px;
}
.header {
  background: #4c57b8;
}

.color {
  color: #4c57b8;
}
.q-field__control {
  border-radius: 40px !important;
  height: 38px;
}
.q-field__native {
  color: rgb(189, 188, 188);
}
</style>
