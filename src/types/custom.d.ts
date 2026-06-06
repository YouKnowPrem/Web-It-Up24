declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options: any);
    destroy(): void;
    update(): void;
    on(event: string, callback: (args: any) => void): void;
    scrollTo(target: any, arg1?: any, arg2?: any): void;
    scroll: {
      instance: {
        scroll: {
          x: number;
          y: number;
        }
      }
    };
  }
}
