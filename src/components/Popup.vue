<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="teal lighten-2">Add new project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            :rules="inputRules"
            label="Title"
            v-model="title"
            prepend-icon="folder"
          ></v-text-field>
          <v-textarea
            :rules="inputRules"
            label="Information"
            v-model="content"
            prepend-icon="edit"
          ></v-textarea>
          <v-menu>
            <v-text-field
              :rules="inputRules"
              :value="formattedDate"
              slot="activator"
              label="Due date"
              prepend-icon="date_range"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn
            :loading="loading"
            @click="submit"
            flat
            class="mx-0 mt-3 teal lighten-2"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/firebase'

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [v => v.length >= 3 || 'Minimum length is 3 characters'],
      loading: false,
      dialog: false
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, 'Do MMM YYYY'),
          person: 'The Net Ninja',
          status: 'ongoing'
        }
        db.collection('projects')
          .add(project)
          .then(() => {
            this.loading = false
            this.dialog = false
            this.$emit('update-drawer', false)
            this.$emit('update-snackbar', true)
          })
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  }
}
</script>
