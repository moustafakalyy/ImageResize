import resizeImage from "../routes/utilities/imageResize";
import path from "path";
describe("Testing images resize spec", () => {
  it("test resizing image to be 100x100", async () => {
    const inputFile = path.resolve(__dirname, `../../images/fjord.jpg`);
    const outputFile = path.resolve(
      __dirname,
      "../../images/thumbs/" + "fjord-resized-100x100"
    );
    const response = await resizeImage(inputFile, outputFile, 100, 100);
    expect(response).toBe(true);
  });
});
