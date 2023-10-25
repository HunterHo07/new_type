##New Nodejs & TypeScript

#Setting

1. npm init -y
2. touch index.js (create) echo hello > index.ts
3. npm install express
4. npm install typescript
5. npm install @types/express @types/node
6. index.ts

```
         import express, { Express, Request, Response } from "express";
         const port = 8001;
         const app = express();
         app.get("/", (req: Request, res: Response) => {res.send("Hello World!");});
         app.listen(3000, () => {console.log(`Example app listening on port ${port}!`);});
```

package.json

```
"scripts": {
"build": "rimraf dist && npx tsc",
"prestart": "npm run build",
"start": "node dist/index.js",
"preserve": "npm run build",
"serve": "concurrently \"npx tsc -w\" \"nodemon dist/index.js\""
},
```

7. npx tsc --init ("outDir": "./dist",)
8. npm install -d nodemon
9. npm install rimraf
10. npm install concurrently

refer : https://github.com/Colt/express-ts
