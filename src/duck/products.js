import { call, put, takeEvery } from "redux-saga/effects";
/* Types */
export const CHANGE = 'CHANGE';
export const ONCHANGE = 'ONCHANGE';
export const CATEGORY = 'CATEGORY';
export const REQUESTED_DATA_SUCCEEDED = 'REQUESTED_DATA_SUCCEEDED';
export const REQUESTED_DATA_FAILED = 'REQUESTED_DATA_FAILED';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const REQUESTED_DATA = 'REQUESTED_DATA';
/* Reducers */
export const termReducer = (state = '', action) => {
    switch (action.type) {
        case CHANGE:
            return state = action.payload;
        default:
            return state;
    }
};
export const categoryReducer = (state = '/', action) => {
    switch (action.type) {
        case CATEGORY:
            return state = action.payload;
        default:
            return state;
    }
};
export const onChangeReducer = (state = '', action) => {
    switch (action.type) {
        case ONCHANGE:
            return state = action.payload;
        default:
            return state;
    }
};

export const initialState = {
    data: [],
    loading: false,
    error: false,
};

export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_DATA:
            return {
                data: [],
                loading: true,
                error: false,
            };
        case REQUESTED_DATA_SUCCEEDED:
            return {
                data: action.data,
                loading: false,
                error: false,
            };
        case REQUESTED_DATA_FAILED:
            return {
                data: [],
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

/* Actions */
export function change(data) {
    return {
        type: CHANGE,
        payload: data
    }
}

export function category(data) {
    return {
        type: CATEGORY,
        payload: data
    }
}

export function onChange(data) {
    return {
        type: ONCHANGE,
        payload: data
    }
}

export function requestDataSuccess(data) {
    return {type: REQUESTED_DATA_SUCCEEDED, data: data}
}

export function requestDataError() {
    return {type: REQUESTED_DATA_FAILED}
}

export function fetchData() {
    return {type: FETCH_REQUEST}
}

/* Side effects */
export function* watchFetch() {
    yield takeEvery(FETCH_REQUEST, workerFetch);
}

export function* workerFetch() {
    try {
        const data = yield call(() => {
            return fetch('/base.json').then((res) => res.json())
        });
        yield put(requestDataSuccess(data))
    } catch (error) {
        yield put(requestDataError())
    }
}
