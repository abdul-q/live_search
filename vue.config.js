module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    // proxy: "http://localhost:90/data/",
    // proxy: "http://127.0.0.1:90data.json",
    // proxy: "http://192.168.0.161:90/data/data.json",
    // proxy: "http://192.168.0.173:90/data/data.json",
    // proxy: "http://backend.test/",
    port: 90, proxy: "http://localhost/data"
  }
}
