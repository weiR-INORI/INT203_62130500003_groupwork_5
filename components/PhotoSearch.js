app.component('photo-search', {    
    props:{                
        search: false,
        filter: '',
        notfound: false
            
    },
    template:
    /*html*/
    `
    <button v-show="!search" v-on:click="toggleDone2()" class="h-8 w-8 hover:opacity-80"> <img src="images/baseline_search_black_18dp.png"></button>
        <div v-show="search">
          <input v-model="search2" @keyup.enter='addtext' class="mt-4 w-40 h-8 border-2 border-black" type="text" placeholder="Please enter text"/>
          <button v-on:click="toggleDone2()" class='ml-2 w-20 h-8 border-2 border-black'>Cancel</button>
        </div>
        `,


methods: {   
    toggleDone2() {
        this.$emit('toggle-done2', index)   
    },    
    addtext() {        
        this.$emit('add-text', index)
    }
},
computed: {
    filteredList(){
        this.$emit('filtered-list')
    }

}
})