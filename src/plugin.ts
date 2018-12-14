import { Provide } from '@jib/cli';
import * as Listr from 'listr';

/**
 * Listr plugin for @jib/cli
 */
@Provide()
export class JibListr {
  public list(tasks: Listr.ListrTask[], options?: Listr.ListrOptions): Listr {
    return new Listr(tasks, options);
  }
}
