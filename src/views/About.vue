<template>
  <div class="about">
    <div contenteditable="true" v-html="list"></div>
    <input v-model="replyspan" @keyup.enter="sbmit"  placeholder="请在此处输入文字...">
    <button @click="sbmit">sbmit</button>
    <emojiPanel @emojiClick="appendEmoji"></emojiPanel>
  </div>
</template>
<script>
import EmojiPanel from "../components/EmojiPanel";
export default {
  data(){
    return{
      replyspan:"",
      list:""
    }
  },
  components: {
    EmojiPanel
  },
  methods: {
    emoji(word) { //表情包方法
      // 生成html
      const type = word.substring(1, word.length - 1);
      return `<span class="emoji-item-common emoji-${type} emoji-size-small"></span>`;
    },
    appendEmoji(text) {//表情包 拼接 ：方法
      let context = this.replyspan + ":" + text + ":";
      this.replyspan = context
    },
    sbmit(){
      this.list +=this.replyspan.replace(/:.*?:/g, this.emoji)
    }
  }
}
</script>
<style lang="scss" scoped>
@import url("../assets/css/emoji.css");
.about {
  [contenteditable="true"]:empty::before {
    content: attr(placeholder);
    color: #ccc;
    caret-color: #ccc;
  }
  .editor {
    padding: 10px 0;
    text-align: left;

    caret-color: #333;
    color: #333;
  }
}
</style>