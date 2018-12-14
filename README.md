# Jib Listr Plugin

Add [`listr`](https://www.npmjs.com/package/listr) to `@jib/cli` projects.

[![wercker status](https://app.wercker.com/status/cd7b90d39a30352c16ced5393564820c/s/master "wercker status")](https://app.wercker.com/project/byKey/cd7b90d39a30352c16ced5393564820c)

![listr](https://raw.githubusercontent.com/SamVerschueren/listr/HEAD/media/screenshot.gif)

## About

This project was generated using the [`jib`](https://www.npmjs.com/package/@jib/jib)
command line generator.

## Usage

```shell
npm install --save @jib/listr
```

Using within `@jib/cli` commands:

```typescript
import { Command, Plugin } from '@jib/cli';
import { JibListr } from '@jib/listr';

@Command({/* */})
class MyCustomCommand {
  // inject plugin
  @Plugin(JibListr)
  public helper: JibListr;

  public async run(options: any, ...args: string[]) {
    return this.helper.list([
      //...
    ]);
  }
}
```