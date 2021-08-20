<template>
  <div>
    <div class="slogan">
      <div class="title">

        <h2>
          Every miracle
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          takes some times
        </h2>

        <v-btn dark color="#198964" max-width="45vh"  >
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
          <v-card color="transparent" dark max-width="40vw" class="card" v-bind="attrs" v-on="on">
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
          <v-card color="transparent" dark max-width="40vw" class="card" v-bind="attrs" v-on="on">
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
      

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data: ()=>({
    record: {
      title: 'Record',
      content: '紀錄學習的歷程、生活的回憶，建立能讓自己信仰的目標。',
      dialog: false,
    },
    practice: {
      title: 'Practice',
      content: '練習學到的技術，使自己在學習新知識的時候能以應用的角度思考，增進學習效率。',
      dialog: false,
    }
  })
}
</script>

<style lang='scss'>
@import '@/assets/scss/home.scss';
</style>
