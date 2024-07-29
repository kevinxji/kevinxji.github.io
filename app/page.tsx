import { BlogPosts } from 'app/components/posts'
import profilepic from 'app/images/IMG_9317.jpg';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <img></img>
      <p className="mb-4">
        {`I'm a recent college graduate looking for software engineering roles. Previously, I was at Caterpillar creating internal developer tools, 
        and a consulting firm pushing for investment in digital technologies for a F500. I have also done many software-related extracurriculars in college.`}
      </p>
      <p className="mb-4">
        {'I graduated from the University of Michigan with a BSE in Computer Science, summa cum laude'}
      </p>
      <p className="mb-4">
      {'If interested, feel free to reach out at kevinji@umich.edu'}
      {/* <a href="mailto:kevinji@umich.edu"></a> */}
      </p>

      {/* <img src={ profilepic.src}/> */}


      {/* <img "IMG_7738.PNG"> */}
      {/* <image>IMG_7738.PNG</image> */}
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
