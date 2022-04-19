import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="px-6 py-4">
      {/* Education and experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science</h5>
            <p className="font-semibold ">
              Federal polytechnic oko ( 2016-2019 )
            </p>
            <p className="my-3">
              I am currently pursuing my Masters in Computer Science
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold"> Sofware Engineer Jr.</h5>
            <p className="font-semibold ">TCS (2022 - on)</p>
            <p className="my-3">
              I am currently doing this Job because it is my dream Job
            </p>
          </div>
        </div>
      </div>
      {/* Languages and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {
              languages.map(language=><Bar data={language} key={language.name}/>)
            }
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold"> Tools & Softwares</h5>
          <div className="my-2">
            {
              tools.map(tool=><Bar data={tool} key={tool.name}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
