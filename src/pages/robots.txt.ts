// ================================================================
// robots.txt 端点 — 搜索引擎爬虫规则
// 使用 Astro.site 获取站点 URL，确保 Sitemap 地址正确
// ================================================================
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.toString().replace(/\/$/, '') || 'https://example.com';

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap-index.xml`,
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
