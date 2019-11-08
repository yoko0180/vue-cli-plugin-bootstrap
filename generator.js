module.exports = api => {
  api.injectImports(api.entryFile, `import 'bootstrap/dist/css/bootstrap.min.css'`)

  api.extendPackage({
    dependencies: {
      'bootstrap': '^4.3.1'
    }
  })
}
