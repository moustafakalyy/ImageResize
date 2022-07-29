import sharp from "sharp";

/**
* @description resize the image
* @param {string} inputFile
* @param {string} outputFile
* @param {string} inputHeight
* @param {string} inputWidth
* @returns {boolean} resize is done or not
*/
const resizeImage = async (
  inputFile: string,
  outputFile: string,
  inputHeight: number,
  inputWidth: number
):Promise<boolean> => {
  if (inputHeight > 0 && inputWidth > 0) {
    try {
      await sharp(inputFile)
        .resize({ height: inputHeight, width: inputWidth })
        .toFile(outputFile);
      return true;
    } catch (err) {
      console.log("Could not resize the image");
      return false;
    }
  } else {
    console.log("wrong image size");
    return false;
  }
};

export default resizeImage;
