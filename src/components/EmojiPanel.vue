<template>
  <div class="emoji-panel-wrap">
    <span v-for="(item,index) in emojis" :key="index" class="emoji-item-common" :class="['emoji-'+item,'emoji-size-large']" @click="emojiClick(item)"></span>
  </div>
</template>
<script>

export default {
  data() {
    return {
      emojis: [
        "angry",
        "anguished",
        "astonished",
        "blush",
        "cold_sweat",
        "confounded",
        "confused",
        "cry",
        "disappointed",
        "disappointed_relieved",
        "dizzy_face",
        "expressionless",
        "fearful",
        "flushed",
        "frowning",
        "grimacing",
        "grin",
        "grinning",
        "heart_eyes",
        "hushed",
        "innocent",
        "joy",
        "kissing_closed_eyes",
        "kissing_heart",
        "laughing",
        "neutral_face",
        "no_mouth",
        "open_mouth",
        "pensive",
        "persevere",
        "relaxed",
        "relieved",
        "sleepy",
        "smile",
        "smiley",
        "smirk",
        "sob",
        "stuck_out_tongue",
        "sunglasses",
        "sweat",
        "sweat_smile",
        "scream",
        "wink",
        "unamused",
        "satisfied",
        "worried",
        "stuck_out_tongue_closed_eyes",
        "weary",
        "yum",
        "tired_face",
        "triumph",
        "stuck_out_tongue_winking_eye"
      ]
    };
  },
  methods: {
    emojiClick(item) {
      this.$emit("emojiClick", item);
    }
  }
};
</script>
<style scoped>
.emoji-panel-wrap {
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
}
</style>