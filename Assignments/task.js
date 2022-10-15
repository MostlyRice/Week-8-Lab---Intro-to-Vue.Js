let app = Vue.createApp({
    data() {
        return {
            newTask: '',
            taskList: []
        }
    },
    methods: {
        addTask() {
            this.taskList.push(this.newTask)
            this.newTask = ''
        }
    }
})

app.mount('#app')