import PostAccordion from '../../Components/PostAccordion';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';

function layout({ children }) {
  return (
    <>
      <div className="container mx-auto flex mt-4 lg:mt-8 ">
        <div className="space-y-4  ">
          <div className="container mx-auto px-4 lg:px-0">{children}</div>

          <div className="mx-4 lg:mx-52 lg:-mt-16 z-10">
            <div className="flex flex-col gap-10 bg-white w-full lg:w-auto">
              <SubscriptionForm />
              <PostAccordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default layout;
