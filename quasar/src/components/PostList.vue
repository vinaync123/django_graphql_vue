<template>
  <div class='q-py-sm row items-start q-gutter-lg'>
    <q-card class="col q-gutter-lg" v-for="post in publishedPosts" :key="post.title">
      <router-link :to="`/post/${post.slug}`">
        <q-card-section>
          <div class="text-h6 grey-12 bold">{{ post.title }}</div>
          <div class="text-subtitle2">
            {{ post.author.user.firstName }} {{ post.author.user.lastName }}
          </div>
        <div class="">{{ displayableDate(post.publishDate) }}</div>
        </q-card-section>
      </router-link>
    </q-card>
  </div>
</template>

<script>
import AuthorLink from "../components/AuthorLink";

export default {
  name: "PostList",
  components: {
    AuthorLink
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    showAuthor: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    publishedPosts() {
      return this.posts.filter(post => post.published);
    }
  },
  methods: {
    displayableDate(date) {
      return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        new Date(date)
      );
    }
  }
};
</script>

<style></style>
