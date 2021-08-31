<template>
  <div class="background">
    <div id="main-side">

      <v-breadcrumbs :items="items"></v-breadcrumbs>

      <div id="title">
        <h1 class="text-left">{{title}}</h1>
        <pre id="pre">
          <h5>By: {{author}}    last modify: {{last_modify}}    </h5>
        </pre>

        <v-chip-group id="chip_group">
          <v-chip
            v-for="(tag, id) in tags"
            :key='id'
            label
            color="#7D9CD6"
            dark
          >
            <v-icon color="white">mdi-label</v-icon>
            &nbsp;
            {{tag}}
          </v-chip>
        </v-chip-group>
      </div>
      <div id="content">
        <p>
          {{content}}
        </p>
      </div>
      
    </div>

    <div id="right_bar">
      <v-card id="card" flat>

        <v-card-title>{{author}}</v-card-title>

        <v-divider id="divider"/>

        <v-card-text>{{author_exp}}</v-card-text>

      </v-card>
    </div>
  </div>
</template>

<script>
import axios from '../../../main'
import router from '../../../router'

export default {
  data: () => ({
    type: '',
    title: 'Title',
    content: 'This is just a template, you will see this because the backend serve isn\'t enable.',
    author: 'author',
    author_exp: 'do nothing',
    last_modify: 'time',
    tags: ['default', 'something'],
    items: [
      {
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: router.currentRoute.params.lang,
        disabled: false,
        href: '/tech/' + router.currentRoute.params.lang,
      },
      {
        text: "this",
        disabled: true,
        href: '',
      },
    ],
  }),
  methods: {
    setData (type, title, content, lastModify) {
      this.type = type
      this.title = title
      this.content = content
      this.last_modify = lastModify
    }
  },
	beforeRouteEnter (to, from, next) {
		axios
			.get('tech/' + to.params.lang + '/' + to.params.id)
			.then(function (response) {
        var data = response.data
        // console.log(response)
				next(vm => vm.setData(to.params.lang, data.title, data.content, data.date))
			})
			.catch(function (response) {
        console.log(response)
        next()
				// next('404')
			})
	}

}
</script>

<style lang='scss'>
@import '@/scss/views/tech/article.scss'
</style>