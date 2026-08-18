import { courses } from '../data/courses'

export function CourseGrid() {
  return (
    <section className="courses" id="courses" aria-labelledby="courses-title">
      <div className="container course-grid">
        <div className="course-grid__intro">
          <h2 id="courses-title">Check out our most popular courses!</h2>
        </div>
        {courses.map((course) => (
          <article className="course-card" key={course.name}>
            <img className="course-card__icon" src={course.icon} alt="" width="56" height="56" />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <a href="#courses" aria-label={`Get started with ${course.name}`}>
              Get Started
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
