<template>
  <div>
 <div id="editor" class="editor-wrap">

     <div ref="codemirror" class="html-editor" id="html-edit">
       <h3>Html</h3>
     </div>

     <div ref="codemirror2" class="css-editor" id="css-edit">
       <h3>Css</h3>
     </div>

      <div ref="codemirror3" class="js-editor" id="js-edit">
        <h3>Javascript</h3>
      </div>

 </div>

  <div class="preview">
    <iframe id="preview-content"></iframe>
  </div>

  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/material.css'
import 'codemirror/addon/edit/closetag.js'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/css-hint.js'
import 'codemirror/addon/hint/html-hint.js'
import 'codemirror/addon/hint/javascript-hint.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/matchtags.js'
import 'codemirror/addon/edit/trailingspace.js'




export default {
  name: 'CodeEditor',
  data() {
    return {
      value: '',
      value2: '',
      value3: '',
      }
    },
  mounted: function ()  {
    this._editor = new CodeMirror(this.$refs.codemirror, {
      lineNumbers: true,
      tabSize: 3,
      value: this.value,
      autoCloseTags: true,
      mode: 'htmlmixed',
      theme: 'material',
      closeBrackets: true,
      matchBrackets: true,
      trailingSpace : true,
      autoSelfClosers: true,
      extraKeys: {"Ctrl-Space": "autocomplete"},
    });

    this._editor2 = new CodeMirror(this.$refs.codemirror2,{
      lineNumbers: true,
      tabSize: 3,
      value: this.value,
      autoCloseTags: true,
      mode: 'scss',
      theme: 'material',
      closeBrackets: true,
      matchBrackets: true,
      trailingSpace : true,
      extraKeys: {"Ctrl-Space": "autocomplete"},
      autoSelfClosers: true,
    })
    this._editor3 = new CodeMirror(this.$refs.codemirror3,{
      lineNumbers: true,
      tabSize: 3,
      value: this.value,
      autoCloseTags: true,
      mode: 'javascript',
      theme: 'material',
      closeBrackets: true,
      matchBrackets: true,
      trailingSpace : true,
      extraKeys: {"Ctrl-Space": "autocomplete"},
      autoSelfClosers: true,
    })


    this._editor.on('changes', () => {
      this.value = this._editor.getValue();
      preview(this.value,this.value2,this.value3)
    })

    this._editor2.on('changes', () => {
      this.value2 = this._editor2.getValue();
      preview(this.value,this.value2,this.value3)
    })

    this._editor3.on('changes', () => {
      this.value3 = this._editor3.getValue();
      preview(this.value,this.value2,this.value3)
    })

    function preview(html,css,js){
      let frame = document.getElementById('preview-content').contentWindow.document
      frame.open()
      frame.write(html + "<style>"+ css + "</style>" + "<scri"+"pt>" + js + "</scri"+"pt>")
      frame.close()
    }


},
}

</script>



<style lang="css" scoped>

.editor-wrap {
  display: flex;
}


.html-editor {
  text-align: left;
  width: 40em;
  margin: 0;
  border: 2px solid gold;
  resize: both;
  overflow: auto;
}
.css-editor {
  text-align: left;
  width: 40em;
  margin: 0;
  border: 2px solid gold;
}
.js-editor {
  text-align: left;
  width: 40em;
  margin: 0;
  border: 2px solid gold;
}

.preview {
  display: block;
  color: white;
  margin: 0;
  padding: 0;
}
#preview-content {
  width: 100%;
  height: 25em;
  background: #ffffff;
  color: white;
  margin: 0;
  padding: 0;
}

h3  {
  margin: 0;
  padding: .225em;
  font-size: .85em;
  color: gold;
  background: #2c3e50;

}





</style>