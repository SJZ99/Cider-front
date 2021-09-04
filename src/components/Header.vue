<template>
    <div>
        <v-toolbar dark color="#198964" class="toolbar">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            &nbsp;&nbsp;
            <router-link to="/">
                <v-img src="@/assets/CIDER.png" max-width="3em"></v-img>
            </router-link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <v-toolbar-title>
                <h1>
                    CIDER
                </h1>
            </v-toolbar-title>
            <v-spacer />
            <v-btn light color="white" @click="login()">Login</v-btn>
        </v-toolbar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            dark
            color="#198964"
        >
            <v-list-item>
                <v-list-item-content>
                    <h2>
                        <v-list-item-title>Navigator</v-list-item-title>
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
export default {
    data () {
      return {
        drawer: false,
        items: [
            { 
              title: 'Home', 
              icon: 'mdi-view-dashboard', 
              link: '/' 
            },
            { 
                title: 'About', 
                icon: 'mdi-barley', 
                link: '/about' 
            },
            { 
                title: 'Tech',   
                icon: 'mdi-xml', 
                link: '/tech' 
            },
            { 
                title: 'Live',  
                icon: 'mdi-clover', 
                link: '/live' 
            },
            { 
                title: 'Chat',   
                icon: 'mdi-forum', 
                link: '/chat'
            },
        ],
      }
    },
    methods: {
        changePath(goToPath) {
            this.$router.push(goToPath).catch((error) => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        },
        login() {
            this.changePath("/login")
        },
    },
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