<template>
    <div class="form">
        <form>
            <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="15"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                :error-messages="passwordErrors"
                name="input-10-1"
                label="Password"
                counter
                required
                @click:append="show = !show"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
            ></v-text-field>

            <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree the privacy policy?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
            ></v-checkbox>
            <v-row>
                <v-col>
                    <v-dialog
                        v-model="dialog"
                        width="500"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="red lighten-2"
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >
                            Check
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                            Privacy Policy
                        </v-card-title>

                        <v-card-text>
                            {{privacy_content}}
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="dialog = false; checkbox = true"
                        >
                            I accept
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-col>

                <v-col>
                    <v-btn
                        class="mr-4"
                        @click="submit"
                    >
                        submit
                    </v-btn>
                </v-col>

                <v-col>
                    <v-btn
                        @click="clear"
                    >
                    clear
                    </v-btn>
                </v-col>
            </v-row>
        </form>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(15) },
      password: { required, minLength: minLength(8) },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
        name: '',
        password: '',
        checkbox: false,
        show: false,
        privacy_content: 'Collecting data to improve your experience, we promise we won\'t use that data in other place. us',
        dialog: false,
    }),

    computed: {
        checkboxErrors () {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
        },
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 15 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        passwordErrors () {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.minLength && errors.push('Password must be at least 8 characters long')
            !this.$v.password.required && errors.push('Password is required.')
            return errors
        },

    },

    methods: {
      submit () {
        this.$v.$touch()
        if(this.$v.name.$dirty && this.$v.password.$dirty) {
            var store = this.$store
            var bodyFormData = new FormData();
            bodyFormData.append("username", this.name);
            bodyFormData.append("password", this.password);
            this.axios.post("jwt/login", bodyFormData)
            .then(function (response) {
                console.log(response);
                const token = response.headers['authorization'].replace("BEARER ", "");
                // localStorage.setItem('token', token);
                var options = {token: token, isLogin: true}
                console.log(options)
                store.commit("SET_AUTH", options)       
                console.log(store.state.token)         
            })
            .catch(function (error) {
                console.log(error);
            })
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.password = ''
        this.checkbox = false
      },
    },
  }
</script>

<style lang='scss'>
@import '@/scss/login.scss'
</style>