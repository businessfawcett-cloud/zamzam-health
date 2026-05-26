import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '71mcx452',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
  perspective: 'published',
})
