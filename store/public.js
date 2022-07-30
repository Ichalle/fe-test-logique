export const state = () => ({
})

export const mutations = {
}

export const actions = {
  getSearch ({ commit }, params) {
    const {name, limit} = params
    return new Promise((resolve, reject) => {
      this.$axios.get(`https://itunes.apple.com/search?term=${name}&limit=${limit}`)
        .then(function (response) {
          const res = response.data
          resolve(res)
        })
        .catch(function (error) {
          reject(error.response)
        })
    })
  }
}
