import CardSkeleton from './CardSkeleton';
import SenasteNyttSkeleton from './SenasteNyttSkeleton';
import { SubscriptionBoxSkeleton } from './SubscriptionSkeleton';

const SidebarSkeleton = () => {
  return (
    <>
      <SubscriptionBoxSkeleton />

      <SenasteNyttSkeleton />
      <div className="flex flex-col-reverse gap-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
};

export default SidebarSkeleton;
