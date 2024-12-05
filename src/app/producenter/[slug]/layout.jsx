import PostAccordion from '../../Components/PostAccordion';
import SenasteNytt from '../../Components/SenasteNytt';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';

export default function layout({ children }) {
  return (
    <>
      {children}
      <div className="container mx-auto my-2 lg:my-5 p-2 md:flex gap-5 items-center">
        <div className="md:w-2/3">
          <SubscriptionForm />
        </div>
        <div className="md:w-1/3">
          <SenasteNytt />
        </div>
      </div>
      <div className="container mx-auto max-w-4xl">
        <PostAccordion />
      </div>
    </>
  );
}
