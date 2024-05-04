export type Foobar = 'foo' | 'bar';

export function foobar(value: Foobar): string {
  return `This is ${value}`;
}
