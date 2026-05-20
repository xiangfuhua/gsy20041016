---
title: "Git 常用命令清单：新手必看的版本控制指南"
description: "Git 是现代开发的必备技能。本文整理了 Git 最常用的命令和操作场景，从入门到日常使用，一篇就够了。"
date: 2026-05-23
category: "programming"
tags:
  - Git
  - 版本控制
  - 新手教程
  - 命令行
premium: false
---

Git 是目前世界上最流行的版本控制工具，无论是个人开发者还是团队协作，Git 都是必须掌握的基础技能。但 Git 的命令很多，新手经常不知道从何学起。

本文不追求面面俱到，而是整理出**日常开发中最常用的 Git 命令**，按使用场景分类，随查随用。

## 一、基础配置

安装 Git 后，第一件事是设置用户名和邮箱（提交代码时会用到）：

```bash
# 设置全局用户名和邮箱
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"

# 查看当前配置
git config --list

# 设置默认分支名为 main
git config --global init.defaultBranch main
```

> **小提醒**：`--global` 表示全局配置，对所有仓库生效。如果不加 `--global`，则只对当前仓库生效。

## 二、创建与克隆仓库

### 初始化本地仓库

```bash
# 在当前目录初始化 Git 仓库
git init

# 或者克隆远程仓库到本地
git clone https://github.com/用户名/仓库名.git

# 克隆并指定本地目录名
git clone https://github.com/用户名/仓库名.git my-project
```

## 三、日常操作流程

这是每天使用频率最高的一组命令，建议熟练掌握：

```bash
# 1. 查看当前文件状态
git status

# 2. 将文件加入暂存区
git add 文件名        # 添加指定文件
git add .             # 添加所有变更文件
git add *.js          # 添加所有 JS 文件

# 3. 提交到本地仓库
git commit -m "feat: 添加用户登录功能"

# 4. 推送到远程仓库
git push

# 5. 拉取远程最新代码
git pull
```

> **提交信息规范**：建议使用约定式提交格式——`feat`（新功能）、`fix`（修复）、`docs`（文档）、`refactor`（重构）、`chore`（杂项）。例如：`fix: 修复登录页验证码不显示的问题`。

## 四、分支管理

分支是 Git 最强大的功能之一，让多人协作开发成为可能：

```bash
# 查看分支
git branch                    # 查看本地分支（* 表示当前分支）
git branch -r                 # 查看远程分支
git branch -a                 # 查看所有分支

# 创建与切换分支
git branch feature-login      # 创建新分支
git checkout feature-login    # 切换到该分支
git checkout -b feature-login # 创建并切换（上面两步合并）

# 合并分支（常用）
git checkout main             # 先切换到主分支
git merge feature-login       # 将 feature-login 合并到当前分支

# 删除分支
git branch -d feature-login   # 删除本地分支
git push origin --delete feature-login  # 删除远程分支
```

**多人协作推荐流程：**
1. `git checkout -b feature-xxx` 从 main 创建功能分支
2. 在功能分支上开发、提交
3. `git checkout main && git pull` 同步最新代码
4. `git merge feature-xxx` 合并回主分支
5. `git push` 推送到远程

> **分支命名规范**：`feature/xxx`（新功能）、`fix/xxx`（修复）、`docs/xxx`（文档）。团队协作时统一命名规范，便于管理。

## 五、查看历史与撤销

```bash
# 查看提交历史
git log                 # 完整日志
git log --oneline       # 简洁日志（一行一个提交）
git log --graph         # 图形化显示分支结构
git log -p              # 显示每次提交的 diff

# 查看某次提交的具体内容
git show 提交ID         # 查看某次提交的变更

# 撤销操作
git checkout -- 文件名    # 撤销工作区的修改（慎用，会丢失未暂存的修改）
git reset HEAD 文件名     # 从暂存区移出（保留工作区修改）
git reset --soft HEAD~1   # 撤销最近一次 commit，保留修改
git reset --hard HEAD~1   # 彻底撤销最近一次 commit 和修改（不可恢复！）
```

> **安全撤销**：如果不确定操作后果，不要使用 `--hard`。推荐用 `git revert 提交ID` 来撤销，它会创建一个新的"反向提交"，不会丢失历史。

## 六、远程仓库操作

```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin https://github.com/用户名/仓库名.git

# 推送到远程（首次需要设置上游分支）
git push -u origin main

# 之后只需要
git push

# 拉取远程更新
git pull                    # 自动合并
git fetch                   # 只下载不合并（手动合并）
```

## 七、工作中常用的组合场景

### 场景 1：暂存当前工作

开发到一半，需要切换到其他分支处理紧急问题：

```bash
git stash                 # 暂存当前工作区修改
git checkout main         # 切换到 main 分支处理紧急问题
# ... 处理完后 ...
git checkout feature-xxx  # 回到开发分支
git stash pop             # 恢复暂存的工作
```

### 场景 2：解决合并冲突

合并时提示"CONFLICT"（冲突），不要慌：

1. 打开冲突文件，搜索 `<<<<<<<`、`=======`、`>>>>>>>` 标记
2. 手动修改冲突区域，删除标记符号
3. 保存文件 → `git add` → `git commit`

### 场景 3：修改最近一次提交信息

```bash
# 修改最近一次 commit 的信息
git commit --amend -m "新的提交信息"
```

> **重要**：已经推送到远程的分支，不要随意 `amend` 或 `reset`，会导致提交历史不一致。如果必须修改已推送的提交，使用 `git push --force-with-lease`（比 `--force` 更安全）。

---

Git 的学习曲线确实有些陡峭，但日常开发中真正高频使用的命令并不多。建议先把上面这些命令练熟，遇到更复杂的场景时再去查文档。动手实践是最好的学习方式——创建一个测试仓库，反复尝试各种操作，很快就会得心应手。
