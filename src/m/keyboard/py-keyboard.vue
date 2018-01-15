<template>
<div class="m-py-keyboard">
  <div class="m-keyboard-output-word">{{output}}</div>
  <div class="m-keyboard-candidate-pinyin"><span v-if="mathResult && mathResult.pinyin" class="m-input-pinyin">{{mathResult.pinyin}}</span></div>
  <div class="m-keyboard-candidate-word">
    {{candidate}}
    <span class="m-candidate-word"
      v-for="(word, index) in candidates"
      :key="index"
      @click="selectWord(index)"
      ><span class="m-candidate-word-index">{{index + 1}}.</span>{{word}}</span>
    <div class="m-candidate-word-page">
      <button class="up"
        :disabled="pagination.currentPage <= 1"
        @click="handlePageUp"
        >▲</button>
      <button class="down"
        @click="handlePageDown"
        :disabled="pagination.pageCount <= pagination.currentPage"
        >▼</button>
    </div>
  </div>
  <keyboard ref="keyboard"
    v-bind="$attrs"
    v-on="$listeners"
    @key="handleKey"
    @back="handleBack"
    ></keyboard>
</div>
</template>
<script>
import keyboard from './keyboard'
import dict from './dict'
import Pagination from './pagination'
window.dict = dict
export default {
  data () {
    return {
      keyboard: null,
      input: '',
      output: '',
      mathResult: null,
      pageSize: 9,
      currentPage: 1
    }
  },
  components: {keyboard},
  computed: {
    pagination () {
      if (!this.mathResult) {
        return new Pagination(0, this.pageSize)
      }
      return new Pagination(this.mathResult.result.length, this.pageSize)
    },
    candidates () {
      if (!this.mathResult) return []
      var page = this.pagination.slice(this.mathResult.result || [], this.currentPage)
      // console.log(page)
      return page
    }
  },
  methods: {
    handlePageUp () {
      this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1
      console.log(this.currentPage)
    },
    handlePageDown () {
      this.currentPage = this.currentPage <= this.pagination.pageCount ? this.currentPage + 1 : this.pagination.pageCount
    },
    // 输入
    handleKey (key, conf) {
      if (conf.langType === 'zh' && key === ' ') {
        this.selectWord(0)
        return false
      }
      this.input += key
      // console.log(key, conf.langType)
      // 中文输入
      if (conf.langType === 'zh') {
        this.pinyinToHanzi(key)
      }
    },
    handleBack () {
      if (this.input.length > 0) {
        this.input = this.input.substr(0, this.input.length - 1)
        this.pinyinToHanzi()
      } else {
        if (this.output.length > 0) {
          this.output = this.output.substr(0, this.output.length - 1)
        }
      }
    },
    // 拼音转汉字
    pinyinToHanzi () {
      var result = dict.getHanzi(this.input)
      this.mathResult = result
    },
    // 选择候选词
    selectWord (index) {
      if (this.candidates.length === 0) return false 
      this.output += this.candidates[index]
      this.input = ''
      this.pinyinToHanzi()
    },
    handleKeydown (e) {
      e = e || window.event
      var keyCode = e.keyCode || e.which || e.charCode
      if (keyCode >= 65 && keyCode <= 90) {
        var ch = String.fromCharCode(keyCode).toLocaleLowerCase()
        this.input += ch
        this.pinyinToHanzi()
      }
      switch (keyCode) {
        // 空额
        case 32:
          this.selectWord(0)
          break
        // back
        case 8:
          this.handleBack()
          break
        // 1
        case 187:
          console.log()
          this.handlePageDown()
          break
        case 189:
          this.handlePageUp()
          break
      }
      if (keyCode >= 49 && keyCode <= 57) {
        var ch = String.fromCharCode(keyCode)
        this.selectWord(ch - 1)
      }
      console.log(keyCode)
    }
  },
  mounted () {
    this.keyboard = this.$refs['keyboard']
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>
<style>
  .m-py-keyboard{
    /*width: inherit;
    height: inherit;*/
  }
  .m-input-pinyin{
    padding: 1px 8px;
    font-size: 13px;
    margin-left: 5px;
    background: #E8EAF0;
  }
  .m-keyboard-output-word{
    font-size: 25px;
    padding: 5px;
    min-height: 45px;
  }
  .m-keyboard-candidate-word{
    min-height: 55px;
    box-sizing: border-box;
    padding: 5px;
    user-select: none;
  }
  .m-keyboard-candidate-pinyin{
    height: 20px;
  }
  .m-keyboard-candidate-word .m-candidate-word{
    font-size: 25px;
    padding: 5px 15px;
    display: inline-block;
    border-radius: 3px;
  }
  .m-keyboard-candidate-word .m-candidate-word:hover{
    background: #E8EAF2;
  }
  .m-candidate-word-index{
    opacity: 0.7;
    font-size: 16px;
  }
  .m-candidate-word-page{
    float: right;
  }
  .m-candidate-word-page .up,
  .m-candidate-word-page .down{
    display: block;
    padding: 10px 20px;
    float: left;
    height: 40px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    outline: none;
    background: none
  }
  .m-candidate-word-page .up:hover,
  .m-candidate-word-page .down:hover{
    background: #E8EAF2;
  }
  .m-candidate-word-page .up:disabled,
  .m-candidate-word-page .down:disabled{
    opacity: 0.5;
  }
  
  .m-candidate-word-page .up{

  }
  .m-candidate-word-page .down{}
</style>
