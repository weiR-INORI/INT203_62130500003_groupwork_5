EGOIST.component('photo-item', {    
    props:{        
        filteredList:{
                type:Array                          
            },
            
            search: false,
            filter: '',
            notfound: false                
    },
    template:
    /*html*/
    `
    <div class="flex space-x-8">
      <div v-if="notfound">Not found</div>
      
      <div v-for="(task,index) in filteredList" v-else>                                   
        {{task.dis}}           
        <button v-on:click="toggleDone3(index)" class='w-12 h-8 py-0.5 mb-2 border-2 border-black rounded-lg text-center'>zoom</button>
        <div v-show="task.done"><img class='h-8 w-8 mb-2' src="./images/baseline_favorite_black_18dp.png"></div>                                    
        <div v-on:click="toggleDone(index)" class="hover:opacity-80"><img v-bind:src="task.src"></div>
      </div>                    
    </div>
`,

methods: {   
    toggleDone(index){
        this.$emit('toggle-done', index)   
    },    
    toggleDone3(index){
        this.$emit('toggle-done3', index)
    }
},
computed: {
    countPhoto(){
        this.$emit('count-photo')
    }
}


})



