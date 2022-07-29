import express from 'express';
import fs from 'fs';
import path from 'path';
import resizeImage from '../utilities/imageResize';


const images=express.Router();

/**
* @description load image if alreade processed before
* @param {string} path
* @returns {boolean} true if loaded before
*/
const loadImageIfCached=(path:string):boolean=>{
   
if(fs.existsSync(path)){
    return true;
}else{
    return false
}
};

/**
* @description check if file name exists in image folder
* @param {string} path
* @returns {boolean} true if file exists
*/
const checkFileNameExistsInImageFolder=(path:string): boolean=>{
   
    if(fs.existsSync(path)){
        return true;
    }else{
        return false
    }
    };


images.get('/',async (req:express.Request,res:express.Response)=>{
    console.log('called images end point');
    console.log(typeof req.query.height);


if((typeof req.query.filename==='string')&& (typeof req.query.height==='string') && (typeof req.query.width==='string')){
    const outputFile=path.resolve(__dirname, "../../../images/thumbs/"+(req.query.filename as string)+"-resized-"+req.query.width+"x"+req.query.height+".jpg");
    const inputFile=path.resolve(__dirname, `../../../images/${(req.query.filename as string)}.jpg`);
    const inputHeight=parseInt(req.query.height as string); 
    const inputWidth=parseInt(req.query.width as string);
    if(!checkFileNameExistsInImageFolder(inputFile)){
        res.status(400);
        res.send("File name does not exists in image folder");
    } else if(isNaN(Number(req.query.height))){
        res.status(400);
        res.send("Height passed is not a valid number");
    }else if(isNaN(Number(req.query.width))){
        res.status(400);
        res.send("Width passed is not a valid number");
    }else{
try{
    res.status(200);
       loadImageIfCached(inputFile);
        if(loadImageIfCached(outputFile)===false){
            console.log('Image is not resized before');
            await resizeImage(inputFile,outputFile,inputHeight,inputWidth);
        }
        
        res.sendFile(outputFile);
    }
    catch(err){
        res.status(400);
        res.send("error occured"+err);
    }
}
    }else{
        res.status(400);
        res.send("Missing querry parameter");
       
    }

});

export default images;