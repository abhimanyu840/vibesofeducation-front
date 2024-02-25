import React, { useContext, useEffect, useRef } from 'react'
import courseContext from "../context/course/courseContext";
import { Link } from 'react-router-dom'
import { BsPlusCircle } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import Title from './Title';
const Coursepage = () => {

  const context = useContext(courseContext);
  const { coursei, getCourseslug, clearCourseData } = context;
  const { slug } = useParams();
  const ref = useRef();

  useEffect(() => {
    clearCourseData();
    getCourseslug(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    document.title = `${coursei?.videotitle || ''} - Vibes Of Education`;
  }, [coursei]);

  const toggleTitle = () => {
    if (ref.current.classList.contains('hidden')) {
      ref.current.classList.remove('hidden')
      ref.current.classList.add('flex')
    }
    else if (ref.current.classList.contains('flex')) {
      ref.current.classList.remove('flex')
      ref.current.classList.add('hidden')
    }

  }

  if (!coursei) {
    return <div>Loading...</div>; // or return a loading indicator
  }

  return (
    <>
      <div className="container min-h-screen mx-auto ">
        <div className="flex my-3 flex-wrap">
          {/* <div className="ratio ratio-16x9 w-auto">
                        <iframe src={`https://www.youtube.com/embed/Yeic3j6uli0`} title="YouTube video"
                allowFullScreen></iframe>
            </div> */}
          <div className='w-full md:w-3/5 lg:w-3/4'>
            <div className="aspect-w-16 aspect-h-9">
              <iframe src={`https://www.youtube.com/embed/${coursei?.videoid}`} frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="this is title" allowFullScreen></iframe>
            </div>
          </div>
          <div onClick={toggleTitle} className="text-xl my-2 mx-auto md:invisible md:hidden">
            <BsPlusCircle /></div>
          <div ref={ref} onClick={toggleTitle} className="hidden flex-wrap md:flex w-full md:w-2/5 lg:w-1/4 px-2 overflow-y-scroll h-[40vh] md:max-h-[75vh]">

            <Title key={coursei?.slug} coursetitle={coursei?.coursetitle} />
            {/* {Object.keys(courseti).map((item) => { */}
            {/*  return <Titleitem key={courseti[item].slug} course={courseti[item]}/> */}
            {/* return */}
            {/* <Link to={`/coursepage/${courseti[item].slug}`} className="" aria-current="true">
              <div className="shadow-lg rounded border border-solid border-gray-200 my-3">
                <div className="px-2 mx-2 md:px-4 py-2 md:py-4 font-xl font-semibold min-w-[80vw] md:min-w-[18vw] font-baloo">
                  {courseti[item].videotitle}
                </div>
              </div>
            </Link> */}
            {/* })}  */}

            {/* <Link to="/coursepage" className="" aria-current="true">
                <div className="shadow-lg rounded border border-solid border-gray-200 my-3">
                  <div className="px-2 mx-2 md:px-4 py-2 md:py-4 font-xl font-semibold font-baloo">
                    Title Lorem ipsum dolor sit amet consectetur adipisicing.
                  </div>
                </div>
              </Link> */}



          </div>
        </div>
        <hr />
        <div className="mx-5 px-2 my-4 py-2 w-75">
          <div className='text-3xl font-extrabold text font-ubuntu'>{coursei?.videotitle}</div>
          <div className='mx-2 my-2 px-2 py-2'>
            {coursei?.texttutorial}
          </div>
          {!coursei?.downloads ? <div className='text-blue-600 text-lg mx-3'>Nothing to download</div> : <Link to={`${coursei?.downloads}`} target="_blank" rel="noopener noreferrer" className='text-blue-600 underline hover:text-blue-800 text-lg mx-3'>Click Here Download Notes</Link>}
          <div className="d-flex justify-content-between my-3">
            {/*<Link to="/coursepage" className="btn btn-dark">&larr;Previous</Link>*/}
            {/*<Link to="/coursepage" className="btn btn-dark">Next&rarr;</Link>*/}
          </div>
        </div>
      </div>

    </>
  )
}

export default Coursepage