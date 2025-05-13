import esbuild from "esbuild"

esbuild
  .build({
    entryPoints: ["src/index.js"],
    bundle: true,
    platform: "node",
    outfile: "dist/index.js",
    banner: {
      js: "#!/usr/bin/env node",
    },
    minify: true,
    external: ["fs"], // 保留 node 核心模块
  })
  .catch(() => process.exit(1))
