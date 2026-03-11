import { spawnSync } from 'node:child_process'
import process from 'node:process'

const allowedDemoKeys = ['restaurant', 'landscaping', 'roofing']
const demoKeys = process.argv.slice(2)

if (demoKeys.length === 0) {
  console.error(
    `[build-demo] Missing demo key. Allowed keys: ${allowedDemoKeys.join(', ')}.`
  )
  process.exit(1)
}

for (const demoKey of demoKeys) {
  if (!allowedDemoKeys.includes(demoKey)) {
    console.error(
      `[build-demo] Unknown demo key "${demoKey}". Allowed keys: ${allowedDemoKeys.join(', ')}.`
    )
    process.exit(1)
  }

  console.log(`[build-demo] Building "${demoKey}"...`)

  const command =
    process.platform === 'win32'
      ? {
          executable: process.env.ComSpec ?? 'cmd.exe',
          args: ['/d', '/s', '/c', 'npm run build'],
        }
      : {
          executable: 'npm',
          args: ['run', 'build'],
        }

  const result = spawnSync(command.executable, command.args, {
    stdio: 'inherit',
    env: {
      ...process.env,
      VITE_DEMO_KEY: demoKey,
    },
  })

  if (result.error) {
    console.error(`[build-demo] Failed to start build for "${demoKey}".`, result.error)
    process.exit(1)
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}
