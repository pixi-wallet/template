# template ts project for libs

project is configured and build with typescript compiler for module(es6) and commonjs 
so project can be consumed in browser and nodejs

also it provides config for jest testing and github manual action to release npm package with github registry
## structure 

```
src/index.ts -> main export point 
src/functions/index.ts -> export separate functions


```

## to release new project to github to npm registry
1. change template in package.json to project name with replace all entries. 
2. in package.json bump version
3. open https://github.com/mkabanau/template/actions/workflows/npm-publish-github-packages.yml
4. press run workflow
5. consume package by configuring .npmrc as github does not allow access to public libs without github token. add NODE_AUTH_TOKEN and GITHUB_TOKEN as public envs. token can be generated at https://github.com/settings/tokens/new with scope read:packages Download packages from GitHub Package Registry
6. npm i @pixi-wallet/template

