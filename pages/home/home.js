// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    hobies: [1, 2, 3]
  },


  btnClick() {
    this.setData({
      count: this.data.count+1
    })
  },
  btnSub() {
    this.setData({
      count: this.data.count-1
    })
  },
  getInfo(enent) {
    console.log(enent.detail.userInfo);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getUserInfo({
      success: function(res) {
        // console.log(res);       
      }  
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})