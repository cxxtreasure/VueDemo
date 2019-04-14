var app=new Vue({
    el:"#app",
    data:{
        name:"名字",
        message:"dfgdfhgg",
        arrys:[
            {text:"学习 JavaScript"},
            {text:"学习 Vue"},
            {text:"整个牛项目"}
        ]
    },
    created: function () {
        // `this` 指向 vm 实例
        //console.log('name is: ' + this.name)
        this.message="sdgdffhfd111";
        this.arrys.push({ text:"dxgdfg"});
    },
    computed:{
        reversedComputed:function () {
            return this.message.split('').reverse().join('');
        }
    },
    methods:{
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        },
        reversedMethod:function () {
            return this.message.split('').reverse().join('');
        }
    }
});
var app1=new Vue({
    el:"#app1",
    data:{
        seen_if:false,
        seen_show:false
    }
});