import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "gff2ps",
  description: "gff2ps documentation",
  appearance: 'force-dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Snapshots', link: '/GFF2PS-Snapshots' },
      { text: 'ADHposter', link: '/GFF2PS-ADHposter' }

    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/guigolab/gff2ps' }
    ]
  }
})
