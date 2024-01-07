import {createClient} from '@sanity/client'

export const client = createClient({
  apiVersion: '2023-05-03',
  projectId: '6gs96zc6', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})