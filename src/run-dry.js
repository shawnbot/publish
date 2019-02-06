module.exports = function runDry(cmd, args, execOpts) {
  console.warn(`[run] ${JSON.stringify(cmd)} ${JSON.stringify(args)} (${JSON.stringify(execOpts)})`)
  return Promise.resolve({stdout: '', stderr: ''})
}