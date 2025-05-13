import fs from "node:fs"
import axios from "axios"
import { program } from "commander"

program
  .requiredOption("--webhook <url>", "企业微信机器人 Webhook 地址")
  .requiredOption("--msgtype <type>", "消息类型，如 markdown, text")
  .option("--content <text>", "消息内容，直接传字符串")
  .option("--file <path>", "消息内容文件路径")

program.parse(process.argv)
const opts = program.opts()

// 检查 msgtype 是否支持
const supportedMsgTypes = ["markdown", "text"]
if (!supportedMsgTypes.includes(opts.msgtype)) {
  console.error(`❌ 不支持的 msgtype: ${opts.msgtype}`)
  process.exit(1)
}

let content = ""
if (opts.content) {
  content = opts.content
} else if (opts.file) {
  try {
    content = fs.readFileSync(opts.file, "utf-8")
  } catch (e) {
    console.error(`❌ 无法读取文件: ${opts.file}`)
    process.exit(1)
  }
} else {
  console.error("❌ 请使用 --content 或 --file 提供消息内容")
  process.exit(1)
}

const payload = {
  msgtype: opts.msgtype,
  [opts.msgtype]: { content },
}

async function send() {
  try {
    const res = await axios.post(opts.webhook, payload)
    if (res.data.errcode === 0) {
      console.log("✅ 消息发送成功")
    } else {
      console.error("❌ 发送失败:", res.data)
    }
  } catch (err) {
    console.error("❌ 请求失败:", err.message)
  }
}

send()
