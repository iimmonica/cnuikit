<template>
  <div class="markdown">
    <component v-bind:is="page"></component>
  </div>
</template>

<script>

export default {
  name: 'markdown',
  data () {
    return {
      page: this.$route.params.page
    }
  },
  mounted () {
  },
  watch: {
  },
  methods: {
  },
  components: {
    'introduction': () => import('@/docs/cn/intro/introduction.md'),
    'installation': () => import('@/docs/cn/intro/installation.md'),
    'less': () => import('@/docs/cn/intro/less.md'),
    'sass': () => import('@/docs/cn/intro/sass.md'),
    'javascript': () => import('@/docs/cn/intro/javascript.md'),
    'webpack': () => import('@/docs/cn/intro/webpack.md'),
    'custom-icons': () => import('@/docs/cn/intro/custom-icons.md'),
    'avoiding-conflicts': () => import('@/docs/cn/intro/avoiding-conflicts.md'),
    'rtl': () => import('@/docs/cn/intro/rtl.md'),
    'migration': () => import('@/docs/cn/intro/migration.md')
  }
}
</script>

<style scoped>
</style>
