import { app } from "../index";
import supertest from "supertest";
const request = supertest(app);
describe("Testing images routes spec", () => {
  it("test the images api endpoint by resizing image to 100x100", async () => {
    const response = await request.get(
      "/images?filename=fjord&width=204&height=100"
    );
    expect(response.status).toBe(200);
  });
});
