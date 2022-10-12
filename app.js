const app = Vue.createApp({
    data(){
        return {
            input: "",
            visibleClass: true,
            userColor: ""
        }
    },
    computed: {
        activeClasses(){
            return {user1: this.input === 'user1',
                    user2: this.input === 'user2',
                    visible: this.visibleClass === 'true',
                    hidden: !this.visibleClass
                }
        }
    },
    methods: {
        makeVisible(){
            this.visibleClass = !this.visibleClass;
        }
    }
})

app.mount("#assignment");