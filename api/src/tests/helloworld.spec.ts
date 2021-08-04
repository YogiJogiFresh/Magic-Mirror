import supertest from "supertest";
import app from "../app";

const request = supertest(app);
// This test fails because 1 !== 2
it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})
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

