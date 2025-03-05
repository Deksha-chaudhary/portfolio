import React from "react";
import SkillBox from "./SkillBox";
import ProgressBar from "./ProgressBar";
import { IoLogoHtml5, IoLogoCss3, IoLogoSkype, IoLogoJavascript, IoLogoGithub, IoLogoNodejs } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiBootstrap,SiSpringboot, SiNextdotjs, SiReact, SiAntdesign,SiMysql } from "react-icons/si";
import { FaReact, } from "react-icons/fa";
import { FaJava, FaCopyright,FaPython,FaDatabase} from "react-icons/fa";
import { DiJavascript} from "react-icons/di";


const Skills = ({ darkMode }) => {


    const skillObj = [
        { name: "Java", percentage: '90', icon: <FaJava /> },
        { name: "React Js ", percentage: '85', icon: <SiReact /> },
        { name: "DSA", percentage: '75', icon: <FaDatabase /> },
        { name: "C", percentage: '85', icon: <FaCopyright /> },
        { name: "Spring Boot", percentage: '50', icon: <SiSpringboot /> },
        { name: "MySql", percentage: '90', icon: <SiMysql /> },
        { name: "Javascript", percentage: '80', icon: <SiJavascript /> },
        { name: "HTML", percentage: '90', icon: <IoLogoHtml5 /> },
        { name: "CSS", percentage: '85', icon: <IoLogoCss3 /> },
        { name: "Bootstrap", percentage: '85', icon: <SiBootstrap /> },
        { name: "Git/Github", percentage: '95', icon: <IoLogoGithub /> },
    ]


    const skillObj2 = [
        { name: "Java", icon: <FaJava /> },
        { name: "React Js ", icon: <SiReact /> },
        { name: "Javascript", icon: <DiJavascript /> },
        { name: "Github", icon: <IoLogoGithub /> },
    ]
    const skillObj3 = [
        { name: "DSA", icon: <FaDatabase className=" " /> },
        { name: "C", icon: < FaCopyright /> },
        { name: "MySql", icon: <SiMysql /> },
        { name: "HTML", icon: <IoLogoHtml5 /> },
    ]



    return (
        <div id="skills">
            <div className=" container m-auto  mt-16">
                {/* heading */}
                <div data-aos="fade-up" className="relative mb-5">
                    <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl"> My Skills</h3>
                    <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
                </div>
                {/* content*/}
                <div className="flex md:flex-col ">
                    <div className="left flex-1 w-full">
                        <p data-aos="fade-up" className=" text-gray-700 font-medium w-[100%]">
                            Here are my skills.
                        </p>
                        {/* left box */}
                        <div data-aos="zoom-in" className="progress flex items-center h-[100%] justify-end md:justify-center">
                            <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                                {skillObj.map((item) => {
                                    return <ProgressBar logo={item.icon} name={item.name} value={item.percentage} />
                                })}</div>
                        </div>
                    </div>
                    {/* right box */}
                    <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
                        <div className="first2 flex flex-col gap-10">
                            {skillObj2.map((item) => {
                                return <SkillBox
                                    logo={item.icon}
                                    black={"white"}
                                    white={"black"}
                                    skill={item.name}
                                />
                            })}
                        </div>
                        <div className="last2 flex flex-col gap-10">
                            {skillObj3.map((item) => {
                                return <SkillBox
                                    logo={item.icon}
                                    black={"black"}
                                    white={"white"}
                                    skill={item.name}
                                />
                            })}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skills;
