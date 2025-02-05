import { findDepth } from '@/src/utils/utils';
import Link from 'next/link';
import React from 'react';

const DryckerLinks = ({ produktTyper, produktslander, dryckerURIs }) => {
  const typer = produktTyper?.nodes?.filter((type) => type.parent !== null);
  const sortedLanders = [...produktslander.nodes].sort((a, b) => {
    const depthB = findDepth(b, produktslander.nodes);
    const depthA = findDepth(a, produktslander.nodes);
    return depthA - depthB;
  });
  const links = [...typer, ...sortedLanders];
  const updatedLinks = links.reduce((acc, current, index) => {
    if (index === 0) {
      acc.push(current);
    } else {
      const newSlug = `${acc[index - 1].slug}/${current.slug}`;
      acc.push({ ...current, slug: newSlug });
    }
    return acc;
  }, []);
  return (
    <div className="text-red-600 hover:text-red-500 text-sm">
      <div className="text-sm">
        {updatedLinks.map((item, index) => {
          const isLastItem = index === updatedLinks.length - 1;
          const isDrycker = dryckerURIs.includes(`/drycker/${item.slug}/`);
          const separator = !isLastItem && <span className="mx-1">|</span>;

          return (
            <span key={`link-${item.slug}-${index}`}>
              {isDrycker ? (
                <Link
                  href={`/drycker/${item.slug}/`}
                  className="text-red-600 hover:text-red-500 transition-colors"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-red-600">{item.name}</span>
              )}
              {separator}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DryckerLinks;
