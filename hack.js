const path = require("path");
const fse = require("fs-extra");

const enginesPackage =  path.dirname(
  require.resolve(
    "@prisma/engines/package.json",
    {
      paths: [path.dirname(require.resolve("prisma/package.json"))]
    }
  )
);

const outDir = path.join(__dirname, "node_modules", "prisma", "node_modules", "@prisma");
fse.mkdirpSync(outDir);
fse.copySync(enginesPackage, outDir);
