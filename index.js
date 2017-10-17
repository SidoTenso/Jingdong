const exp = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    cookie = require('cookie-parser')

const app = exp()

app.use(bodyParser.urlencoded({extended:true}))
app.use(cookie())


// 请求处理管线
function clearCookie(req,res,next){
    console.log(12)
    if(req.cookies.username){
        res.clearCookie('username')
    }
    console.log(req.cookies.username)
    next()
    
}
app.get('/login.html',clearCookie,(req,res,next)=>{
    next()
})
app.get('/register.html',clearCookie,(req,res,next)=>{
    next()
})

// 用户注册
app.post('/register',(req,res)=>{
    console.log(req.body)
    fs.exists('user',(exists)=>{
        if(exists){
            regFile()
        }else{
            fs.mkdir('user',(error)=>{
                if(error){
                    res.status(200).json({
                        code: 1,
                        msg: '创建文件夹失败'
                    })
                }else{
                    regFile()
                }
            })
        }
    })

    // 用户注册文件
    function regFile(){
        var fileName = 'user/'+req.body.username+'.txt';
        fs.exists(fileName,(exists)=>{
            if(exists){
                res.status(200).json({
                    code: 1,
                    msg: '该用户已注册'
                })
            }else{
                fs.writeFile(fileName,JSON.stringify(req.body),(error)=>{
                    if(error){
                        res.status(200).json({
                            code: 1,
                            msg: '注册失败'
                        })
                    }else{
                        res.status(200).json({
                            code: 2,
                            msg: '注册成功'
                        })
                    }
                })
            }
        })
    }
})

// 用户登录
app.post('/login',(req,res)=>{
    console.log(req.body)
    var fileName = 'user/'+req.body.username+'.txt';
    fs.exists(fileName,(exists)=>{
        if(exists){
            fs.readFile(fileName,(error,data)=>{
                if(error){
                    res.status(200).json({
                        code:0,
                        msg: '登录失败'
                    })
                }else{
                    if(JSON.parse(data.toString()).password==req.body.psw){
                        res.cookie('username',req.body.username)
                        res.status(200).json({
                            code:2,
                            msg: '登录成功'
                        })
                    }else{
                        res.status(200).json({
                            code:0,
                            msg: '密码错误'
                        })
                    }
                }
            })
        }else{
            res.status(200).json({
                code:1,
                msg: '用户未注册'
            })
        }
    })
})
// 用户获取数据
app.get('/getData',(req,res)=>{
    console.log(req.query.fileName)
    var fileName = 'pachong/'+req.query.fileName+'.json'
    fs.exists(fileName,(exists)=>{
        if(exists){
            
            fs.readFile(fileName,(error,data)=>{
                // console.log(data.toString())
                res.status(200).json({
                    code: 2,
                    msg: JSON.parse(data.toString())
                })
            })
        }else{
            // console.log(fileName)
            console.log("文件不存在"+fileName)
        }
    })
})






// 爬虫
app.post('/pachong',(req,res)=>{
    console.log(req.body)
    fs.writeFile('pachong/'+req.body.name+'.json',JSON.stringify(req.body.data),(error)=>{
        if(error){
            console.log('出错')
        }
    })
})
// 爬出的数据太大
app.post('/cookie',(req,res)=>{
    fs.writeFile('pachong/'+req.body.name+'.json',JSON.stringify(req.cookies.data),(error)=>{
        if(error){
            console.log('出错')
        }
    })
})

app.use(exp.static('wwwroot'))
app.listen(3000,()=>{
    console.log('服务器已开启在3000端口-------------')
})
