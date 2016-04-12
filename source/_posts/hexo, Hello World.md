---
title: hexo, Hello World
tags: hexo
grammar_cjkRuby: true
---

### 前言
某天突发奇想的想弄个个人网站，然而技术不行，从前端到后台需要大量的精力去学习，再加上服务器的搭建维护，想想就头疼了，然后意外发现了hexo这个东西，简单省事，于是尝试着套用一番。

### 简介
hexo是一款基于Node.js的静态博客框架，通过github上的git page静态网站托管服务 ，然后使用markdown语言编辑好博文，就可以很轻松的搭建好一个个人博客。

### 主要过程

#### 环境准备

 1. 安装[Node.js][1]，作为Javascript运行环境
 2. 准备GIT环境，提交代码到github
 3. 安装[Hexo][2]，用以生产静态博客

#### 发布流程

完成环境准备后，在一自定义目录下使用命令    `hexo init`即可完成hexo框架的初始化，生成hexo框架的文件目录。

之后，运行`hexo g`会在.deploy_git目录下生成静态博客页面，运行`hexo s`开启本地调试模式，可以在浏览器输入http://localhost:4000 查看效果，至此完成页面生成。

接下来的任务就是将博客部署到github page服务上，通过修改配置文件"\_config.yml"，然后运行命令`hexo d`可以很轻松的实现代码部署。需要注意的是，github上的项目名需要与用户名相同，才可以通过 http://xx.github.io 直接访问托管的页面。

### 其他
如果需要将GITHUB PAGE上的页面映射到自己的域名上，需要配置www的记录到学习学习xx..github.io，A记录可以通过Ping查blog的IP再进行映射，此外，需要在GITHUB项目下新建CNAME文件并添加域名。

除了github外，[coding.net][3]同样支持git page服务，而且速度不错，操作相对简单，可以被百度检索。



  [1]: https://nodejs.org/en/
  [2]: https://hexo.io/zh-cn/
  [3]: https://coding.net/