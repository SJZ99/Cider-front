<template>
    <div>
        <!-- bubble menu -->
        <bubble-menu :editor="editor" v-if="editor" class="bubble-menu">
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                <tip-icon icon="mdi-format-text" tip="title"/>
            </button>
            <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                <tip-icon icon="mdi-format-bold" tip="bold(crtl+B)"/>
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                <tip-icon icon="mdi-format-italic" tip="italic(crtl+I)"/>
            </button>
            <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
                <tip-icon icon="mdi-code-braces" tip="code block"/>
            </button>
            <!-- more -->
            <button @click="bubble_more = !bubble_more">
                <tip-icon icon="mdi-dots-vertical" tip="more"/>
            </button>
            <button v-show="bubble_more" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList')}">
                <tip-icon icon="mdi-format-list-bulleted" tip="bullet list"/>
            </button>
            <button v-show="bubble_more" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList')}">
                <tip-icon icon="mdi-format-list-numbered" tip="order list"/>
            </button>
        </bubble-menu>

        <!-- floating menu -->
        <floating-menu
            class="floating-menu"
            :tippy-options="{ duration: 100 }"
            :editor="editor"
            v-if="editor"
        >
        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
            <tip-icon icon="mdi-format-text" tip="title"/>
        </button>
        <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
            <tip-icon icon="mdi-code-braces" tip="code block"/>
        </button>
        <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
            <tip-icon icon="mdi-format-quote-close" tip="quote(crtl+shift+B)"/>
        </button>
        <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
            <tip-icon icon="mdi-format-list-bulleted" tip="bullet list"/>
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
            <tip-icon icon="mdi-format-list-numbered" tip="order list"/>
        </button>
        </floating-menu>
        <editor-content :editor="editor"/>
    </div>
</template>

<script>
/* 
   Blockquote, BulletList, CodeBlock, Document, HardBreak, Heading, 
   HorizontalRule, ListItem, Mention, OrderedList, Paragraph, Text, 
   Bold, Code, Italic, Strike, TextStyle, Dropcursor, Gapcursor, History 
*/
import StarterKit from '@tiptap/starter-kit'
import {
  Editor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/vue-2'

import Typography from '@tiptap/extension-typography'

import Blockquote from '@tiptap/extension-blockquote'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import lowlight from 'lowlight'
import TipIcon from './TipIcon.vue'

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
    TipIcon,
  },

  data() {
    return {
      editor: null,
      bubble_more: false,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
        CodeBlockLowlight.configure({
          lowlight,
        }),
        Typography,
        Blockquote,
      ],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/tiptap.scss"
</style>