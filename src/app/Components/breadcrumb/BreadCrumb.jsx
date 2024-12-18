import Link from 'next/link';

function LinkElement({ title, link, noRed }) {
  if (title && link) {
    return (
      <>
        &raquo;&nbsp;
        <Link href={link} className={`capitalize ${noRed ? 'text-white' : 'text-red-600'}`}>
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

function BreadCrumb({ title1, link1, title2, link2, title3, link3, title4, link4, noRed }) {
  const breadcrumb = [
    { title: title1, link: link1 },
    { title: title2, link: link2 },
    { title: title3, link: link3 },
    { title: title4, link: link4 },
  ];

  return (
    <div className=" text-[0.5rem] sm:text-xs md:text-sm my-1 lg:my-4 flex gap-1">
      <Link href="/" className={`${noRed ? 'text-white' : 'text-red-600'} `}>
        Hem
      </Link>
      {breadcrumb.map((crumb, index) => (
        <LinkElement key={index} title={crumb.title} link={crumb.link} noRed={noRed} />
      ))}
    </div>
  );
}

export default BreadCrumb;
