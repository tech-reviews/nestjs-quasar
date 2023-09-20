<template>
  <q-page class="column items-center justify-evenly">
    <div v-if="users" class="main-wrapper">
      <div class="main" v-for="user in users" :key="user.id" title="Click to see this user details">
        <div class="card" @click="$router.push(`/users/${user.id}`)">
          <div>
            <span class="pref">
              Name:
            </span>
            <span>{{ user.name }}</span>
          </div>
          <div>
            <span class="pref">
              Website:
            </span>
            <span>{{ user.website }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading all users...</div>
  </q-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { User } from '../models/user.model';

let users: User[] = [];

export default defineComponent({
  name: 'IndexPage',
  components: {},
  data() {
    return {
      users
    }
  },
  mounted() {
    fetch('http://localhost:3000/users')
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.users = data;
      })
  },
});
</script>