# ANGULAR - Last Update 15-05-23

## [README](./../README.md)

`ng version` (Angula CLI: 15.2.8 era 14.2.10)

`npm view @angular/cli` (Versions LTS Angular)

`npm install -g @angular/cli@15` (Version LTS)

`npm uninstall -g @angular/cli`

`npm cache clean (Clear Cache)`

## CLI - Local Update

`cd front` (root past/angular)

`ng update` (Update Last Version)

Delete Past: `rm -rf node_modules .angular` and `rm package-lock.json`

`npm install`

`ng serve`

# Dependecy / Global e Local

`npm instal firebase` (é preciso instalar o firebase local e Global)

`npm instal @angular/fire` (é preciso instalar o firebase local e Global)

`npm install --save firebase-functions@latest` (acesse a pasta back e execute)


# Setup

## Phats | Easy access to folders
Modify files
 - tsconfig.json
 - tsconfig.app.json,
 - tsconfig.spec.json
```json
"baseUrl": "./",
"paths": {
    "@domain/*":["./../domain/src/shared/*"],
    "@shared-angular/*":["./src/app/shared/*"],
    "@css/*":["./src/sass/*"],
    "@view/*":["./src/app/view/*"],
    "@method/*":["./src/app/method/*"],
    "@module/*":["./src/app/module/*"],
    "@component/*":["./src/app/component/*"],
    "@repository/*":["./src/app/repository/*"],
  },
```

