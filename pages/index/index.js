const DATA = [{
  id: 1,
  title: '爱过的人我已不再拥有',
  image: 'http://wimg.spriteapp.cn/picture/2016/0904/57cb989b04d4c.png',
  src: 'http://wvoice.spriteapp.cn/voice/2016/0904/57cb989b1e3b4.mp3'
}, {
  id: 2,
  title: '已过了耳濡目染的年',
  image: 'http://wimg.spriteapp.cn/picture/2016/0517/573b1240af3da.jpg',
  src: 'http://wvoice.spriteapp.cn/voice/2016/0517/573b1240d0118.mp3'
}, {
  id: 3,
  title: '感觉很放松',
  image: 'http://wimg.spriteapp.cn/picture/2016/1108/5821463c3fad8.jpg',
  src: 'http://wvoice.spriteapp.cn/voice/2016/1104/581b63392f6cb.mp3'
}]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: DATA,
    audioId: ''
  },
  toggleAudioId(obj) {
    this.setData({
      audioId: obj.detail
    })
  }
})