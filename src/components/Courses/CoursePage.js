import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as courseActions from "../../store/actions/courseActions";
import * as authorActions from "../../store/actions/authorActions";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {

  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }

//   constructor(props){
//     super(props);

//     this.state = {
//       course: {
//         title: ""
//       }
//     };
    
// }

// debugger;
// handleChange = event => {
//   const course = { ...this.state.course, title: event.target.value };
//   this.setState({ course });
// };

// handleSubmit = event => {
//   event.preventDefault();
//   this.props.actions.createCourse(this.state.course);
// };
  render() {
 
    return (

      <>
      <h2>Courses</h2>
      <CourseList courses={this.props.courses} />
    </>
  );
}
}
      
//        <form onSubmit={this.handleSubmit}>
//       <h2>Courses</h2>
//       <h3>Add Course</h3>
//       <input
//         type="text"
//         onChange={this.handleChange}
//         value={this.state.course.title}
//       />
//       <input type="submit" value="Save" />
//         {this.props.courses.map(course => (
//           <div key={course.title}>{course.title}</div>
//         ))}
//       </form>); 
//   }
// }


CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { courses:
    state.authors.length === 0
      ? []
      : state.courses.map(course => {
          return {
            ...course,
            authorName: state.authors.find(a => a.id === course.authorId).name
          };
        }),
  authors: state.authors
};
}

function mapDispatchToProps(dispatch) {
  return {
    loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
    loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
