const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // {path: '/', component: () => import('pages/Blog.vue')},
      {path: '/', component: () => import('components/AllPosts.vue')},
      {path: '/author/:username', component: () => import('components/Author.vue')},
      {path: '/post/:slug', component: () => import('components/Post.vue')},
      {path: '/tag/:tag', component: () => import('components/PostsByTag.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
