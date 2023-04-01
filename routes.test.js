const request = require("supertest")


const app = require("./app")
const {items,inventory} = require("./fakeDb")



describe("list routes test" , function(){
    test("getting all of the list items" , async function (){
        const res = await request(app).get("/items")
        expect(res.status).toBe(200)

    })


    test("get a specific item from a list", async function(){
        const item = items.find( i => i.name == "chips")
        const res = await request(app).get("/items/chips")
        expect(res.status).toEqual(200)
        expect(res.body).toEqual({item})
    })


    test("test the patch route" , async function(){
        const res = await request(app).get("/items/chips")
        const item = items.find(u => u.name === "chips")
        item.name = "new one"
        expect(res.status).toBe(200)
        expect(item.name).toEqual("new one")

    })

    test("test delete route" , async function(){
        const res = await request(app).post("/items")
        const item = items.find(u => u.name === "chips")
        expect(res.status).toBe(201)
    })


    test("test delete route" , async function(){
        const res = await request(app).delete("/items/chips")
        const item = items.find(u => u.name === "chips")
        items.splice(item , 1)
        expect(res.status).toBe(200)
        expect(res.body).toEqual({message:"deleted"})
    })
})

