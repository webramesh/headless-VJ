import Link from 'next/link';

function LinkElement({ title, link }) {
  if (title && link) {
    return (
      <>
        &raquo;&nbsp;
        <Link href={link} className="capitalize text-red-600">
          <span className="md:hidden">{title.length > 18 ? title.slice(0, 18) + '...' : title}</span>
          <span className="hidden md:block">{title}</span>
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
    <div className=" text-[0.5rem] sm:text-xs md:text-sm my-1 lg:my-4 flex gap-1">
      <Link href="/" className='text-red-600 '>Hem</Link>
      <LinkElement title={title1} link={link1} />
      <LinkElement title={title2} link={link2} />
      <LinkElement title={title3} />
    </div>
  );
}

export default BreadCrumb;
