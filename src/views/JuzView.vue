<template>
  <div class="container">
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-black text-capitalize" data-bs-toggle="dropdown" href="#" role="button"
           aria-expanded="false">Juz</a>
        <ul class="dropdown-menu">
          <li v-for="juz in juzs" :key="juz.id">
            <router-link :to="{ name: 'juzs', params: { id: juz.id } }" class="dropdown-item">{{ juz.juz_number }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
export default {
  data()
  {
    return {
      error: false,
      loading: true,
      juzs: ref([]),
    }
  },
  mounted()
  {
    this.getJuz()
  },
  methods: {
    getJuz()
    {
      axios.get('https://api.quran.com/api/v4/juzs')
        .then(response =>
        {
          this.juzs = response.data.juzs
        })
        .catch(error =>
        {
          console.log(error)
          this.error = true
        })
        .finally(() => this.loading = false)
    },

  }
}
</script>
