import Mock from "mockjs"
//user用户
Mock.mock("http://localhost:8080/user","post",(req)=>{
    const{page,pageSize,keyword}=JSON.parse(req.body)
    console.log("接口接收的参数：",page,pageSize,keyword)
    return{
        code:200,
        success:true,
        message:"请求成功",
        data:Mock.mock({
            [`list|${pageSize}`]:[{
                'id|+1':202101291,//员工号
                'date':Mock.Random.date(),//入驻日期,
                'name|1': ["小明","小红","海绵","小狗","小猫"],//员工名称
                'role|1': ["游客","普通用户","VIP",],
                'password|+1':202101291,//密码
            }],
            "total":47
        })

    }
})
//用户角色限制
Mock.mock("http://localhost:8080/userrole","post",(req)=>{
    const{page,pageSize,keyword}=JSON.parse(req.body)
    console.log("接口接收的参数：",page,pageSize,keyword)
    return{
        code:200,
        success:true,
        message:"请求成功",
        data:Mock.mock({
            [`list|${pageSize}`]:[{
                'id|+1':202101291,//员工号
                'date':Mock.Random.date(),//入驻日期,
                'name|1': ["小明","小红","海绵","小狗","小猫"],//员工名称
                'role|1': ["游客","普通用户","VIP",],
               
            }],
            "total":47
        })

    }
})
//员工

Mock.mock("http://localhost:8080/employee","post",(req)=>{
    const{page,pageSize,keyword}=JSON.parse(req.body)
    console.log("接口接收的参数：",page,pageSize,keyword)
    return{
        code:200,
        success:true,
        message:"请求成功",
        data:Mock.mock({
            [`list|${pageSize}`]:[{
                'id|+1':202101291,//员工号
                'date':Mock.Random.date(),//入驻日期,
                'name|1': ["海绵","大轩","小雨","小狗","小鹏"],//员工名称
                'role|1': ["老板","管理员","普通用户",],
                'password|+1':202101291,//密码
            }],
            "total":47
        })

    }
})
//员工角色
Mock.mock("http://localhost:8080/employeerole","post",(req)=>{
    const{page,pageSize,keyword}=JSON.parse(req.body)
    console.log("接口接收的参数：",page,pageSize,keyword)
    return{
        code:200,
        success:true,
        message:"请求成功",
        data:Mock.mock({
            [`list|${pageSize}`]:[{
                'id|+1':202101291,//员工号
                'date':Mock.Random.date(),//入驻日期,
                'name|1': ["海绵","大轩","小雨","小狗","小鹏"],//员工名称
                'role|1': ["老板","管理员","普通员工",],
               
            }],
            "total":47
        })

    }
})
//权限
Mock.mock("http://localhost:8080/employeelimit","post",(req)=>{
    const{page,pageSize,keyword}=JSON.parse(req.body)
    console.log("接口接收的参数：",page,pageSize,keyword)
    return{
        code:200,
        success:true,
        message:"请求成功",
        data:Mock.mock({
            [`list|${pageSize}`]:[{
                'date':Mock.Random.date(),//更改日期   
                'role|1': ["老板","管理员","普通用户",],
            }],
            "total":47
        })

    }
})


