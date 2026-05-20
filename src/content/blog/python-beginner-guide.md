---
title: "Python 入门指南：从零开始写第一个程序"
description: "适合完全零基础的新手，手把手教你安装 Python 并写出第一个程序。"
date: 2026-05-08
category: "programming"
tags:
  - Python
  - 编程入门
  - 教程
premium: false
---

Python 是目前最流行的编程语言之一，语法简洁，适合初学者入门。

## 一、安装 Python

1. 访问 [python.org](https://python.org) 下载最新版本
2. 安装时记得勾选 **"Add Python to PATH"**
3. 打开终端（CMD 或 PowerShell），输入 `python --version` 验证安装

## 二、第一个程序

创建一个名为 `hello.py` 的文件，写入：

```python
print("Hello, World!")
```

在终端中运行：

```bash
python hello.py
```

## 三、基础语法

### 变量与数据类型

```python
name = "小明"      # 字符串
age = 25           # 整数
height = 1.75      # 浮点数
is_student = True  # 布尔值
```

### 条件判断

```python
if age >= 18:
    print("成年人")
else:
    print("未成年人")
```

### 循环

```python
# for 循环
for i in range(5):
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1
```

## 四、实用学习资源

- [Python 官方文档](https://docs.python.org/zh-cn/3/)（中文版）
- [廖雪峰的 Python 教程](https://www.liaoxuefeng.com/wiki/1016959663602400)

---

坚持下去，两周你就能写出实用的脚本！有什么问题欢迎留言交流。
