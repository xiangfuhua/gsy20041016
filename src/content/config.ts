// ================================================================
// Astro Content Collections 配置
// 定义博客、资源和独立页面的数据模型（schema）
// 修改字段后需同步更新 public/admin/config.yml
// ================================================================
import { defineCollection, z } from 'astro:content';

// 博客文章集合
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    heroImage: z.string().optional(),          // 缩略图路径
    category: z.enum(['office', 'programming', 'software', 'computer', 'resources']),
    tags: z.array(z.string()).optional(),      // 标签数组
    premium: z.boolean().default(false),       // 付费标记（预留字段）
  }),
});

// 资源下载集合
const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    heroImage: z.string().optional(),
    category: z.enum(['office', 'programming', 'software', 'computer', 'resources']),
    tags: z.array(z.string()).optional(),
    premium: z.boolean().default(false),       // 付费标记（预留字段）
    downloadUrl: z.string().optional(),        // 下载链接
    fileSize: z.string().optional(),           // 文件大小
    version: z.string().optional(),            // 版本号
  }),
});

// 独立页面集合
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(0),              // 排序权重
  }),
});

export const collections = {
  blog: blogCollection,
  resources: resourcesCollection,
  pages: pagesCollection,
};
