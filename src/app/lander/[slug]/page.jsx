import LanderContent from "../components/LanderContent";

function page({ params }) {
  return (
    <>
      <LanderContent params={params} />
    </>
  );
}

export default page;
