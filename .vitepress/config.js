import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '对联文明',
  description: '对联文明思想体系文档',
  
  // 部署到 GitHub Pages 子路径 /-/
  base: '/-/',
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      title: '对联文明',
      description: '对联文明思想体系文档',
      themeConfig: {
        // 导航栏
        nav: [
          { text: '首页', link: '/index' },
          { text: '对联文明', link: '/对联文明/对联文明 · 最终体系总结' },
        ],
        
        // 侧边栏配置
        sidebar: [
          {
            text: '对联文明',
            items: [
              { text: '最终体系总结', link: '/对联文明/对联文明 · 最终体系总结' },
              { text: '对抗熵增的思想实验', link: '/对联文明/对联文明体系：一个对抗熵增的思想实验' },
              { text: '劳动与晋升模型', link: '/对联文明/对联文明 · 劳动与晋升模型' },
              { text: '游戏化落地蓝图', link: '/对联文明/对联文明 · 游戏化落地蓝图' },
              { text: '众筹经济模型', link: '/对联文明/对联文明·众筹经济模型 最终总结' },
            ]
          },
          {
            text: '技能',
            collapsed: false,
            items: [
              { text: '总结叙事 v1', link: '/对联文明/技能/总结叙事v1' },
              { text: '总结叙事 v2', link: '/对联文明/技能/总结叙事v2' },
            ]
          }
        ],
        
        // 搜索配置（使用本地搜索）
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        },
        
        // 文档页面底部导航
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        
        // 大纲标题
        outline: {
          label: '页面导航'
        },
        
        // 最后更新时间
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        
        // 深色模式切换
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        
        // 侧边栏折叠按钮
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        
        // 页脚
        footer: {
          message: '基于 VitePress 构建',
          copyright: 'Copyright © 2024 对联文明'
        }
      }
    },
    // 英文版本（可选，未来可以添加）
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'Couplet Civilization',
      description: 'Couplet Civilization Thought System Documentation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Documents', link: '/en/documents' },
        ],
        sidebar: [
          {
            text: 'Documents',
            items: [
              { text: 'Coming Soon', link: '/en/documents' },
            ]
          }
        ],
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate'
                }
              }
            }
          }
        },
        footer: {
          message: 'Built with VitePress',
          copyright: 'Copyright © 2024 Couplet Civilization'
        }
      }
    }
  },
  
  // 指定源文件目录为历史正文子目录
  srcDir: './历史正文',
  
  // 忽略某些文件或目录
  ignoreDeadLinks: true,
  
  themeConfig: {
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/your-repo' }
    ]
  }
})
