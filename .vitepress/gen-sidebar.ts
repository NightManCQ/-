import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const 当前文件名 = fileURLToPath(import.meta.url);
const 当前目录 = path.dirname(当前文件名);

// 文档根目录路径
const 文档目录 = path.join(当前目录, '../历史正文');

/**
 * 侧边栏项接口定义
 */
interface 侧边栏项 {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: 侧边栏项[];
}

/**
 * 递归获取目录下的所有 Markdown 文件和子目录结构
 * @param 目录路径 - 要扫描的目录绝对路径
 * @param 相对路径 - 相对于文档根目录的路径
 * @returns 侧边栏项数组
 */
function 获取目录结构(目录路径: string, 相对路径: string = ''): 侧边栏项[] {
  const 侧边栏项目: 侧边栏项[] = [];
  
  try {
    // 读取目录内容
    const 条目列表 = fs.readdirSync(目录路径, { withFileTypes: true });
    
    // 分离文件夹和文件（排除隐藏文件和 index.md）
    const 文件夹列表 = 条目列表.filter(条目 => 
      条目.isDirectory() && !条目.name.startsWith('.')
    );
    const 文件列表 = 条目列表.filter(条目 => 
      条目.isFile() && 条目.name.endsWith('.md') && 条目.name !== 'index.md'
    );
    
    // 处理 Markdown 文件
    文件列表.forEach(文件 => {
      const 文件名 = path.basename(文件.name, '.md');
      const 链接路径 = path.join(相对路径, 文件名).replace(/\\/g, '/');
      侧边栏项目.push({
        text: 文件名,
        link: `/${链接路径}`
      });
    });
    
    // 处理子目录（递归）
    文件夹列表.forEach(文件夹 => {
      const 子目录路径 = path.join(目录路径, 文件夹.name);
      const 子相对路径 = path.join(相对路径, 文件夹.name);
      const 子项目列表 = 获取目录结构(子目录路径, 子相对路径);
      
      // 只有当子目录中有内容时才添加
      if (子项目列表.length > 0) {
        侧边栏项目.push({
          text: 文件夹.name,
          collapsed: false,
          items: 子项目列表
        });
      }
    });
    
  } catch (错误) {
    console.error(`读取目录失败 ${目录路径}:`, (错误 as Error).message);
  }
  
  return 侧边栏项目;
}

/**
 * 生成完整的侧边栏配置
 * @returns 侧边栏配置数组
 */
export function 生成侧边栏(): 侧边栏项[] {
  console.log('正在扫描文档目录:', 文档目录);
  const 侧边栏配置 = 获取目录结构(文档目录);
  return 侧边栏配置;
}

// 如果直接运行此脚本，则输出 JSON 格式的配置
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const 侧边栏 = 生成侧边栏();
  console.log('\n生成的侧边栏配置:\n');
  console.log(JSON.stringify(侧边栏, null, 2));
}
