import { connect, connection, set } from 'mongoose'

set('strictQuery', false)
const conn = {
    isConnected: false
}

export async function dbConnect(){
    if (conn.isConnected) return
    const db = await connect(process.env.MONGODB_URL, {
        "user": process.env.MONGODB_USER,
        "pass": process.env.MONGODB_PASSWORD,
    })
    
    conn.isConnected = db.connections[0].readyState
    console.log(`Database name: ${db.connection.db.databaseName}`)
}

// Mostramos un mensaje si la conexión es exitosa o no.
connection.on("connected", () => {
    console.log("Mongodb is connected")
})

connection.on("error", (error) => {
    console.log(error)
})