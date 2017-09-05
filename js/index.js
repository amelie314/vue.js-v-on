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
//移除
    remove: function(id,name){
      this.fruits.splice(id,1);
      this.status="第"+(id+1)+"項"+name+"被移除了";
    },
//新增
    add: function(data){
      this.fruits.push(data) 
      this.status="你新增了"+data+".";
     }
    },
//計算屬性
    computed:{
    all: function(){
      var total={pen: 0,pineapple: 0,apple: 0};
      for(var i=0;i<alldata.length;i+=1){
        total[this.fruits[i]]+=1;
      }
      return total;
    }
  }
});