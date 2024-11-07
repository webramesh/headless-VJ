const OrdlistaDetails = ({ ordlista }) => {
  return (
    <>
      {ordlista?.content && (
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{ordlista?.title}</h2>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: ordlista?.content }} />
        </div>
      )}
    </>
  );
};

export default OrdlistaDetails;
