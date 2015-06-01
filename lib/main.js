var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "https://www.xing.com/*",
  contentScriptFile: "./xing.js"
});
