<h1 class="title">Secret.js NPM Package</h1>
<p class="subtitle">Secret.js is a package that permits you to save secrets or private things on a dir and get it when you want</p>

## Authors
> NullOnRise (@NullGang)
## Usage
You can use it to all your proyects without credits

Using commonJS:
```js
const { importSecret, exportSecret } = require('secret.js');
```
or
```js
const secret = require('secret.js');
```

Using EcmaScript Modules
```js
import { importSecret, exportSecret } from 'secret.js';
```
or
```js
import secret from 'distrox';
```

Basic Example:
```js
    //CJS
    const { importSecret, exportSecret } = require('secret.js');
    //ECM
    import { importSecret, exportSecret } from 'secret.js';
    exportSecret({
        name: 'MySecret',
        secret: 'MyPassword10328'
    })
    const utilcode = importSecret('UtilCode')
    console.log(utilcode);
```

## Comming in the future
> Not bugged types for typescript
> Save secrets to a api to have it in a mongodb database
> Custom secrets dirname
> VSCode extension for making secrets

## Contributing

You can contribute making a "Pull Request" and adding some codding. Whe check that coding and if it is good whe Pull it.


# Not Important Things
## Modules used in this package
None

## Functions
> ImportSecrets
> ExportSecrets
> LogSecrets
<br>
<br>
<br>
<h5 style="text-align: center;">By the Secret.js Team/h5>