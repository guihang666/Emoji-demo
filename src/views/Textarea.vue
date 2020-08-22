<template>
  <!-- textarea自适应高度参考 https://juejin.im/post/5ba311b16fb9a05cf039dfd4 -->
  <div class="textarea">
    <!--html-->
    <div class="commit">
      <div class="textarea-wrapper">
        <p class="content">{{value}}</p>  <!--pre 文本通常会保留空格和换行符。-->
        <textarea
          ref="textarea"
          v-model="value"
          @input="changeInput($event)"
          placeholder="请在此处输入文字..."
        ></textarea>
      </div>
      <span class="emot" @click="emot()" @mousedown.stop.prevent></span>
      <VEmojiPicker v-show="isEmojiPicker" :pack="pack" @select="selectEmoji" />
    </div>
  </div>
</template>
<script>
import VEmojiPicker from "v-emoji-picker";
import packData from "v-emoji-picker/data/emojis.json";
export default {
  components: {
    VEmojiPicker
  },
  data() {
    return {
      pack: packData.data,
      isEmojiPicker: false,
      value: "" //输入中的文字
    };
  },
  methods: {
    changeInput($event) {
      this.value = $event.target.value;
    },
    emot() {
      this.isEmojiPicker = !this.isEmojiPicker;
    },
    selectEmoji(emoji) {
      var elInput = this.$refs.textarea; //根据id选择器选中对象
      var startPos = elInput.selectionStart; // input 第0个字符到选中的字符
      var endPos = elInput.selectionEnd; // 选中的字符到最后的字符

      if (startPos === undefined || endPos === undefined) return;
      var txt = elInput.value; // 将表情添加到选中的光标位置
      var result =txt.substring(0, startPos) + emoji.emoji + txt.substring(endPos);
      elInput.value = result; // 赋值给input的value
      
      elInput.focus();// 重新定义光标位置
      elInput.selectionStart = startPos + emoji.emoji.length;
      elInput.selectionEnd = startPos + emoji.emoji.length;
      this.value = result; // 赋值给表单中的的字段
    }
  }
};
</script>
<style lang="scss">
.textarea {
  #InputSearch {
    display: none;
  }
  .container-emoji {
    height: 130px;
  }
}
</style>
<style lang="scss" scoped>
.textarea {
  .commit {
    span.emot {
      display: inline-block;
      vertical-align: bottom;
      background: url(../images/b8d.png) no-repeat;
      background-size: 100% 100%;
      width: 20px;
      height: 20px;
      margin: 0 10px;
    }
    /* css */
    .textarea-wrapper {
      position: relative;
      min-height: 30px;
      overflow: hidden;
      max-height: 90px;
      width: 80%;
      display: inline-block;
      vertical-align: middle;
      .content {
        display: block;
        visibility: hidden;
        font-size: 14px;
        color: #333333;
        line-height: 30px;
        word-wrap: break-word;
        font-family: SourceHanSansCN-Regular;
        padding: 0;
        margin: 0;
      }
      textarea {
        overflow-y: auto;
        overflow-x: hidden;
        resize: none;
        width: 100%;
        height: 100%;
        font-family: SourceHanSansCN-Regular;
        border: 0;
        font-size: 14px;
        color: #333333;
        line-height: 30px;
        padding: 0px;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>