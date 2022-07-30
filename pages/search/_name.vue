<template>
  <div class="p-4">
    <p class="text-xs my-8">
      Search result: <span class="text-burple font-semibold text-sm">{{ result }}</span>
    </p>
    <p v-if="lists && lists.length === 0">Not found</p>
    <el-card class="box-card mb-8 cursor-pointer" v-for="(item, index) in lists" :key="index">
      <div class="item w-full flex">
        <el-image
          :src="item.artworkUrl100"
          class="min-w-20 w-20 h-20 rounded-lg"
          fit="cover"
        />
        <div class="pl-4">
          <p class="text-xs">{{ item.artistName }}</p>
          <p class="text-xs font-bold">{{ item.trackName }}</p>
          <div class="flex justify-between w-full mt-4">
            <el-tag type="success" size="mini" dark>
              {{ item.primaryGenreName }}
            </el-tag>
            <p class="text-xs text-orange-400 font-semibold">{{ item.trackPrice }}</p>
          </div>
        </div>
      </div>
    </el-card>
    <div class="flex justify-center items-center mb-8">
      <el-button round v-if="isLoadmore" @click="handleLoadmore()">
        Load More
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'result',
  layout: 'result',
  data: () => ({
    result: '',
    lists: [],
    limit: 4,
    isLoadmore: true
  }),
  mounted() {
    this.getResult()
  },
  methods: {
    getResult () {
      if (this.$route.params && this.$route.params.name) {
        this.result = this.$route.params.name.replaceAll('+', ' ')
      }
      this.fetchLists()
    },
    async fetchLists () {
      if (!this.$route.params) { return }
      const payload = {
        name: this.$route.params.name,
        limit: this.limit
      }
       await this.$store.dispatch('public/getSearch', payload)
        .then((res) => {
          this.lists = res.results || []
          this.isLoadmore = res.resultCount === this.limit
        })
        .catch((err) => {
        })
    },
    handleLoadmore () {
      this.limit += 4
      this.fetchLists()
    }
  }
}
</script>
