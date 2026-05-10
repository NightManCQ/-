# 部署到 GitHub Pages

## 📋 部署前准备

### 1. 确认仓库设置

确保你的 GitHub 仓库是 `NightManCQ/-`，并且：
- ✅ 仓库已创建
- ✅ 你有推送权限
- ✅ 默认分支是 `master`
- ✅ GitHub Pages 已启用（从 master 分支）

### 2. 配置 GitHub Pages

在 GitHub 仓库中：
1. 进入 **Settings** → **Pages**
2. **重要**：保持当前设置不变（从 master 分支构建）
3. GitHub Actions 会自动处理部署，无需更改 Source 设置

## 🚀 部署步骤

### 方法一：自动部署（推荐）

```bash
# 1. 进入项目目录
cd /home/cq/Documents/中文rust/历史正文

# 2. 初始化 Git（如果还没有）
git init
git add .
git commit -m "init: vitepress blog site"

# 3. 添加远程仓库
git remote add origin git@github.com:NightManCQ/-.git

# 4. 推送到 master 分支
git branch -M master
git push -u origin master
```

推送后，GitHub Actions 会自动构建和部署。

### 方法二：手动触发部署

如果已经推送了代码，可以：
1. 进入 GitHub 仓库的 **Actions** 标签
2. 找到 **Deploy VitePress site to Pages** 工作流
3. 点击 **Run workflow** → **Run workflow**

## 📊 查看部署状态

### 1. 查看构建日志
- 进入仓库的 **Actions** 标签
- 查看最新的工作流运行状态
- 点击具体的运行记录查看详细日志

### 2. 访问网站
部署成功后，访问：
- 🌐 **https://nightmancq.github.io/-/**

首次部署可能需要 1-3 分钟。

## ⚙️ 关键配置说明

### base 路径配置

在 `.vitepress/config.js` 中：
```javascript
export default defineConfig({
  base: '/-/',  // 部署到子路径
  // ... 其他配置
})
```

这确保了所有资源链接都正确指向 `/-/` 子路径。

### 目录结构

```
历史正文/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 配置
├── .vitepress/
│   └── config.js            # VitePress 配置（包含 base: '/blog/'）
├── 历史正文/                # 文档源文件
│   ├── index.md
│   ├── 对联文明/
│   └── en/
└── package.json
```

## 🔧 本地测试生产构建

在部署前，可以在本地测试生产版本：

```bash
# 1. 构建生产版本
npm run docs:build

# 2. 预览生产版本
npm run docs:preview
```

预览服务器会启动在 http://localhost:4173/blog/

## 🐛 常见问题

### 1. 404 错误
**问题**：访问网站显示 404  
**解决**：
- 检查 `base` 配置是否为 `/blog/`
- 等待几分钟让 GitHub Pages 完成部署
- 清除浏览器缓存

### 2. 样式丢失
**问题**：页面没有 CSS 样式  
**解决**：
- 确认 `base` 配置正确
- 检查浏览器控制台是否有资源加载错误
- 重新构建并推送

### 3. Actions 失败
**问题**：GitHub Actions 运行失败  
**解决**：
- 查看 Actions 日志找出错误原因
- 确保 `package.json` 中有正确的 scripts
- 检查 Node.js 版本兼容性

### 4. 自定义域名
如果想使用自定义域名：
1. 在仓库 **Settings** → **Pages** → **Custom domain** 中添加域名
2. 在 `public` 目录中创建 `CNAME` 文件
3. 移除或注释掉 `base` 配置

## 📝 更新内容

每次更新文档后：

```bash
git add .
git commit -m "update: 更新文档内容"
git push
```

GitHub Actions 会自动重新部署。

## 🎯 下一步

部署成功后，你可以：
- ✅ 分享网站链接
- ✅ 添加更多文档内容
- ✅ 配置自定义域名
- ✅ 启用评论系统
- ✅ 添加分析统计

---

**注意**：首次部署可能需要几分钟时间，请耐心等待。
