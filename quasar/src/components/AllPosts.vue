<template>
  <div class=''>
    <h2>Recent posts</h2>
    <PostList v-if="allPosts" :posts="allPosts"/>
  </div>
</template>

<script>
    import PostList from '../components/PostList'
    import gql from 'graphql-tag'

    export default {
        name: 'AllPosts',

        apollo: {
            allPosts: {
                query: gql`
                         query {
                            allPosts {
                              title
                              subtitle
                              publishDate
                              published
                              metaDescription
                              slug
                              author {
                                user {
                                  username
                                  firstName
                                  lastName
                                }
                              }
                              tags {
                                name
                              }
                            }
                          }
                        `
            }
        },
        components: {
            PostList,
        },
        data() {
            return {
                allPosts: [],
            }
        },
        created() {
        },
    }
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
