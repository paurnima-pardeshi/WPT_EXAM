const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database : "webexam"
};

const record = {
    sender: "paurnima",
    reciever: "pardeshi",
    msg:"cdac mumbai..!"
}

const addRecord = async (record) => {
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    const sql = `insert into message (sender,reciever,msg) values(?,?,?)`;
    await Connection.queryAsync(sql, [record.sender, record.reciever, record.msg]);
    await Connection.endAsync();
    console.log("record added");
}
//addRecord(record)

const getRecord = async () => {
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    const sql = `select * from message`;
    const list = await Connection.queryAsync(sql,[])
    await Connection.queryAsync(sql, [record.sender, record.reciever, record.msg]);
    await Connection.endAsync();
    console.log("record list");
    console.log(list);
    return list;
}
getRecord()
module.exports = { addRecord, getRecord };