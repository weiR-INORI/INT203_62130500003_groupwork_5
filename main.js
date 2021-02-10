    const EGOIST = {
        data() {
            return {
            photogallery: [{ src:'./images/1.jpg', dis:'Extra terrestrial Biological Entities', done: false},
                            {src:'./images/2.jpg', dis:'Greatest Hits 2011-2017 "Alter Ego"', done: false}]                                                                                                                                
        }
    },
        methods: {
            toggleDone(index){
                this.photogallery[index].done = !this.photogallery[index].done
            }
        },
        computed: {
            countPhoto(){
                return this.photogallery.length
            }
        }

    }
    Vue.createApp(EGOIST).mount('#EGOIST')