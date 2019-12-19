import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as courseActions from "../../store/actions/courseActions";
import * as authorActions from "../../store/actions/authorActions";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../shared/Spinner";
import { toast } from "react-toastify";
import axios from 'axios';


class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  };

  componentDidMount() {
    axios.get("http://localhost:3001/courses").then(res=>{
      console.log(res)
    });

    // debugger;
    const { courses, authors, actions } = this.props;
    console.log(this.props);
  

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

  
  handleDeleteCourse = async course => {
    toast.success("Course deleted");
    try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

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
    // debugger;
    return (

      <>
      {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
      <h2>Courses</h2>
      {this.props.loading ? (
        <Spinner />
      ) : (
        
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => this.setState({ redirectToAddCoursePage: true })}
          >
            Add Course
          </button>

          <CourseList
            onDeleteClick={this.handleDeleteCourse}
            courses={this.props.courses}
          />
        </>
      )}
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
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  console.log(state);
  return { courses:
    state.authors.length === 0
      ? []
      : state.courses.map(course => {
          return {
            ...course,
            authorName: state.authors.find(a => a.id === course.authorId).name
          };
        }),
   authors: state.authors,
   loading: state.apiCallsInProgress > 0
  //authors: state.authors.state
};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
    loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
    loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
  }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
