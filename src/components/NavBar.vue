

<template>
  <nav class="navbar navbar-expand-lg  navbar-light">
    <div class="container">
      <a class="navbar-brand text-white"  href="/">Al Quran Lite</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Router-link class="nav-link text-white active" aria-current="page" to="/quran"><div class="txt">Quran</div></Router-link>
          </li>
          <li class="nav-item">
          <Router-link class="nav-link text-white active" aria-current="page" to="/randomayat"><div class="txt">Random Ayat</div></Router-link>
        </li>
          <div class="">
            <ul class="nav nav-pills justify-content-center">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white text-capitalize text-start" data-bs-toggle="dropdown" href="#" role="button"
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
        </ul>
      </div>

    </div>
  </nav>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
export default {
  data() {
    return {
      nomor: "1",
      judul: "",
      arti: "",
      listSurah: ref([]),
      namaSurah: "",
      error: false,
      loading: true,
      juzs: ref([]),
    };
  },
  watch: {
    nomor() {
      this.getSurah();
    },
  },
  mounted() {
    this.getSurah();
    this.getlistSurah();
    this.getJuz()
  },
  methods: {
    getSurah() {
      axios
        .get(`https://api.quran.com/api/v4/chapters/${this.nomor}?language=id`)
        .then((response) => {
          this.judul = response.data.chapter;
          this.arti = this.judul.translated_name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getlistSurah() {
      axios
        .get(`https://api.quran.com/api/v4/chapters?language=id`)
        .then((response) => {
          this.listSurah = response.data.chapters;
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
  },
};
</script>

<style>
.navbar{
  background: #f6b192;
}
</style>