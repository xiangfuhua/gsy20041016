import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  // 站点 URL — 部署到 Netlify 后替换为实际域名
  site: 'https://你的域名.netlify.app',
  // 静态生成模式（默认），无需 SSR
  output: 'static',
  // 启用 Markdown 与 MDX 支持
  integrations: [
    mdx(),
    sitemap(),
    pagefind(), // 静态搜索索引生成
  ],
  // Markdown 配置
  markdown: {
    // 语法高亮：使用 shiki 内置主题
    shikiConfig: {
      theme: 'github-light',
      wrap: false,
    },
  },
});
