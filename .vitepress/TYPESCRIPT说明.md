# TypeScript 中文代码说明

## 📋 概述

本项目已转换为使用 **TypeScript** 编写，并且所有代码（包括变量名、函数名、注释）都使用**中文**。

## 📁 文件结构

```
.vitepress/
├── config.ts          # VitePress 配置文件（TypeScript）
├── gen-sidebar.ts     # 侧边栏自动生成脚本（TypeScript）
└── ...
```

## 🎯 核心特性

### 1. 完全中文化代码

所有标识符都使用中文命名：

```typescript
// 变量命名
const 文档目录 = path.join(当前目录, '../历史正文')
const 侧边栏项目: 侧边栏项[] = []

// 函数命名
function 获取目录结构(目录路径: string, 相对路径: string = ''): 侧边栏项[]
export function 生成侧边栏(): 侧边栏项[]

// 接口定义
interface 侧边栏项 {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: 侧边栏项[];
}
```

### 2. TypeScript 类型安全

- ✅ 完整的类型定义
- ✅ 编译时类型检查
- ✅ IDE 智能提示支持

### 3. 自动侧边栏生成

扫描 `历史正文` 目录，自动生成侧边栏配置：

```typescript
// config.ts 中使用
sidebar: 生成侧边栏()
```

## 🔧 技术细节

### 导入方式

```typescript
import { defineConfig } from 'vitepress'
import { 生成侧边栏 } from './gen-sidebar.js'  // 注意：导入时仍用 .js 扩展名
```

**重要提示**：虽然文件是 `.ts`，但在 ES Module 中导入时仍需使用 `.js` 扩展名。这是 TypeScript + ESM 的标准做法。

### 类型定义

```typescript
interface 侧边栏项 {
  text: string;           // 显示文本
  link?: string;          // 链接地址（可选）
  collapsed?: boolean;    // 是否折叠（可选）
  items?: 侧边栏项[];     // 子项（可选）
}
```

### 递归扫描逻辑

```typescript
function 获取目录结构(目录路径: string, 相对路径: string = ''): 侧边栏项[] {
  // 1. 读取目录
  const 条目列表 = fs.readdirSync(目录路径, { withFileTypes: true })
  
  // 2. 分离文件和文件夹
  const 文件夹列表 = 条目列表.filter(...)
  const 文件列表 = 条目列表.filter(...)
  
  // 3. 处理文件
  文件列表.forEach(文件 => { ... })
  
  // 4. 递归处理文件夹
  文件夹列表.forEach(文件夹 => {
    const 子项目列表 = 获取目录结构(子目录路径, 子相对路径)
    ...
  })
  
  return 侧边栏项目
}
```

## 🚀 使用方法

### 启动开发服务器

```bash
npm run docs:dev
```

VitePress 会自动编译 TypeScript 文件。

### 测试侧边栏生成

```bash
node .vitepress/gen-sidebar.ts
```

会输出 JSON 格式的侧边栏配置。

### 构建生产版本

```bash
npm run docs:build
```

## 💡 优势

### 1. 代码可读性
- ✅ 中文命名更符合思维习惯
- ✅ 减少英中翻译的认知负担
- ✅ 注释和代码语言一致

### 2. 类型安全
- ✅ 编译时捕获错误
- ✅ IDE 提供更好的智能提示
- ✅ 重构更安全

### 3. 自动化
- ✅ 无需手动维护侧边栏
- ✅ 新增文件自动出现
- ✅ 目录结构实时同步

## ⚠️ 注意事项

### 1. 文件扩展名
在 TypeScript ESM 项目中：
- 源文件：`.ts`
- 导入语句：`.js`（不是 `.ts`）

```typescript
// ✅ 正确
import { 生成侧边栏 } from './gen-sidebar.js'

// ❌ 错误
import { 生成侧边栏 } from './gen-sidebar.ts'
```

### 2. Node.js 版本
需要 Node.js 16+ 以支持 ES Modules 和 TypeScript。

### 3. 隐藏文件
脚本会自动跳过：
- 以 `.` 开头的隐藏文件夹
- `index.md` 文件（作为目录首页）

## 📝 扩展示例

### 自定义排序

```typescript
// 在 获取目录结构 函数中添加排序逻辑
文件列表.sort((a, b) => {
  return a.name.localeCompare(b.name, 'zh-CN')
})
```

### 过滤特定文件

```typescript
const 文件列表 = 条目列表.filter(条目 => 
  条目.isFile() && 
  条目.name.endsWith('.md') && 
  条目.name !== 'index.md' &&
  !条目.name.startsWith('草稿-')  // 排除草稿文件
)
```

### 添加图标或元数据

```typescript
interface 侧边栏项 {
  text: string;
  link?: string;
  icon?: string;      // 添加图标
  order?: number;     // 添加排序权重
  collapsed?: boolean;
  items?: 侧边栏项[];
}
```

## 🎨 代码风格

本项目采用以下中文代码风格：

1. **变量名**：使用名词或名词短语
   - `文档目录`、`侧边栏项目`、`条目列表`

2. **函数名**：使用动词或动宾短语
   - `获取目录结构`、`生成侧边栏`

3. **接口名**：使用名词
   - `侧边栏项`

4. **注释**：使用 JSDoc 格式
   ```typescript
   /**
    * 函数说明
    * @param 参数名 - 参数说明
    * @returns 返回值说明
    */
   ```

## 🔗 相关资源

- [VitePress TypeScript 配置](https://vitepress.dev/guide/typescript)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [ES Modules 规范](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

---

**提示**：这种中文化编码方式特别适合中文开发者团队，可以显著降低理解成本！
