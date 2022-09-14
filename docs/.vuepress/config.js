module.exports = {
  title: 'Adelle Yen',
  description: 'Community focused, Melbourne Based.',
  plugins: [
    '@vuepress/last-updated',
    ['@vuepress/search', { searchHotkeys: [] }],
  ],

  themeConfig: {
    nav: [
      { text: 'CV', link: '/cv/' },
      { text: 'LinkedIn', link: 'https://linkedin.com/in/adelleyen' },
      { text: 'Twitter', link: 'https://twitter.com/adelleyen' },
    ],
    docsRepo: 'https://github.com/connorwforsyth/connorforsythco/',
    docsDir: 'docs',
    editLinks: true,
  },
}
