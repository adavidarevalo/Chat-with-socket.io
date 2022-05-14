// const S3 = require('aws-sdk/clients/s3')
const AWS = require('aws-sdk');
const shortid = require('shortid');

const accessKey = process.env.AWS_ACCESS_KEY_ID
const privateKey = process.env.AWS__SECRET_ACCESS_KEY
const bucketName = process.env.AWS_NAME_BUCKET

const s3 = new AWS.S3({
    accessKeyId: accessKey,
    secretAccessKey: privateKey
});

const uploadToBucket = async (file: any) => {

    const { body, mineType, fileName } = file;

    const separateFileName = fileName.split('.')

    const getFormat = separateFileName[separateFileName.length - 1]

    const newFileName = `${shortid.generate()}.${getFormat}`

    const params = {
        Bucket: bucketName,
        Key: newFileName,
        Body: body,
        ContentType: mineType
    }

    try {
        const response = await s3.upload(params).promise();
        return response?.Location
    } catch (error) {
        console.error(error)
        throw new Error()
    }
}

const deleteAvatar = async (url: string) => {
    const params = {
        Bucket: bucketName,
        Key: url
    };

    try {
        await s3.deleteObject(params);
    } catch (err) {
        console.error(err)
        throw new Error()
    }
}

module.exports = {
    uploadToBucket,
    deleteAvatar
}