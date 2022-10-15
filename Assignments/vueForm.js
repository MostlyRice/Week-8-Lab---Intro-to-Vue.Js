let app = Vue.createApp({
    data() {
        return {
            name: '' // empty string
        }
    },
    methods: {
        clear() {
            this.name = ''
        }
    }

})

app.mount('#app')