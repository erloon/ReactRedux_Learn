import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from './../../actions/courseActions';
import * as authorActions from './../../actions/authorsActions';
import CourseForm from '../course/CourseForm';
import toastr from 'toastr';

class ManageCoursePage  extends React.Component{
    constructor(props,context){
        super(props,context);
    this.state ={
        course:Object.assign({},this.props.course),
        errors:{},
        saving: false
        };
        this.updateCourseState=this.updateCourseState.bind(this);
        this.saveCourse=this.saveCourse.bind(this);
    }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // potrzebujemy do update formularza w momencie gdy ajax skonczy pobieranie kursu. wtedu odswierzy widok
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
redirect() {
    this.setState({saving: false});
    toastr.success('Kurs został zapisany');
    this.context.router.push('/courses');
  }

saveCourse(event){
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
    .then(()=> this.redirect())
    .catch(error => {
        toastr.error(error);
    });
}
    render(){
        return(
        <div>
            <CourseForm
            course={this.state.course}
            onChange={this.updateCourseState}
            onSave={this.saveCourse}
            allAuthors={this.state.authors}
            errors={this.state.errors}
            />
        </div>);
    }
}
ManageCoursePage.propTypes ={
     course: PropTypes.object.isRequired,
     authors: PropTypes.array.isRequired,
     actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course) return course[0]; 
  return null;
}

function mapStateToProps(state,ownProps){
     const courseId = ownProps.params.id; // pobranie wartości ze ścieżki `/course/:id`
    let course ={id:'',watchHref:'',title:'',authorId:'',length:'',category:''};

    if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
     }

    const authorsFormattedForDropDown = state.authors.map(author=>{
        return{
            value: author.id,
            text: author.firstName+ ' '+ author.lastName
        };
    });

    return {
    course:course,
    authors:authorsFormattedForDropDown
    };
}

function mapDispatchToProps(dispatch){
    return {
         actions: bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);