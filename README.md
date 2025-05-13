# wework-bot-cli

🚀 一个简单的命令行工具，用于向企业微信机器人发送自定义消息，支持 `markdown` 和 `text` 类型。

## ✨ 特性

- 支持通过命令行参数发送企业微信机器人消息
- 支持传入 Markdown 或纯文本
- 支持读取消息内容文件
- 支持自定义消息类型（如 `markdown`, `text`）
- 使用 `esbuild` 打包，构建快速，体积小巧

---

## 📦 安装

```bash
# 全局安装（推荐）
npm install -g wework-bot-cli
```

## ✅ 使用示例

1. 发送 Markdown 消息（从文件读取）

```bash
wework-bot \
  --webhook "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=YOUR_KEY" \
  --msgtype markdown \
  --file ./msg.md
```

2. 发送 Markdown 消息（直接传字符串）

```bash
wework-bot \
  --webhook "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=YOUR_KEY" \
  --msgtype markdown \
  --content "**部署成功！**\n> 请检查小程序功能是否正常。"
```

3. 发送纯文本消息

```bash
wework-bot \
  --webhook "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=YOUR_KEY" \
  --msgtype text \
  --content "✅ 后端服务已部署完成，请及时验证。"
```
> 📌 替换命令中的 YOUR_KEY 为你的企业微信机器人 webhook 中的 key 参数