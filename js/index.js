var alldata=[
  "pen","pineapple","apple","pen"
];
var vm=new Vue({
  el:"#app",
  data:{
    fruits: alldata,
    status: ""
  },
  methods:{
    remove: function(id,name){
      this.fruits.splice(id,1);
      this.status="第"+(id+1)+"項"+name+"被移除了";
    },
    add: function(data){
      this.fruits.push(data)
      
    }
  }
});