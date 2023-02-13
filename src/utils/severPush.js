const axios = require('axios')
const { SEVER_TOKEN } = require('../ENV.js')
const SUCCESS_CODE = 200

const pushplus = async ({ title = '', content = '' } = {}) => {
  const url = 'https://sctapi.ftqq.com/SCT171405TOF67UqDftoBLwwCoid2k9e1k.send';
   console.log('哈哈哈哈哈哈哈'+url)
  try {
    await axios
      .post(url, data={
        text:title,
        desp:content,
      })
      .then(response => {
        if (response?.data.code !== SUCCESS_CODE) {
          throw new Error(response?.data?.msg)
        }
      })
  } catch (error) {
    console.log(error.stack)
  }
}

module.exports = pushplus
