import * as types from './actionsTypes';
import courseApi from '../api/mockCourseApi';

export function loadCourcesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses=>{
            dispatch(loadCourcesSuccess(courses));
        }).catch(error=>{
            throw(error);
        });
    };
}