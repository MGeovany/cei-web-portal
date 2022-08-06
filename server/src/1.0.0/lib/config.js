module.exports = {
  'server':process.env.SERVER,
  'database':process.env.DB,
  'password':process.env.PASSWD,
  'user':process.env.USER,
  'options': {
      'encrypt': false,
      'enableArithAbort': true,
      'requestTimeout': '130000'
    },

};