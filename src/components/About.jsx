import aboutMePic from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl ">
        About <sapn className="text-neutral-500">Me</sapn>
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutMePic} alt="About" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
