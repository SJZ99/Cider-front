<template>
    <div>
        <v-toolbar dark color="#031f5b" class="toolbar">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
           
            <v-toolbar-title>
                <h1 v-text="$router.currentRoute.name"></h1>
            </v-toolbar-title>

            <v-spacer />

            <v-btn
                light
                v-if="$router.currentRoute.name == 'Write Story'"
                @click="save"
            >
                SAVE
            </v-btn>

        </v-toolbar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            dark
            color="#031f5b"
            :src="barImage"
        >
            <v-list-item>
                <v-list-item-content>
                    <h2>
                        <v-list-item-title v-text="name"/>
                    </h2>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    @click="changePath(item.link)"
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <h3>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </h3>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../../../store'
export default {
    data: () => ({
        barImg: store.state.barImage,
        drawer: false,
        items: [
            { 
              title: 'Dashboard', 
              icon: 'mdi-view-dashboard', 
              link: '/dashboard' 
            },
            { 
                title: 'Profile', 
                icon: 'mdi-account-box', 
                link: '/dashboard/profile' 
            },
            { 
                title: 'Write Article',   
                icon: 'mdi-pencil', 
                link: '/dashboard/write' 
            },
            { 
                title: 'Articles',  
                icon: 'mdi-note-text-outline', 
                link: '/live' 
            },
        ],
      
    }),
    methods: {
        changePath (goToPath) {
            this.$router.push(goToPath).catch((error) => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        },
        save () {
            let con = store.state.content;
            if(con && con != '<h1>Title here</h1>') {
                var bodyFormData = new FormData();
                bodyFormData.append("content", store.state.content);
                this.axios.post('writer/post', bodyFormData)
                .then(() => {
                    store.commit('SET_ARTICLE', '');
                })
                .catch(() => {

                })
            }
        }
    },
    computed: {
        ...mapState(['barColor', 'barImage']),
        drawer: {
            get () {
                return this.$store.state.drawer
            },
            set (val) {
                this.$store.commit('SET_DRAWER', val)
            },
        },
        name () {
            return this.$store.state.name
        }
    }
}
</script>

<style>
.tab {
    margin-left: 2vw;
}
.toolbar {
    width: 100vw;
}
</style>