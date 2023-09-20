<template>
  <q-page class="column items-center justify-evenly" style="background-color: beige;">
    <div v-if="user" >
      <div class="user">
        <h4>{{ user.name }}</h4>
        <div class="user-block">
          <span class="pref">Id:</span>
          <span class="value">{{ user.id }}</span>
        </div>
        <div class="user-block">
          <span class="pref">Username: </span>
          <span class="value">{{ user.username }}</span>
        </div>
        <div class="user-block">
          <span class="pref">Email: </span>
          <span class="value">{{ user.email }}</span>
        </div>
        <div class="user-block">
          <span class="pref">Phone: </span>
          <span class="value">{{ user.phone }}</span>
        </div>
        <div class="user-block">
          <span class="pref">Website: </span>
          <span class="value">{{ user.website }}</span>
        </div>
        <div class="user-block">
          <div><span class="pref">Address: </span></div>
          <div class="details-box ">
            <div><span class="pref">Street: </span><span>{{ user.address.street }}</span></div>
            <div><span class="pref">Suite: </span><span>{{ user.address.suite }}</span></div>
            <div><span class="pref">City</span><span>{{ user.address.city }}</span></div>
            <div><span class="pref">ZIP: </span><span>{{ user.address.zipcode }}</span></div>
            <div class="user-block">
              <div><span class="pref">Geo location:</span></div>
              <div class="details-box ">
                <div><span class="pref">Longitute: </span><span>{{ user.address.geo.lng }}</span></div>
                <div><span class="pref">Latitute: </span><span>{{ user.address.geo.lat }}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-block">
          <span class="pref">Company: </span>
          <div class="details-box ">
            <div><span class="pref">Name: </span><span>{{ user.company.name }}</span></div>
            <div><span class="pref">Catch Phrase: </span><span>{{ user.company.catchPhrase }}</span></div>
            <div><span class="pref">BS: </span><span>{{ user.company.bs }}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading user ...</div>
    <div class="back-btn">
      <q-btn color="primary" icon="home" label="Back" @click="$router.push('/')"/>
    </div>
  </q-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { User } from '../models/user.model';

let user: User;

export default defineComponent({
  name: 'IndexPage',
  components: {},
  data() {
    return {
      user,
      id: this.$route.params.id
    }
  },
  mounted() {
    fetch(`http://localhost:3000/users/${this.id}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        if (data.status === 404) {
          this.$router.push('/notFound')
        }
        this.user = data[0];
      })
  },

});
</script>