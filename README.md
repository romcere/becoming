# 未竟 / Becoming

> Becoming who you want to be.

一个基于 uni-app + Vue3 + TypeScript 开发的个人成长管理应用。

## ✨ 项目简介

「未竟（Becoming）」是一款围绕：

- 习惯养成
- 打卡记录
- 积分激励
- 记账管理
- 奖励兑换

构建的长期成长型应用。

它并不强调“完成”。

而是强调：

> 持续成为更好的自己。

---

## 组件库

[wot-ui v2](https://wot-ui.cn/) 轻量、美观、AI友好的 uni-app 组件库

## 🎈辅助插件

| 插件名                           | 描述                                               |
| -------------------------------- | -------------------------------------------------- |
| vite-plugin-uni-components       | 组件自动按需导入                                   |
| vite-plugin-uni-pages            | 提供基于文件系统的路由                             |
| vite-plugin-uni-layouts          | 提供类 nuxt 的 layouts 系统                        |
| vite-plugin-uni-manifest         | 自动生成 manifest.json 文件                        |
| vite-plugin-uni-platform         | 基于文件名(.<h5\|mp-weixin\|app>.)的按平台编译插件 |
| uni-ku-root                      | 模拟虚拟根组件 (支持 SFC 的 App.vue)               |
| vite-plugin-component-placeholde | 占位组件的原生实现                                 |
|                                  |                                                    |
| unplugin-auto-import             | API 的自动按需导入                                 |

## 辅助模块

| 模块名      | 描述                                       |
| ----------- | ------------------------------------------ |
| pinia       | 符合直觉的 Vue.js 状态管理库               |
| unocss      | 即时按需的原子级 CSS 引擎                  |
| uni-network | 为 uni-app 打造的基于 Promise 的网络请求库 |
| uni-use     | uni-app 组合式工具集                       |
| uni-echarts | 适用于 uni-app 的 Apache ECharts 组件      |
| z-paging    | 高性能、全平台兼容的 uni-app 分页组件      |

## 📦 当前功能

### ✅ 计划功能

- [ ] 记账系统
- [ ] 打卡系统
- [ ] 积分系统
- [ ] 奖励兑换
- [ ] 数据统计
- [ ] 本地数据存储
- [ ] 多端支持
- [ ] 云同步

---

## 🛠 技术栈

- uni-app
- Vue 3
- TypeScript
- Pinia
- Vite

---

## 📁 项目结构

```text
src/
├── pages/
├── modules/
├── stores/
├── services/
├── components/
├── utils/
└── types/
```