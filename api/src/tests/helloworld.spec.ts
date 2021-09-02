import supertest from "supertest";
import app from "../app";

const request = supertest(app);

it("Testing / endpoint", async () => {
  const res = await request.get('/')
  expect(res.status).toBe(200)
  expect(res.text).toBe("Hello World!");
  // ...
})

