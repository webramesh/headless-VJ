import SenasteNyttSkeleton from './SenasteNyttSkeleton';
import { SubscriptionBoxSkeleton } from './SubscriptionSkeleton';

const SidebarSkeleton = () => {
  return (
    <>
      <SubscriptionBoxSkeleton />

      <SenasteNyttSkeleton />
    </>
  );
};

export default SidebarSkeleton;
