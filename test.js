const fs = require('fs')

//读数据库
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)
//JSON.parse可以把字符串变成对应的数组对象或其他东西
console.log(typeof usersString)
console.log(usersString)
console.log(usersArray instanceof Array)
console.log(usersArray)

//写数据库
const user3 = {"id":3, "name":"Fang", "password":"yyy", "age": 21}
usersArray.push(user3)
const string = JSON.stringify(usersArray)
//JSON.stringify可以把对象变成字符串
fs.writeFileSync('./db/users.json', string)