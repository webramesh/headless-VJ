import PopUp from '../Components/PopUp';

const layout = ({ children }) => {
  return (
    <>
      <PopUp />
      {children}
    </>
  );
};

export default layout;
