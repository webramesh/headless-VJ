import SenasteNytt from './SenasteNytt';
import RecentPostCard from './RecentPostCard';
import SubscriptionBox from './subscription/SubscriptionBox';
import WineTourism from './WineTourism';

function Sidebar() {
  return (
    <>
      <SubscriptionBox />
      <SenasteNytt />
      <div className="space-y-8 mt-4">
        {['/link1', '/link2', '/link3'].map((link, index) => (
          <RecentPostCard link={link} key={index} />
        ))}
      </div>
      <div className="my-10">
        <WineTourism />
      </div>
    </>
  );
}

export default Sidebar;
