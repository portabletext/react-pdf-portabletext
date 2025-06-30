import os from "os"
import path from "path"

export const snapshotDirectory = path.join(__dirname, "snapshots", os.platform())

console.log("Platform:", os.platform()) // 'darwin' for macOS
console.log("Using directory:", snapshotDirectory)
