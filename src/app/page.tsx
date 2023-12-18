import Image from 'next/image'
import styles from '../app/styles.module.css'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pb-0 lg:ml-0 lg:mr-0 md:-mr-56 md:ml-20 sm:ml-32 sm:-mr-96 min-[320px]:ml-28 min-[320px]:-mr-[736px]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex ml-1/12">
        <nav className="fixed left-0 lg:top-2 flex w-full justify-center lg:static lg:w-auto  lg:rounded-xl lg:p-4 space-x-20 flex-row">
        <div className="flex justify-between items-center">
            <img className="flex w-7 mr-6" src="../favicon.ico"></img>
            <p>Welcome to my Workspace!</p>
        </div>
          <a href="#ProjectSect" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Projects</a>   
          <a href="mailto: yinchongweig@gmail.com" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Email Me</a>
          <a href="https://www.linkedin.com/in/geralyn-chong/" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Linkedin</a>
          <a href="https://github.com/asprgchong" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">GitHub</a>
        </nav>
        
      </div>

      <div className="relative place-items-center m:mx-8 lg:mx-36 grid lg:grid-rows-1 lg: grid-cols-2 space-x-10 gap-10">
        <div className={styles.fadeIN}>
            <h1 className='text-5xl my-4 mt-32 font-semibold tracking-wider'>GERALYN CHONG</h1>

            <p className='text-1xl mb-8'>I am a second year at the University of Chicago 
            studying <span> Computer&nbsp;Science and Business Economics </span>. 
            <p className='my-4'></p>
            I enjoy building innovative solutions and learning new tech stacks! <br/>In fact, I am currently learning how to build interactive websites, IOS Apps, and 3D models. Come along with me on my journey to using my technical skills to make a real-world impact!</p>

            <p className='mt-10 mb-6 flex space-x-4'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#283593" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#5c6bc0" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#3949ab" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path>
                </svg>
                
            </p>
            
            <div className={styles.typewriter}>
                <p id="typing1" className='my-2'><code>int fd = open(`geralynProjects.txt`, O_RDONLY | O_CREAT);</code></p>
                <p id="typing2" className='my-2'><code>int nbytes = read(fd, buf, 1024);</code></p>
                <p id="typing3" className='my-2'><code>if (nbytes {'>'} 0){'{'}</code></p>
            </div>

        </div>
        <iframe className="mt-24" src='https://my.spline.design/personalportfolio-d879560ef42c9dc3e0f28215b171a3ef/' width='100%' height='80%'></iframe>
      </div>

      <div id="ProjectSect" className={styles.header}>
            <div className={styles.animatedLoaded}>
                <div>
                    <h2 className='text-2xl mb-6 mt-10'>Projects</h2>
                    <div className="mb-32 grid text-center lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-4 sm:grid-cols-2 sm:grid-rows-2 min-[320px]:grid-cols-2 lg:text-left space-x-4">
                        <a
                        href="https://www.skyit.services/services"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[#88A2F2] hover:shadow-xl hover:shadow-[#88A2F2]"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            SkyIT Services Web Dev Project{' '}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                            </span>
                        </h2>
                        <p className={`m-0 lg:max-w-[30ch] md:max-w-[86ch] text-sm opacity-50`}>
                            Developed UI designs in Figma
                            <br/>Implemented using Javascript in Next.js Framework
                            <br/>CSS Animation in Services Page
                        </p>
                        </a>

                        <a
                        href="https://github.com/asprgchong/techteam_workshop?tab=readme-ov-file"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[#88A2F2] hover:shadow-xl hover:shadow-[#88A2F2]"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            UChicago TechTeam Figma Workshop{' '}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                            </span>
                        </h2>
                        <p className={`m-0 lg:max-w-[30ch] md:max-w-[86ch] text-sm opacity-50`}>
                            Developed introduction to Figma for fellow students
                            Explored Figma AutoLayout, Prototyping, and Illustrative tools
                            Implemented mock designs into FrontEnd Shell using Anima Plugin 
                        </p>
                        </a>

                        <a
                        href="https://github.com/asprgchong/SwiftUI_trialFun"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[#88A2F2] hover:shadow-xl hover:shadow-[#88A2F2]"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            CodePath: IOS Development Swift Exploration{' '}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                            </span>
                        </h2>
                        <p className={`m-0 lg:max-w-[30ch] md:max-w-[86ch] text-sm opacity-50`}>
                            Developing a Task Manager app with a simple interface. <br/>
                            Using Swift and XCode to implement a responsive UI
                        </p>
                        <p className={`text-sm italic pt-4`}>In Progress</p>
                        </a>

                        <a
                        href="https://github.com/asprgchong/web102_prework"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[#88A2F2] hover:shadow-xl hover:shadow-[#88A2F2]"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            CodePath: Intermediate Web Development Exploration{' '}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                            </span>
                        </h2>
                        <p className={`m-0 lg:max-w-[30ch] md:max-w-[86ch] text-sm opacity-50`}>
                            Using Javascript, HTML, and CSS, this exploration is a dive into DOM.<br/>
                            Developing an interactive interface from an HTML shell: eventlisteners, various functions from arrow to reduce(), and ternary operators are implemented.  
                        </p>
                        <p className={`text-sm italic pt-4`}>In Progress</p>
                        </a>
                    </div>
                </div>
                <div className="grid h-[800px] w-[950px] scale-75 rounded-md">
                    <div className={styles.spline}>
                        <iframe src='https://my.spline.design/chesssetcopy-45ae8ca8e398581eb37be17f8cf1f665/' width='100%' height='100%'></iframe>
                    </div>
                </div>
            </div>
      </div>
      <footer>
        <div className="grid grid-rows-1 grid-cols-3 pb-10 space-x-4">
            <div className="block pb-4 m-4 space-y-6">
                <p className=" text-left block font-semibold text-xl pb-4">Contact Me</p>   
                <a href="mailto: yinchongweig@gmail.com" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Email Me</a>
                <a href="https://www.linkedin.com/in/geralyn-chong/" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Linkedin</a>
                <a href="https://github.com/asprgchong" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">GitHub</a>
            </div>
            <div className="col-span-2 mt-24">
                <span>
                    I like to code and design anything. Being creative is my outlet.
                </span>
                <p className="mt-10">Geralyn's Workspace</p>
            </div>
        </div>
      </footer>
    </main>
  )
}
