// ================================================================
// RSS 订阅 — rss.xml.js
// 自动生成全站 RSS 2.0 Feed
// ----------------------------------------------------------------
// Astro 内置 @astrojs/rss 支持，通过 getCollection 获取所有文章
// 部署后访问 https://你的域名/rss.xml 即可看到订阅源
// ================================================================
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    // RSS Feed 标题
    title: '电脑技术资源博客',
    // 站点描述
    description: '免费分享实用的办公技巧、编程知识、软件教程和电脑问题解决方案',
    // 站点 URL（从 Astro config 中获取）
    site: context.site,
    // 文章列表
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // 生成文章链接
      link: `/blog/${post.id.replace(/\/index$/, '').replace(/\.(md|mdx)$/, '')}`,
    })),
    // 订阅源语言
    customData: `<language>zh-CN</language>`,
  });
}
