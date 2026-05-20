---
title: "如何优雅地安装 Java 开发环境（JDK + Maven）"
description: "手把手教你安装 Java 开发环境，从 JDK 下载到 Maven 配置，全程实操，小白也能轻松完成。"
date: 2026-05-24
category: "programming"
tags:
  - Java
  - JDK
  - Maven
  - 环境配置
  - 开发工具
premium: false
---

作为 Java 开发的第一步，配置开发环境是几乎所有初学者都会碰到的问题。JDK 版本怎么选？环境变量怎么配？Maven 是干什么的？很多新手在这些环节就被绕晕了。

本文从零开始，一步步教你搭建最主流的 Java 开发环境：**JDK 21（LTS）+ Maven + 环境变量配置**。

## 一、安装 JDK

JDK（Java Development Kit）是 Java 开发的核心工具包，包含了编译、运行 Java 程序所需的所有工具。

### 1. 选择 JDK 版本

目前最推荐的是 **JDK 21（LTS 长期支持版）**，稳定且主流。如果你有其他项目要求（比如公司项目用 JDK 17 或 JDK 11），也可以选择对应版本。

> **版本选择建议**：新手直接选最新的 LTS 版本（目前是 JDK 21）。不用纠结版本号，不同版本之间的基础语法差异很小。

### 2. 下载与安装

**推荐使用 Oracle JDK 或 Eclipse Temurin：**

**方式一：Eclipse Temurin（推荐，免费开源）**
1. 打开 https://adoptium.net/
2. 选择 "Latest LTS Release"（目前是 JDK 21）
3. 选择对应操作系统（Windows/macOS/Linux）和架构（64-bit）
4. 下载 .msi（Windows）或 .pkg（macOS）安装包

**方式二：Oracle JDK（官方版本）**
1. 打开 https://www.oracle.com/java/technologies/downloads/
2. 选择 JDK 21，下载对应系统的安装包
3. 注意：Oracle JDK 个人使用免费，商业使用需授权

**安装步骤（Windows）：**
1. 双击下载的 .msi 文件
2. 一路点击 Next（默认安装在 `C:\Program Files\Java\jdk-21`）
3. 等待安装完成

### 3. 配置环境变量

**Windows 系统：**
1. 右键「此电脑」→「属性」→「高级系统设置」
2. 点击「环境变量」
3. **新建 JAVA_HOME：**
   - 系统变量 → 新建
   - 变量名：`JAVA_HOME`
   - 变量值：`C:\Program Files\Java\jdk-21`（你的 JDK 安装路径）
4. **编辑 Path 变量：**
   - 找到系统变量中的 Path → 双击编辑
   - 点击「新建」→ 添加 `%JAVA_HOME%\bin`
   - 点击确定

### 4. 验证安装

打开命令提示符（CMD），输入以下命令验证：

```bash
java -version
# 应该显示：java version "21.0.x" ...

javac -version
# 应该显示：javac 21.0.x
```

如果出现"不是内部或外部命令"的提示，说明环境变量配置有误，请检查上一步的 Path 配置。

> **命令行查错**：如果 `java -version` 能显示但 `javac -version` 报错，通常是因为 Path 中没有正确指向 `%JAVA_HOME%\bin`，请重新检查环境变量设置。

### 5. 第一个 Java 程序

验证安装完成后，写一个简单的程序测试：

```java
public class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello, Java 环境配置成功！");
    }
}
```

**编译运行步骤：**
```bash
javac HelloJava.java   # 编译（生成 HelloJava.class）
java HelloJava          # 运行（输出：Hello, Java 环境配置成功！）
```

## 二、安装 Maven

Maven 是 Java 项目最常用的构建工具和依赖管理工具。简单说，它的作用就是：帮你自动下载项目需要的第三方库（jar 包），并帮你编译、打包、测试项目。

### 1. 下载 Maven

1. 打开 https://maven.apache.org/download.cgi
2. 下载 `apache-maven-3.9.x-bin.zip`（最新稳定版）
3. 解压到你喜欢的目录，比如 `D:\tools\apache-maven-3.9.9`

### 2. 配置 Maven 环境变量

1. **新建 MAVEN_HOME：**
   - 系统变量 → 新建
   - 变量名：`MAVEN_HOME`
   - 变量值：`D:\tools\apache-maven-3.9.9`（你的 Maven 解压路径）
2. **编辑 Path 变量：**
   - 添加 `%MAVEN_HOME%\bin`
3. **验证安装：**
   ```bash
   mvn -version
   # 应该显示 Maven 版本号和 Java 版本信息
   ```

### 3. 配置 Maven 镜像源（重要）

Maven 默认从中央仓库下载依赖，国内下载速度很慢。建议配置阿里云镜像：

找到 Maven 安装目录下的 `conf\settings.xml`，在 `<mirrors>` 标签中添加：

```xml
<mirror>
    <id>aliyunmaven</id>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
    <mirrorOf>central</mirrorOf>
</mirror>
```

配置完成后，以后用 Maven 下载依赖时，会从阿里云镜像下载，速度快很多。

> **效果对比**：未配置镜像时，下载一个 Spring Boot 项目可能需要 10-30 分钟；配置阿里云镜像后，通常 1-3 分钟就能完成。

## 三、IDE 推荐

JDK 和 Maven 配置好后，你就可以使用 IDE（集成开发环境）开始写 Java 项目了。

推荐以下两个 IDE：

| IDE | 适用场景 | 下载地址 |
|-----|---------|---------|
| **IntelliJ IDEA Community** | Java 开发首选，免费版已够用 | jetbrains.com/idea/download |
| **VS Code + Java 扩展包** | 轻量级选择，适合配置一般的电脑 | code.visualstudio.com |

**IntelliJ IDEA 中配置 JDK 和 Maven：**
1. 打开 IntelliJ IDEA → File → Settings（或 Ctrl+Alt+S）
2. 搜索 "JDK" → 选择你安装的 JDK 21
3. 搜索 "Maven" → 选择你安装的 Maven 路径（覆盖内置 Maven）
4. 在 Maven 设置中，确认使用的是配置了阿里云镜像的 settings.xml

---

按照以上步骤，你的 Java 开发环境就搭建好了。总结一下流程：安装 JDK → 配置 JAVA_HOME → 安装 Maven → 配置镜像源 → 安装 IDE。整个过程大概 30 分钟，但一劳永逸，之后任何 Java 项目都能在这个环境上开发和运行。

如果在配置过程中遇到任何问题，欢迎在评论区留言交流。
