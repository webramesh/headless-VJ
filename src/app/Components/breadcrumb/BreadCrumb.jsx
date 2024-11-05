import Link from 'next/link';

function LinkElement({ title, link }) {
  if (title && link) {
    return (
      <>
        &raquo;&nbsp;
        <Link href={link} className="capitalize">
          {title}
        </Link>
      </>
    );
  } else if (title) {
    return <p className="capitalize">&raquo;&nbsp; {title}</p>;
  } else {
    return null;
  }
}

function BreadCrumb({ title1, link1, title2, link2, title3 }) {
  return (
    <div className="text-xs md:text-sm my-1 lg:my-4 flex gap-1">
      <Link href="/">Hem</Link>
      <LinkElement title={title1} link={link1} />
      <LinkElement title={title2} link={link2} />
      <LinkElement title={title3} />
    </div>
  );
}

export default BreadCrumb;
