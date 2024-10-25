function AlcoholInfo({ per15cl, perLitre, perVolume }) {
  return (
    <>
      <div className="text-xs  text-center mt-2">
        Per Standardglas (15 cl) <br /> {per15cl}
      </div>
      <div className="text-xs  text-center mt-2">
        Per Liter <br /> {perLitre}
      </div>
      <div className="text-xs  text-center mt-2">
        Per Förpackning <br />
        {perVolume}
      </div>
    </>
  );
}

export default AlcoholInfo;
