function AlcoholInfo({ per15cl, perLitre, perVolume }) {
  return (
    <>
      <div className="text-xs  text-center mt-2">
        Per Standardglas (15 cl) <br />
        {per15cl ? <p>{per15cl}</p> : <p>N/A</p>}
      </div>
      <div className="text-xs  text-center mt-2">
        Per Liter <br />
        {perLitre ? <p>{perLitre}</p> : <p>N/A</p>}
      </div>
      <div className="text-xs  text-center mt-2">
        Per Förpackning <br />
        {perVolume ? <p>{perVolume}</p> : <p>N/A</p>}
      </div>
    </>
  );
}

export default AlcoholInfo;
