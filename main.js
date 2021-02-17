    const EGOIST = {
        data() {
            return {
            search2:'',
            photogallery: [{ src:'./images/1.jpg', dis:'Extra terrestrial Biological Entities', done: false},
                            {src:'./images/2.jpg', dis:'Greatest Hits 2011-2017 "Alter Ego"', done: false}],
            search: [{ src:'./images/baseline_search_black_18dp.png', done: false}]                                                                                                                                
        }
    },
        methods: {
            toggleDone(index){
                this.photogallery[index].done = !this.photogallery[index].done
            },
            toggleDone2(index){
                this.search[index].done = !this.search[index].done
            }
        },
        computed: {
            countPhoto(){
                return this.photogallery.length
            },
            filteredList(){
                return this.photogallery.filter(post =>{
                    return photogallery.src.includes(this.search2.toLowerCase())
                  })
            }

        }

    }
    Vue.createApp(EGOIST).mount('#EGOIST')