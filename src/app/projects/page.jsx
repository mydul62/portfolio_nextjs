import Portfollio from "@/Components/Portfollio/Portfollio";

const page = () => {
  return (
    <div className="min-h-[calc(100vh-56px-50px)] max-w-7xl w-[90%] mx-auto py-16 ">
       <div className=" w-80 mx-auto">
       <div className="divider divider-success text-3xl">My Projects</div>
       </div>
       
       <div>
       <Portfollio></Portfollio>
       </div>
    </div>
  );
};

export default page;