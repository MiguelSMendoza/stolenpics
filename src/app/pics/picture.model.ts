export class Picture {
    public $key: string;

      constructor(
          public url: string,
          public uid: string[],
          public userPhoto: string,
          public userName: string,
          public likes: number,
          public timestamp: number
      ) { }
  }
