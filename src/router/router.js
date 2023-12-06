import OnlineExam from '../Componets/OnlineExams/onlineExam';
import { Routes, Route } from "react-router-dom"
import ExamQuestion from '../Componets/OnlineExams/examQuestion';
import ExamResult from '../Componets/OnlineExams/ExamResult';
import Jobs from '../Componets/jobs/jobs';
import JobSearch from '../Componets/jobs/jobSearch';
import JobDetails from '../Componets/jobs/JobDeatails';
import JobApply from '../Componets/jobs/jobApply';
import StudentPortal from '../Componets/StudentPortal/StudentPortal';
import InstructorPortal from '../Componets/instructor/InstructorPortal';
const Router = () => {
    return ( 
    <>
      <Routes>
          <Route path='online' element={<OnlineExam/>}>
            <Route path='' element={<ExamQuestion/>}/>
            <Route path='res' element={<ExamResult/>}/>
          </Route>
          <Route path='student' element={<StudentPortal/>}/>
          <Route path='' element={<InstructorPortal/>}/>
          <Route path='jobs' element={<Jobs/>}>
            <Route path='' element={<JobSearch/>}/>
            <Route path='jobDetails' element={<JobDetails/>}/>
            <Route path='jobAplly' element={<JobApply/>}/>
          </Route>
      </Routes>
    </> );
}
 
export default Router;