
import '@testing-library/jest-dom/extend-expect';

const getTodoList = require('./app/todoSlice');

test('Function returns', () => {
    expect(getTodoList()).toBeDefined()
});
