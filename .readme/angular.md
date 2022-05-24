# ANGULAR
###### [README](./../README.md)

## Last Update 24-05-22

`ng --version` (Angula CLI: 13.3.6)

`npm view @angular/cli `(Versions LTS Angular)

## CLI - Global
### Always Install LTS version

`npm install -g @angular/cli` 

`npm install -g @angular/cli@13.3.6`

`npm upgrade -g @angular/cli `(last version)

`npm uninstall -g @angular/cli `

`npm cache clean (Clear Cache)`

## CLI - Local Update

`cd front-app` (root past)

`ng update` 

`delete past` `rmdir node_module` and `rmdir package-lock.json`

`npm install`

`ng serve`

# Dependecy
`npm instal @angular/fire` (é preciso instalar o firebase local e Global)
`npm instal firebase` (é preciso instalar o firebase local e Global)

# Setup

## Phats | Easy access to folders
Modify files
 - tsconfig.json
 - tsconfig.app.json,
 - tsconfig.spec.json
```json
"baseUrl": "./",
"paths": {
    "@shared-library/*":["./../library-shared/src/shared/*"],
    "@shared-angular/*":["./src/app/shared/*"],
    "@css/*":["./src/sass/*"],
    "@view/*":["./src/app/view/*"],
    "@method/*":["./src/app/method/*"],
    "@module/*":["./src/app/module/*"],
    "@component/*":["./src/app/component/*"],
    "@repository/*":["./src/app/repository/*"],
  },
```

