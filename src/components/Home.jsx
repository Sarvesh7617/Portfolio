import React, { useEffect,useRef } from "react";
import Myimage from '../assets/Sarvesh.webp';
import {TypeAnimation} from 'react-type-animation';
import Java from '../assets/javascript_logo.webp'
import Html from '../assets/html logo.webp'
import Css from '../assets/CSS-logo.webp'
import reacts from '../assets/react.webp'
import Cpp from '../assets/cpp logo.webp'
import appwrite from '../assets/appwrite.webp'
import Python from '../assets/python logo.webp'
import Bootstrap from '../assets/Bootstrap_logo.webp'
import Face from '../assets/Face Recorg.webp'
import commerce from '../assets/E-commerce.webp'
import Disease from '../assets/Disease.webp'
import Video from '../assets/videoTube.webp'
import weather from '../assets/Weather.webp'
import tool from '../assets/ai tool.webp'
import smart from '../assets/co curricular.webp'
import hackathon from '../assets/hackathon.webp'
import workshop from '../assets/python workshop.webp'
import skill from '../assets/soft skill.webp'
import infosys from '../assets/tcs intern.webp'
import web from '../assets/web intern.webp'
import trainning from '../assets/web trainning.webp'
import Blog from '../assets/Blog.webp'
import { FaArrowRight } from "react-icons/fa6";
import '../App.css';
import Carousel from "./Carousal";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Node from "../assets/node.webp";
import Express from "../assets/express.webp";
import Mongo from "../assets/mongo.webp";
import Sql from "../assets/sql.webp";



