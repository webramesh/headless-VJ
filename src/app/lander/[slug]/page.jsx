import Map from "../../Components/Map";
import LanderContent from "../components/LanderContent";

function page({ params }) {
  return (
    <>
      <LanderContent params={params} />
      <div className="h-96">
        <Map />
      </div>
    </>
  );
}

export default page;
