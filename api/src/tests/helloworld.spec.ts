import supertest from "supertest";
import app from "../app";

const request = supertest(app);

it("Testing / endpoint", async () => {
  const res = await request.get('/')
  expect(res.status).toBe(200)
  expect(res.text).toBe("Hello World!");
  // ...
})
it("Testing /user endpoint", async () => {
  const res = await request.get('/user')
  expect(res.status).toBe(200)
  expect(res.body.id).toBe(1);
  expect(res.body.username).toBe("YogiFresh");
  // ...
})

