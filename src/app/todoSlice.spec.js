import todoReducer, {
    addTodo,
    addTag,
    updateTag,
    removeTodo,
    removeTag,
    setTheme,
    setFilterTerm,
    updateTodo
} from './todoSlice';


  describe('todoreducer', () => {
    const initialState = {
        todolist: [{title: 'test', id: 3, status: 'complete', tag: 'Main', isSelected: false}], 
        tag: [{tag: 'Main', tagId: '9351df0a-5257-4da5-a27d-c9d0edfffe78', color: 'blue'}],
        filterTerm: '',
        theme: 'lightBlue'
    }
    it('should handle initial state', () => {
      expect(todoReducer(undefined, { type: 'unknown' })).toEqual({
        todolist: undefined, 
        tag: undefined,
        filterTerm: '',
        theme: undefined
      });
    });
    it('should add a todo', () => {
        const actual = todoReducer(initialState, addTodo({title: 'test', id: 1, status: 'complete', tag: 'Main', isSelected: false},
        {title: 'test', id: 3, status: 'complete', tag: 'Main', isSelected: false}));

        expect(actual.todolist).toEqual([
            {title: 'test', id: 3, status: 'complete', tag: 'Main', isSelected: false},
            {title: 'test', id: 1, status: 'complete', tag: 'Main', isSelected: false}])
    });
    it('should update an existing todo', () => {
        const actual = todoReducer(initialState, updateTodo({title: 'testing update', id: 1, status: 'incomplete', tag: 'Main', isSelected: false}));

        expect(actual.todolist).toEqual([{title: 'testing update', id: 1, status: 'incomplete', tag: 'Main', isSelected: false}]);
    });
    it('should remove a todo', () => {
        const actual = todoReducer(initialState, removeTodo(1));

        expect(actual.todolist).toEqual([]);
    });
    it('shoud add a tag', () => {
        const actual = todoReducer(initialState, addTag({tag: 'Test', tagId: 'abc123', color: 'orange'}));

        expect(actual.tag).toEqual([{tag: 'Main', tagId: '9351df0a-5257-4da5-a27d-c9d0edfffe78' , color: 'blue'}, {tag: 'Test',tagId: 'abc123', color: 'orange'} ]);
    });
    it('should update a tag', () => {
        const actual = todoReducer(initialState, updateTag({tag: 'Test Update', tagId: '9351df0a-5257-4da5-a27d-c9d0edfffe78' , color: 'yellow'}));

        expect(actual.tag).toEqual([{tag: 'Test Update', tagId: '9351df0a-5257-4da5-a27d-c9d0edfffe78' , color: 'yellow'}, {tag: 'Test',tagId: 'abc123', color: 'orange'}])
    });
    it('should remove a tag given the id', () => {
        const actual = todoReducer(initialState, removeTag('9351df0a-5257-4da5-a27d-c9d0edfffe78'));

        expect(actual.tag).toEqual([{tag: 'Test',tagId: 'abc123', color: 'orange'}]);
    });
    it('should set a theme', () => {
        const actual = todoReducer(initialState, setTheme('darkBlue'));

        expect(actual.theme).toEqual('darkBlue');
    });
    it('should set the filterTerm', () => {
        const actual = todoReducer(initialState, setFilterTerm('complete'));

        expect(actual.filterTerm).toEqual('complete');
    })

  });