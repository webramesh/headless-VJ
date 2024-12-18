import PostAccordion from '../../Components/PostAccordion';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';

export default function layout({ children }) {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {children}
      <SubscriptionForm />
      <PostAccordion /> 
    </div>
  );
}
