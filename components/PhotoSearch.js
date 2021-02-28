EGOIST.component('photo-search', {    
    props:{                        
        search: false,        
        notfound: false
            
    },
    template:
    /*html*/
    `
        <button v-show="!search" v-on:click="toggleDone2" class="h-8 w-8 hover:opacity-80 rounded-lg"> <img src="images/baseline_search_black_18dp.png"></button>
        <div v-show="search">
        <input v-model="search2" @input='addtext' class="mt-4 w-40 h-8 border-2 border-black" type="text" placeholder="Please enter text"/> 
        <button  v-on:click="toggleDone2()" class='ml-2 w-20 h-8 border-2 border-black rounded-lg'>Cancel</button>
        </div>
    `,
    data() {
        return {
        search2: ''
        }
    },

methods: {   
    toggleDone2(index) {
    this.$emit('toggle-done2', index)
    },    
    addtext() {      
    this.$emit('add-text', this.search2)
    }
}

})