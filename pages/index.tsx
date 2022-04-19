// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {
  console.log(services);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am currently a remote frontend developer based at Abuja, I studied
        computer science and i have been writting codes and building
        applications, I have over 5 years of experience in web design, I have
        over 2 years experience of full stack web development with differnt
        frameworks.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What i offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-100 md:col-span-1" key={service.title}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

// If you have to fetch / render data dynamically you need to use this

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER: ", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

// If you are using static data it is preferrable to use this

// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER: ", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
