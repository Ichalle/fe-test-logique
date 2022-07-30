<template>
  <div class="absolute bottom-0 left-0 w-full p-8">
    <el-input
      placeholder="Artists / Album / Title"
      v-model="input"
      @keyup.enter.native="submitSearch()"
    />
    <div class="py-4">
      <el-button
        type="primary"
        class="w-full"
        :disabled="!input"
        @click="submitSearch()"
      >
        Search
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    input: '',
    limit: 4
  }),
  methods: {
    submitSearch () {
      const query = this.input.replaceAll(' ', '+')
      this.$router.push(`/search/${query}`)
      this.input = ''
      this.$emit('onSubmit')
    }
  }
}
</script>
