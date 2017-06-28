import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList =({courses})=>{
    return (
        <table className='table'>
            <thead>
                <th>&nbsp;</th>
                <th>Tytuł</th>
                <th>Autor</th>
                <th>Kategoria</th>
                <th>Długość</th>
            </thead>
            <tbody>
                {courses.map(course=>
                    <CourseListRow key={course.id} course={course}/>
                )}
            </tbody>
        </table>
    );
};

CourseList.propTypes= {
    courses: PropTypes.object.isRequired
};

export default CourseList;