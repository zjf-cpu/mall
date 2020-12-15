console.log("haha");
axios({
    url:"http://localhost:8090/EasyUI/user/showall.action"
}).then(res=>{
    console.log("我是你爸爸")
    console.log(res)
})
