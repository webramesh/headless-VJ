import Map from "../../Components/Map";
import Content from "../Components/Content";

export default function page({ params }) {
  return (
    <div className="container mx-auto lg:my-10 p-2">
      <div className="md:flex gap-2">
        <Content params={params} />
        <Map />
      </div>
    </div>
  );
}
