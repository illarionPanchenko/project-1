import {
    initialState, fetchDataReducer, change,
    category, onChange, requestDataSuccess,
    requestDataError, fetchData, termReducer, categoryReducer,
    onChangeReducer, workerFetch, watchFetch
} from './products';

import { REQUESTED_DATA_SUCCEEDED, REQUESTED_DATA,
    CHANGE, CATEGORY, ONCHANGE, REQUESTED_DATA_FAILED, FETCH_REQUEST, } from './products';

/*Reducers tests*/
describe('termReducer',()=>{
    it('CHANGE', ()=>{
        const action = {
            type: CHANGE,
            payload: 'text'
        };
        expect(termReducer('', action)).toEqual('text')
    })
});

describe('categoryReducer',()=>{
    it('CHANGE', ()=>{
        const action = {
            type: CATEGORY,
            payload: 'text'
        };
        expect(categoryReducer('/', action)).toEqual('text')
    })
});

describe('onChangeReducer',()=>{
    it('CHANGE', ()=>{
        const action = {
            type: ONCHANGE,
            payload: 'text'
        };
        expect(onChangeReducer('', action)).toEqual('text')
    })
});

describe('fetchDataReducer', ()=>{

    it('should return the initial state', () => {
        expect(fetchDataReducer(undefined, {})).toEqual(initialState)
    });

    it('REQUESTED_DATA', ()=>{
        const action = {
            type: REQUESTED_DATA,
        };
        expect(fetchDataReducer(initialState, action)).toEqual({
            data: [],
            loading: true,
            error: false,
        })
    });

    it('REQUESTED_DATA_ERROR', ()=>{
        const initialStateWithError = {
            data: null,
            loading: false,
            error: 'Unknown error'
        };
        const action = {
            type: REQUESTED_DATA,
        };
        expect(fetchDataReducer(initialStateWithError, action)).toEqual({
            data:[],
            loading: true,
            error: false,
        })
    });

    it('REQUESTED_DATA_SUCCESS', ()=>{
        const initialState = {
          data: [],
          loading: false,
          error: false
        };
        const action = {
            type: REQUESTED_DATA_SUCCEEDED,
            data: [1,2,3]
        };
        expect(fetchDataReducer(initialState, action)).toEqual({
            data: action.data,
            loading: false,
            error: false,
        })
    });
});

/*Actions tests*/
describe('actions', ()=>{
    it('change()', () => {
        const expectedAction = {
            type: CHANGE,
            payload: 'test text',
        };
        expect(change('test text')).toEqual(expectedAction)
    });
    it('category()', () => {
        const expectedAction = {
            type: CATEGORY,
            payload: 'test text',
        };
        expect(category('test text')).toEqual(expectedAction)
    });
    it('onChange()', () => {
        const expectedAction = {
            type: ONCHANGE,
            payload: 'test text',
        };
        expect(onChange('test text')).toEqual(expectedAction)
    });
    it('requestDataSuccess()', () => {
        const expectedAction = {
            type: REQUESTED_DATA_SUCCEEDED,
            data: [1,2,3],
        };
        expect(requestDataSuccess([1,2,3])).toEqual(expectedAction)
    });
    it('requestDataError()', () => {
        const expectedAction = {
            type: REQUESTED_DATA_FAILED,
        };
        expect(requestDataError()).toEqual(expectedAction)
    });
    it('fetchData()', () => {
        const expectedAction = {
            type: FETCH_REQUEST,
        };
        expect(fetchData()).toEqual(expectedAction)
    });
});

/*Saga tests*/
describe('saga', ()=>{
    it('', ()=>{
        expect(workerFetch().next().value.type).toEqual('CALL');
        expect(watchFetch().next().value.type).toEqual('FORK');
    })
});

