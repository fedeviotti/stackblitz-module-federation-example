// You can write your own logic here to determine the actual url
// @ts-ignore
window.app2Url = "http://localhost:3002"
// @ts-ignore
window.app3Url = "http://localhost:3003"

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
