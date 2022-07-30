<template>
  <div class="min-h-screen max-w-xs mx-auto">
    <div class="min-h-screen bg-gray-100">
      <div class="fixed w-full max-w-xs z-20">
        <div class="flex max-w-xs mx-auto w-full max-w-xs justify-between items-center left-0 top-0 w-full h-10 bg-gradient-to-l from-burpleLight to-burple">
          <div class="px-4">
            <i class="el-icon-s-operation text-white"></i>
          </div>
          <span class="text-white cursor-pointer" @click="$router.push('/')">ngmusic</span>
          <div class="px-4">
            <i class="el-icon-search text-white cursor-pointer" @click="modalSearch = !modalSearch"></i>
          </div>
        </div>
      </div>
      <nuxt />
    </div>
    <el-dialog
      title="Search"
      :visible.sync="modalSearch"
      width="90%"
      center>
      <div class="bg-white relative h-40">
        <search @onSubmit="modalSearch = false" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    modalSearch: false
  })
}
</script>