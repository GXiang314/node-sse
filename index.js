import express from "express"
import compression from "compression"
import cors from "cors"

const app = express()
app.use(compression())
app.use(express.json())
app.use(cors())

app.get(
    "/api/sse",
    (
        /**
         * @param {import("express").Request} req
         */
        req,
        /**
         * @param {import("express").Response} res
         */
        res
    ) => {
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        })
        const interval = setInterval(() => {
            const date = new Date().toLocaleString("zh-tw")
            res.write(`data: ${date} \n\n`)
            res.flush()
            console.log(`send data: ${date}`)
        }, 1000)
        req.on("close", () => {
            clearInterval(interval)
            console.log("Client disconnected")
        })
    }
)

app.post(
    "/api/sse",
    (
        /**
         * @param {import("express").Request} req
         */
        req,
        /**
         * @param {import("express").Response} res
         */
        res
    ) => {
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        })
        const { name } = req.body
        if (!name) {
            res.status(400).send("Name is required")
            return
        }
        const interval = setInterval(() => {
            const date = new Date().toLocaleString("zh-tw")
            res.write(`data: name: ${name}; ${date} \n\n`)
            res.flush()
            console.log(`send data: name: ${name}; ${date}`)
        }, 1000)
        res.on("close", () => {
            clearInterval(interval)
            console.log("Server disconnected")
        })
        req.on("close", () => {
            // clearInterval(interval) // don't clear, because the client using fetch, so the connection will be closed by server
            console.log("Client disconnected")
        })
    }
)

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
