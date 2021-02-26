app.component('photo-item', {    
    props:{        
            filteredList:{
                type: Array,                
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
        <div v-show="task.done"><img class='h-8 w-8' src="./images/baseline_favorite_black_18dp.png"></div>                            
        <div v-on:dblclick="toggleDone3(index)" v-on:click="toggleDone(index)" class="hover:opacity-80"> <img v-bind:src="task.src"></div>
           
        
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