const Home=()=>{
    const {register,handleSubmit,reset,formState: { errors }}=useForm();
    const [loading,setLoading]=useState(false);
    const stripRef = useRef(null); 
    const [stripWidth, setStripWidth] = useState(0);
    const [loaded, setLoaded] = useState(0);

    const Submit = (data) => {
        setLoading(true);

    emailjs.send(
        'service_siemlc5', 
        'template_j8icqyu',    
        {
        name: data.name,
        email: data.email,
        message: data.message,
        },
        '96ToZ5T7tui_mYyeZ'     
    )
    .then(() => {
        toast.success(
        <div>
            <strong className="text-black">Message Sent</strong>
            <p className="text-indigo-400 text-lg">Thank you for your message. I'll get back to you soon.</p>
        </div>,
        {
            position: "top-center",
            autoClose: 3000
        }
        );
        reset();
    })
    .catch((error) => {
        toast.error('Failed to send message. Please try again later.');
        console.error("EmailJS error:", error);
    })
    .finally(() => {
        setLoading(false);
    });
    }

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.dataset.progress;
                if (progress) {
                    bar.style.width = `${progress}%`;
                    observer.unobserve(bar);
                }
            }
        });
    }, { threshold: 0.5 });

        const bars = document.querySelectorAll('[data-progress]');
        bars.forEach(bar => observer.observe(bar));

        return () => observer.disconnect();
    }, []);

    window.scrollTo(0, 0);
 
    useEffect(() => {
        if (loaded === images.length && stripRef.current)
            setStripWidth(stripRef.current.scrollWidth);
        }, [loaded]);
        const images = [ 
            { src: Java, alt: "Java image" }, 
            { src: Html, alt: "HTML image" }, 
            { src: reacts, alt: "React image" }, 
            { src: Cpp, alt: "C++ image" }, 
            { src: appwrite, alt: "appwrite image" }, 
            { src: Bootstrap, alt: "Bootstrap image" }, 
            { src: Node, alt: "Node.js image" }, 
            { src: Express, alt: "Express.js image" },  
            { src: Sql, alt: "Mysql image" }, 
        ];
    
    return(
        <div className="dark:bg-gray-900 dark:text-white">
            <div id="home" className="flex flex-col md:flex-row items-center justify-between gap-20 px-10 pt-20">
                <section className="md:pt-0 p-20 flex justify-center">
                    <div className="relative">

                        <div className="absolute inset-0 rounded-full bg-red-400 dark:bg-yellow-300 blur-xl animate-pulse"></div>

                        <img 
                        src={Myimage} alt="Profile pic"
                        className="relative z-10 rounded-full sm:w-[400px] sm:h-[500px] border-2 border-black dark:border-white hover:scale-103 transition-transform duration-300"
                        />
                    </div>
                </section>


                <section className="md:w-1/2 text-center md:text-left mt-4">
                    <h1 className="md:text-4xl mb-4">
                        <strong>
                        Hi, it's{" "}
                        <span className="text-red-500">
                            <TypeAnimation
                            sequence={[
                                "Front End Developer", 1000,
                                "Full Stack Developer", 1000,
                                "DSA Expert", 1000,
                                "Machine Learning Enthusiast", 1000,
                                "Next.js & SQL", 1000,
                            ]}
                            speed={10}
                            style={{ fontStyle: "normal" }}
                            repeat={Infinity}
                            />
                        </span>
                        </strong>
                    </h1>
                    <h3 className="md:text-2xl sm:text-3xl font-semibold mb-4">
                        I am a <span className="text-purple-500">Software Engineer</span>
                    </h3>
                    <p className="mb-7 md:mb-0 text-justify">
                        <strong>Sarvesh Soni</strong> is a passionate Full Stack Web Developer with strong expertise in Data Structures and Algorithms (DSA). Currently pursuing B.Tech in Computer Science with a specialization in Artificial Intelligence from Chhatrapati Shahu Ji Maharaj University, Kanpur. Sarvesh has experience building scalable web applications using React, Next.js, Node.js and Express with proficiency in SQL and NoSQL databases.
                        <br />
                        <br />
                        He is committed to continuous learning, developing innovative solutions, and delivering excellent user experiences through clean, maintainable code and modern technologies.
                    </p>
                </section>
            </div>
            <div className="flex flex-wrap justify-center md:flex-row gap-4 mt-3 mb-4">
                <a href="https://wa.me/917617878976" target="_blank" title="whatapp page"><i className="fa-brands fa-whatsapp text-4xl border-4 w-16 h-16 text-center pt-2 border-red-500 rounded-full hover:scale-110 sm:bg-transparent bg-green-500 hover:bg-green-500 transition duration-300 cursor-pointer"></i></a>
                <a href="https://github.com/Sarvesh7617" title="Github page" target="_blank"><i className="fa-brands fa-github text-4xl border-4 w-16 h-16 text-center pt-2 border-red-500 rounded-full hover:scale-110 sm:bg-transparent bg-purple-500 hover:bg-purple-500 transition duration-300 cursor-pointer"></i></a>
                <a href="mailto:shubhamsoni1231@rediffmail.com" title="mail"><i className="fas fa-envelope text-3xl border-4 w-16 h-16 border-red-500 rounded-full text-center pt-3 hover:scale-110 sm:bg-transparent bg-blue-400 hover:bg-blue-400 transition duration-300 cursor-pointer"></i></a>
            </div>
            <div className="flex justify-center mt-10">
                <a href="/Sarvesh's Resume-hackerresume.pdf" target="_blank" className="text-sm sm:text-lg sm:font-bold border-2 border-red-500 bg-red-400 md:bg-transparent hover:bg-red-500 hover:scale-110 transition-transform duration-300 rounded-full p-3">Download Resume</a>
            </div> 
            <hr className="border dark:border-white border-black w-1/2 m-auto mt-10"/>
            <div className="mt-5 mb-5 w-1/2 m-auto">
                <motion.h2 
                    id="skill" 
                    className="text-center font-bold text-xl  md:text-4xl"
                    initial={{
                        opacity:0,
                        scale:0.5
                    }}
                    whileInView={{ 
                        opacity: 1,
                        scale:1
                    }}
                    viewport={{ 
                        once: true
                    }}
                    transition={{ duration: 1.5 }}
                >
                    Featured <span className="text-blue-600">Skill</span>
                </motion.h2>
                <motion.ul 
                    className="flex flex-wrap justify-center gap-5 mt-10 mb-10 slow-bounce text-center"
                    initial={{
                        opacity:0,
                        scale:0.2,
                        y:50
                    }}
                    whileInView={{ 
                        opacity: 1,
                        scale:1,
                        y:0
                    }}
                    viewport={{ 
                        once: true,
                        amount:0.8
                    }}
                    transition={{ duration: 1.5 }}
                >
                        <li className="border-2 border-t-teal-400 border-b-teal-400 border-l-blue-500 border-r-blue-500 p-2 sm:p-4 rounded-md text-[#B8860B] text-xl sm:text-2xl"><strong>Web Developer</strong></li>
                        <li className="border-2 border-t-teal-400 border-b-teal-400 border-l-blue-500 border-r-blue-500 p-2 sm:p-4 rounded-md text-[#B8860B] text-xl sm:text-2xl"><strong>Front-end developer</strong></li>
                        <li className="border-2 border-t-teal-400 border-b-teal-400 border-l-blue-500 border-r-blue-500 p-2 sm:p-4 rounded-md text-[#B8860B] text-xl sm:text-2xl"><strong>C++ and Python Coder</strong></li>
                </motion.ul> 
                <div className="overflow-hidden w-full">
                    <motion.div
                        ref={stripRef}
                        className="flex gap-5"
                        initial={{ x: "100%" }}
                        animate={{ x: -stripWidth }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {images.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="max-w-16 max-h-16 rounded-full"
                                onLoad={() => setLoaded((prev) => prev + 1)}
                            />
                            </div>
                        ))}
                        <img src={Mongo} alt="Mongo image" className="max-w-25 max-h-30 rounded-md bg-gray-500"/>
                        <img src={Css} alt="Css image" className="max-w-25 max-h-30 rounded-md"/>
                        <img src={Python} alt="Python image" className="max-w-25 max-h-30 rounded-md"/>
                    </motion.div>
                </div>
            </div><hr className="border dark:border-white border-black w-1/2 m-auto mt-10"/>

            <div id="programming-language" className="mt-5 mb-5 w-1/2 m-auto">
                <motion.h2 
                  className="text-center text-xl md:text-3xl md:text-4xl font-semibold mb-4"
                  initial={{
                        opacity:0,
                        scale:0.2
                    }}
                    whileInView={{ 
                        opacity: 1,
                        scale:1
                    }}
                    viewport={{ 
                        once: true
                    }}
                    transition={{ duration: 1 }}
                >
                    Programming <span className="text-red-400">Language</span>
                </motion.h2>
                <div>
                    {[
                        { name: "Javascript", progress: "90" },
                        { name: "HTML", progress: "95" },
                        { name: "CSS/TAILWIND", progress: "95" },
                    ].map((lang, index) => (
                    <motion.div 
                      className="m-auto mb-5 sm:w-full" key={index}
                      initial={{
                        opacity:0,
                        scale:0.2,
                        y:50
                    }}
                    whileInView={{ 
                        opacity: 1,
                        scale:1,
                        y:0
                    }}
                    viewport={{ 
                        once: true,
                        amount:0.3
                    }}
                    transition={{ duration: 1.5 }}
                    >
                        <p className="text-lg font-medium text-center">{lang.name}</p>
                        <div
                            className="h-4 rounded-full bg-gradient-to-r w-0 from-purple-600 to-orange-500 transition-all duration-1000"
                            data-progress={lang.progress}
                        >
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div><hr className="border dark:border-white border-black w-1/2 m-auto mt-10"/>
            <div className="p-10">
                <motion.h2 
                  className="text-center font-bold text-xl md:text-4xl"
                  initial={{
                        opacity:0,
                        scale:0.2
                    }}
                    whileInView={{ 
                        opacity: 1,
                        scale:1
                    }}
                    viewport={{ 
                        once: true
                    }}
                    transition={{ duration: 1 }}
                >
                    My <span className="text-purple-600">Project</span>
                </motion.h2>
                <p className="text-center mt-3 sm:w-1/2 justify-self-center">Here are some of my recent project.Each project was carefully crafted with attention to detail,performance and user experience</p>
                <div id="project" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-6 sm:px-20 justify-self-center">
                    {[
                        { src: Blog, alt: "Blog-Post project",link:"https://full-stack-blogging-platform-pied.vercel.app" },
                        { src: Face, alt: "face-recorgnition project",link:"https://github.com/springboardmentor136/Visionary-Advanced-Image-Recognition-for-the-Next-Era/tree/main" },
                        { src: Video, alt: "video stream project",link:"https://video-tube-sigma.vercel.app" },
                        { src: Disease, alt: "Disease-predict project",link:"https://github.com/Sarvesh7617/Multiple_Disease_Prediction_Using_Machine_Learning" },
                        { src: weather, alt: "weather project",link:"https://weather-node-usi5-74i64podm-sarvesh-soni-s-projects.vercel.app" },
                        { src: commerce, alt: "e-commerce project",link:"https://github.com/Sarvesh7617/BootStrap_E-commerce_Website" }
                    ].map((item,index)=>(
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-600 rounded-lg shadow-lg shadow-black/40 border border-blue-100 flex flex-col items-center justify-center"
                            initial={{ 
                                opacity: 0, 
                                scale: 0.8,
                                y:50
                            }}
                            whileInView={{ 
                                opacity: 1, 
                                scale: 1,
                                y:0 
                            }}
                            whileHover={{ 
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }}
                            viewport={{ 
                                once: true, 
                                amount: 0.3 
                            }}
                            transition={{ 
                                duration: 1
                            }}
                        >
                            {(item.src===Blog) && (
                            <div className="text-justify w-fit p-2">
                                <img src={item.src} className="mb-5"/>
                                <h1 className="text-center font-bold">Full-Stack Blogging Platform using React & Appwrite</h1>
                                <p>A full-stack blogging platform built with React.js and Appwrite, featuring secure authentication, rich text editing with TinyMCE, and image uploads. Optimized for responsiveness and deployed on Vercel for fast performance.</p>
                            </div>
                            )}
                            {(item.src===Face) && (
                            <div className="text-justify w-fit p-2 md:-mt-30">
                                <img src={item.src} className="mb-5"/>
                                <h1 className="text-center font-bold">Real-Time Facial Recognition System</h1>
                                <p>Real-time facial recognition system using Python, TensorFlow, and OpenCV to identify individuals via laptop camera.</p>
                            </div>
                            )}
                            {(item.src===Video) && (
                            <div className="text-justify w-fit p-2">
                                <img src={item.src}/>
                                <h1 className="text-center font-bold">Video Streaming Platform (FullStack)</h1>
                                <p>VideoTube is a modern full-stack video streaming platform inspired by YouTube, offering secure user authentication with JWT and bcrypt, seamless video uploads via Multer, and smooth Cloudinary-powered streaming. Built with React, TailwindCSS, and Redux Toolkit, it delivers a fast, responsive UI backed by a scalable Express and MongoDB server.</p>
                            </div>
                            )}
                            {(item.src===Disease) && (
                            <div className="text-justify w-fit p-2">
                                <img src={item.src} className="mb-5"/>
                                <h1 className="text-center font-bold"> Multiple Disease Prediction System (College Data Science Project)</h1>
                                <p>A Streamlit-based ML web app that predicts Diabetes, Heart Disease, and Kidney Disease using health data. Built with Python, Scikit-learn, and models like Random Forest & XGBoost.</p>
                            </div>
                            )}
                            {(item.src===weather) && (
                            <div className="text-justify w-fit p-2">
                                <img src={item.src} className="mb-5"/>
                                <h1 className="text-center font-bold"> WeatherNode – Real-Time Weather Forecasting Website</h1>
                                <p>A responsive weather web app using the OpenWeather API to display real-time temperature, humidity, and wind data with dynamic UI updates. Built with HTML, CSS, and JavaScript.</p>
                            </div>
                            )}
                            {(item.src===commerce) && (
                            <div className="text-justify w-fit p-2 sm:-mt-7">
                                <img src={item.src} className="mb-5"/>
                                <h1 className="text-center font-bold">Modern E-commerce Shopping Website</h1>
                                <p>A responsive online shopping platform built with HTML, CSS, Bootstrap, and JavaScript. Features include product categories, shopping cart, checkout flow, and a secure payment interface.</p>
                            </div>
                            )}
                            <a href={item.link} target="_blank" className="border-2 border-black rounded-md text-blue-500 text-sm md:text-normal font-semibold p-1 hover:cursor-pointer hover:scale-105 transition-transform duration-300 my-2">
                                DEMO
                            </a>
                        </motion.div>
                    ))}
                </div>
                <a href="https://github.com/Sarvesh7617" target="_blank" title="github link" className="m-auto border border-white p-2 w-fit rounded-xl bg-purple-400 flex items-center hover:scale-110 hover:bg-purple-500 duration-300 transition-transform">Check My Github <span className="ml-2 mt-1"><FaArrowRight /></span> </a>
            </div><hr className="border dark:border-white border-black w-1/2 m-auto mt-5"/>
            <div className="mt-5 mb-10 w-11/12 m-auto">
                <motion.h2 
                  className="text-center font-bold text-xl md:text-4xl mb-2 sm:mb-8"
                  initial={{
                        opacity:0,
                        scale:0.2
                    }}
                    whileInView={{ 
                        opacity: 1,
                        scale:1
                    }}
                    viewport={{ 
                        once: true
                    }}
                    transition={{ duration: 1 }}
                >
                    Certificates
                </motion.h2>
                <motion.div
                    initial={{
                        opacity:0,
                        scale:0.2,
                        y:50
                    }}
                    whileInView={{ 
                        opacity: 1,
                        scale:1,
                        y:0
                    }}
                    viewport={{ 
                        once: true,
                        amount:0.5
                    }}
                    transition={{ duration: 1 }}
                >
                    <Carousel 
                    slides={[
                        {certificate:tool,alt:"AI tools certificate"},
                        {certificate:smart,alt:"co-curricular certificate"},
                        {certificate:hackathon,alt:"road safety certificate"},
                        {certificate:workshop,alt:"python workshop certificate"},
                        {certificate:skill,alt:"soft skill certificate"},
                        {certificate:infosys,alt:"infosys intern certificate"},
                        {certificate:web,alt:"web intern certificate"},
                        {certificate:trainning,alt:"web trainning certificate"}
                    ]}/>
                </motion.div>
            </div><hr className="border dark:border-white border-black w-1/2 m-auto mt-10"/>
            <div id="contact" className="relative mt-5 w-6/12 m-auto">
                <motion.h2 
                  className="text-center font-bold text-xl md:text-4xl mb-2 sm:mb-8"
                  initial={{
                        opacity:0,
                        scale:0.2
                    }}
                    whileInView={{ 
                        opacity: 1,
                        scale:1
                    }}
                    viewport={{ 
                        once: true
                    }}
                    transition={{ duration: 1 }}
                >
                    Get In <span className="text-rose-500">Touch</span>
                </motion.h2>
                <div className="flex flex-col md:flex-row items-start justify-evenly gap-5 w-full overflow-hidden">
                    <motion.div 
                      className="bg-black/30 text-white p-5 rounded-lg flex flex-col items-center w-full md:w-1/2 md:mt-16"
                      initial={{ 
                        opacity: 0, 
                        x: -100 
                    }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0 
                    }}
                    viewport={{ 
                        once: true, 
                        amount: 0.3
                    }}
                      transition={{ duration: 1 }}
                    >
                    <p className="font-semibold mb-5 text-center w-full">Contact Information</p>
                    <div className="space-y-4 w-full sm:w-fit">

                        <div className="flex flex-col lg:flex-row items-center sm:justify-between gap-2 text-center">
                            <MdOutlineMail className="flex-shrink-0 text-purple-600 text-3xl bg-white rounded-full h-10 w-10 p-2" />
                            <div className="flex flex-col sm:items-center w-full">
                                <label>Email</label>
                                <a href="mailto:shubhamsoni1231@rediffmail.com" className="break-words hover:text-indigo-500">
                                    shubhamsoni1231@rediffmail.com
                                </a>
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row items-center sm:justify-between gap-2 w-full text-center">
                            <IoCallOutline className="text-purple-600 text-3xl bg-white rounded-full h-10 w-10 p-2" />
                            <div className="flex flex-col items-center w-full">
                                <label>Phone</label>
                                <a href="tel:+917617878976" className="break-words hover:text-indigo-500">
                                +91 7617878976
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center sm:justify-between gap-2 w-full text-center">
                            <CiLocationOn className="text-purple-600 text-3xl bg-white rounded-full h-10 w-10 p-2" />
                            <div className="flex flex-col items-center w-full">
                                <label>Location</label>
                                <p className="break-words">Sultanpur, Uttar Pradesh, India</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6 justify-center items-center mt-5">
                        <a href="https://wa.me/917617878976" target="_blank" title="whatapp page"><i className="fa-brands fa-whatsapp text-4xl text-center hover:scale-110 sm:bg-transparent text-green-500 transition duration-300 cursor-pointer"></i></a>
                        <a href="mailto:shubhamsoni1231@rediffmail.com" title="mail"><i className="fas fa-envelope text-3xl text-red-500 text-center hover:scale-110 sm:bg-transparent transition duration-300 cursor-pointer"></i></a>
                    </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit(Submit)}
                        className="bg-black/30 flex flex-col items-start p-5 rounded-lg w-full md:w-1/2 mb-10"
                        initial={{ 
                            opacity: 0, 
                            x: 100 
                        }}
                        whileInView={{ 
                            opacity: 1, 
                            x: 0 
                        }}
                        viewport={{ 
                            once: true, 
                            amount: 0.3
                        }}
                        transition={{ duration: 1 }}
                    >
                    <p className="text-white text-md font-semibold mb-5 w-full text-center text-center">Send Message</p>
                    <div className="space-y-5 w-full">

                        <span className="flex flex-col gap-1 w-full">
                            <label>Full Name</label>
                            <input
                            type="text"
                            placeholder="Enter your full name"
                            {...register('name', { required: "Please enter name" })}
                            className="text-black dark:text-white text-md border-2 border-gray-100 rounded-md p-2 w-full"
                            />
                            {errors.name && (
                            <p className="text-red-500 text-sm -mt-1">{errors.name.message}</p>
                            )}
                        </span>

                        <span className="flex flex-col gap-1 w-full">
                            <label>Email</label>
                            <input
                            type="email"
                            placeholder="Enter your email"
                            {...register('email', {
                                required: "Please enter email",
                                validate: {
                                matchPatern: (value) =>
                                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value) ||
                                    "Email address must be a valid address",
                                },
                            })}
                            className="text-black dark:text-white text-md border-2 border-gray-100 rounded-md p-2 w-full"
                            />
                            {errors.email && (
                            <p className="text-red-500 text-sm -mt-1">{errors.email.message}</p>
                            )}
                        </span>

                        <span className="flex flex-col gap-1 w-full">
                            <label>Your Message</label>
                            <textarea
                            placeholder="Enter your message"
                            {...register("message", { required: "Please enter your message" })}
                            className="text-black dark:text-white text-md border-2 border-gray-100 rounded-md p-2 w-full"
                            />
                            {errors.message && (
                            <p className="text-red-500 text-sm -mt-1">{errors.message.message}</p>
                            )}
                        </span>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full p-2 rounded-md transition-transform hover:bg-purple-500 hover:cursor-pointer hover:scale-105 duration-300 flex gap-1 items-center border-2 border-gray-300 bg-purple-400 justify-center"
                        >
                            {loading ? "Sending..." : (
                            <>
                            Send Message <FiSend />
                            </>
                            )}
                        </button>
                    </div>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}


export default Home;
