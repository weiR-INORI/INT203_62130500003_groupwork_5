    const app = Vue.createApp({
        data() {
            return {
            
            photogallery: [{ src:'./images/1.jpg', dis:'Extra terrestrial Biological Entities', done: false, zoom: false},
                            {src:'./images/2.jpg', dis:'Greatest Hits 2011-2017 "Alter Ego"', done: false, zoom: false}],                                                    
            search: false,
            filter: '',
            notfound: false
            
            
            
         }
        
        },
        methods: {
            toggleDone(index){
                this.photogallery[index].done = !this.photogallery[index].done
            },
            toggleDone2(){
                this.search = !this.search
            },                       
            toggleDone3(index){
                this.photogallery[index].zoom = !this.photogallery[index].zoom
            },
            addtext(){
                this.filter = this.search2
                this.notfound = false
            }
        },
        computed: {
            countPhoto(){
                return this.photogallery.length
            },
            filteredList(){
                if (this.filter == '') {
                    return this.photogallery
                } else {
                     ft = this.photogallery.filter ( d => d.dis.toLowerCase().includes(this.filter.toLowerCase()));
                    if (ft.length == 0) {
                        this.notfound = true;
                    } else {
                        return ft;
                    }
                }
            }

        }

    })
    