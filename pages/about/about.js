// pages/about/about.js
Page({
  data: {
    isActive: false,
    num: [0,1,2,5,87,411,13]
  },
  changeColor () {
    this.setData({
      isActive: !this.data.isActive
    })
  }
})