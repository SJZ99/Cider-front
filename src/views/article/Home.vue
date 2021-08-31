<template>
  <div>
    <div class="slogan">
      <div class="title">

        <h2>
          Indulge in code
        </h2>

        <v-btn dark color="#198964" max-width="45vh" @click="click_start">
          START
          &nbsp;
          <v-img src="@/assets/home/forward.svg" max-width="2vw" class="forward"> </v-img> 
        </v-btn>
      </div>

      <div class="clock">
        <v-img src="@/assets/home/clock.svg" max-width="10vw"></v-img>
      </div>

    </div>

    <div class="design-concept">

      <h1>
        <b>
          Design Concept
        </b>
      </h1>

      <!-- card 1 -->
      <v-dialog
        v-model="record.dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-card
            color="transparent"
            dark
            max-width="60vw"
            class="card"
            v-bind="attrs"
            v-on="on"
          >
            <v-row>
              <v-spacer/>
              <v-col>
                <v-img src="@/assets/home/record.svg" max-width="20vw" id="img"></v-img>
              </v-col>
              <v-spacer/>
            </v-row>
            <v-row>
              <v-spacer/>
              <v-card-title>
                <h2>
                  {{record.title}}
                </h2>
              </v-card-title>
              <v-spacer/>
            </v-row>
          </v-card>
        </template>

        <v-card class="text-center" light>
          <v-card-title class="text-h4 lighten-2">
            {{record.title}}
          </v-card-title>

          <v-card-text class="text-h5">
            {{record.content}}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="record.dialog = false"
          >
              Close
          </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
      <!-- card 2 -->
      <v-dialog
        v-model="practice.dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-card
            color="transparent"
            dark
            max-width="60vw"
            class="card"
            v-bind="attrs"
            v-on="on"
          >
            <v-row>
              <v-spacer/>
              <v-col>
                <v-img src="@/assets/home/gear.svg" max-width="20vw" id="img"></v-img>
              </v-col>
              <v-spacer/>
            </v-row>
            <v-row>
              <v-spacer/>
              <v-card-title>
                <h2>
                  {{practice.title}}
                </h2>
              </v-card-title>
              <v-spacer/>
            </v-row>
          </v-card>
        </template>

        <v-card class="text-center" light>
          <v-card-title class="text-h4 lighten-2">
            {{practice.title}}
          </v-card-title>

          <v-card-text class="text-h5">
            {{practice.content}}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="practice.dialog = false"
          >
              Close
          </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
      <div id="made-by">

        <div id="title">
          <h2 class="text-center">Made By</h2>
        </div>

        <div id="block">

          <div class="card-vue">
            <a href="https://vuejs.org/">
              <v-img src="@/assets/langIcon/vue.svg" id="icon"></v-img>
            </a>
            <v-dialog
              v-model="vue"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <h2 
                  class="text-center"
                  v-bind="attrs"
                  v-on="on"
                >
                  Vue
                </h2>
              </template>

              <v-card>
                <v-card-title class="text-h5 lighten-2">
                  Vue
                </v-card-title>

                <v-card-text class="text-h6">
                  A progressive Javascript framework, 
                  inspired by MVVM model (model-view-viewmodel), 
                  driven by data, use component to provide DOM scalability. 
                  It's also recommend learn Javascript start from Vue.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="vue = false"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            
          </div>

          <div class="card-vuetify">
            <a href="https://vuetifyjs.com/en/">
              <v-img src="@/assets/langIcon/vuetify.svg" id="icon"></v-img>
            </a>
            <v-dialog
              v-model="vuetify"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <h2 
                  class="text-center"
                  v-bind="attrs"
                  v-on="on"
                >
                  Vuetify
                </h2>
              </template>

              <v-card>
                <v-card-title class="text-h5 lighten-2">
                  Vuetify
                </v-card-title>

                <v-card-text class="text-h6">
                  A vue UI component library, provide some layout systems use for RWD website, 
                  follow the Meterial Design Specifications. It is the most popular UI library for Vue devloper, 
                  and it has a very active development cycle to keep improve quality.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="vuetify = false"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            
          </div>

          <div class="card-spring">
            <a href="https://spring.io/">
              <v-img src="@/assets/langIcon/spring.svg" id="icon"></v-img>
            </a>

            <v-dialog
              v-model="spring"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <h2 
                  class="text-center"
                  v-bind="attrs"
                  v-on="on"
                >
                  Spring
                </h2>
              </template>

              <v-card>
                <v-card-title class="text-h5 lighten-2">
                  Spring
                </v-card-title>

                <v-card-text class="text-h6">
                  A progressive Java framework, spring boot integrate many useful tool. 
                  Using IoC and DI provide flexible extension. 
                  Spring Security can be integrated to a project, each of these are quickly and responsibly for security issues. 
                  It is the most popular framework for Java.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="spring = false"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

          </div>

          <div class="card-swagger">
            <a href="https://swagger.io/">
              <v-img src="@/assets/langIcon/swagger.svg" id="icon"></v-img>
            </a>
            <v-dialog
              v-model="swagger"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <h2 
                  class="text-center"
                  v-bind="attrs"
                  v-on="on"
                >
                  Swagger
                </h2>
              </template>

              <v-card>
                <v-card-title class="text-h5 lighten-2">
                  Swagger
                </v-card-title>

                <v-card-text class="text-h6">
                  A open source API devlopment tool, easily to generate API document. 
                  Making frontend and backend cooperate more efficiently
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="swagger = false"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>

        </div>
          
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    vue: false,
    vuetify: false,
    spring: false,
    swagger: false,
    record: {
      title: 'Record',
      content: '紀錄學習過程和一些廢文，這個小窗窗看起來還不錯吧:)',
      dialog: false,
    },
    practice: {
      title: 'Practice',
      content: '練習學到的技術，讓各種帥氣技術能夠被展現:)',
      dialog: false,
    }
  }),
  method: {
    click_start () {
    }
  },
}
</script>

<style lang='scss'>
@import '@/scss/views/home.scss';
</style>
