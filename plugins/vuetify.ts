import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  } from "vuetify/labs/VDataTable";
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components:{
            VDataTable,
            VDataTableServer,
            VDataTableVirtual,
        },


        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
              mdi,
            },
          },
        // your config will come here
    })

    nuxtApp.vueApp.use(vuetify)
})