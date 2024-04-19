export function testDecorator(value, ctx) {
  if (!ctx || ctx.kind !== 'class') {
    throw new Error('This decorator can only be applied to classes');
  }

  return class extends value {
    constructor(...args) {
      super(...args);
      console.log('test');
    }
  };
};
