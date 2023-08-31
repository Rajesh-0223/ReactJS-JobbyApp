import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onClickJob = () => {
    const {history} = props
    history.push('/jobs')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="responsive-container">
          <h1 className="heading">Find The Job That Fits Your Life</h1>
          <p className="description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits yor abilities and potential
          </p>
          <Link to="/jobs" className="link">
            <button
              className="find-jobs-button"
              type="submit"
              onClick={onClickJob}
            >
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
