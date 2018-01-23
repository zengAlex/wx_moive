var rootDocment = 'https://www.shanhaoundies.com/v2/';//你的域名  
function req(url, data, cb) {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: 'GET',
    //header content-type : 修改为json 不能 application/json
    header: { 'Content-Type': 'json' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}


module.exports = {
  req: req
}  