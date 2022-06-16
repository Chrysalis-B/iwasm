Web Assembly exercise project

1. Run `nvm use` and `npm i`
2. Compile code inside `assembly/index.ts` to WebAssembly with `npm run asbuild`
3. The module exposes a function called `minusOne`
4. Start web server to serve the module with `npm start` -> you should see the output of the `minusOne`function in the browser.
5. To use module in Node REPL run `node --experimental-repl-await` and then import the module with `let iwasm = await import('iwasm');` -> function can then be called like so `iwasm.minusOne(number)`