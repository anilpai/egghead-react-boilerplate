# React Boilerplate


 ```yarn build --mode development```

 ```yarn babel ./src/greet.js --presets=@babel/preset-env```


### Once Webpack is configured .. 

To run in development

```yarn dev```

To run in production

```yarn build```

To run in dev using hot reloading

```yarn dev:hot```

Bundle Analyzer

```open dist/bundle_sizes.html```


If using latest react, following babel plugin is not required `@babel/plugin-syntax-dynamic-import`


Note:

@babel/plugin-syntax-dynamic-import might be required (Dynamic Import Syntax Issue)
Install dev-dependencies [bable-jest & babel-core@bridge] (Babel-Core Errors)

configure test env for .babelrc

"env:{
    "test": {
        "plugins": ["dynamic-import-node"]
    }
}
