let app = Vue.createApp({
    data() {
        return {
            message: 'Hello World',
            maxExclamationPoints: 10,
            exclamationPoints: 0,
            thisClass: 'Web Programming'
        }
    },
    methods: {
        addExclamation() {
            if (this.exclamationPoints < this.maxExclamationPoints) {
                this.exclamationPoints++ // this.exclamationPoints = this.exclamationPoints + 1
                // this.message = this.message + '!'
            } else {
                alert('No more exclamation points allowed')
            }
        },

        clearExclamation() {
            // this.message = 'hello'
            this.exclamationPoints = 0
        }

    },
    computed: {
        messageWithExclamationPoints() {
            let messageWithPoints = this.message
            for (let x = 0; x < this.exclamationPoints; x++) {
                messageWithPoints = messageWithPoints + '!'
            }
            return messageWithPoints
        }
    }
})

app.mount('#app')