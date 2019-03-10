// pages/audioItem/audioItem.js
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.obeyMuteSwitch = false
wx.setInnerAudioOption({
  obeyMuteSwitch: false
})
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Object
    },
    audioId: {
      type: String | Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isPlaying: false
  },
  observers: {
    'audioId': function(id) {
      debugger;
      if (id === this.data.info.id) {
        this.setData({
          isPlaying: true
        })
      } else {
        this.setData({
          isPlaying: false
        })
      }
    }
  },
  methods: {
    pause() {
      this.triggerEvent('toggleAudioId', '')
      innerAudioContext.pause()
    },
    play() {
      innerAudioContext.src = this.data.info.src
      this.triggerEvent('toggleAudioId', this.data.info.id)
      innerAudioContext.play()
    }
  }
})