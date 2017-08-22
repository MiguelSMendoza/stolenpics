import { Thief } from './thief.model';

export class Picture {
    public $key: string;

      constructor(
          public url: string,
          public thiefs: Thief[],
          public owner: Thief,
          public likes: Thief[],
          public timestamp: number
      ) { }
  }
