import { TodoEntry } from './todo-entry';

describe('TodoEntry', () => {
  it('should create an instance', () => {
    expect(new TodoEntry('Rasen mähen')).toBeTruthy();
  });
});
