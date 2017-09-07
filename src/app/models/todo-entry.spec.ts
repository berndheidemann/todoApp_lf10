import {TodoEntry} from './todo-entry';

describe('TodoEntry', () => {
  it('should create an instance', () => {
    expect(new TodoEntry(1, 'Rasen mähen')).toBeTruthy();
  });
});
