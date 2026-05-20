// ================================================================
// 站点全局常量
// 所有 SEO 相关常量集中管理，各组件通过 import 引用
// ================================================================

/** 站点名称 */
export const SITE_NAME = "电脑技术资源博客";

/** 站点默认描述 */
export const SITE_DESCRIPTION = "电脑技术资源博客 — 免费分享实用教程与资源";

/** 默认社交分享图路径（1200x630，位于 public/ 目录下） */
export const DEFAULT_OG_IMAGE = "/default-og.svg";

/** 站点作者 */
export const SITE_AUTHOR = "Chen Yongshun";

/** 站点 Logo 路径（用于 JSON-LD Publisher Logo） */
export const SITE_LOGO = "/favicon.svg";

/**
 * 将相对路径或绝对路径解析为完整 URL
 * @param path - 相对路径（如 /images/hero.jpg）或完整 URL
 * @param site - Astro.site 对象
 * @returns 解析后的完整 URL
 */
export function resolveUrl(path: string | undefined | null, site: URL | undefined): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (site) {
    return new URL(path.startsWith("/") ? path : "/" + path, site).toString();
  }
  return path;
}
