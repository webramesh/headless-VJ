import Link from 'next/link';

function BreadCrumb({ title1, link1, title2 }) {
  return (
    <div className="text-xs md:text-sm my-1 lg:my-4 flex gap-1">
      <Link href="/">Hem</Link>»&nbsp;
      {link1 ? <Link href={link1}>{title1}</Link> : title1}
      {title2 && `» ${title2}`}
    </div>
  );
}

export default BreadCrumb;
