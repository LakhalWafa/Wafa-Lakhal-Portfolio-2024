import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiBootstrapLine, RiWordpressLine, RiTailwindCssLine } from 'react-icons/ri';
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl ">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line className="text-7xl text-orange-700 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Line className="text-7xl text-blue-700 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiBootstrapLine className="text-7xl text-fuchsia-800 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssLine className="text-7xl text-blue-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiWordpressLine className="text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
