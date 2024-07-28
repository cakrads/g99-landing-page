export const IconChevronRight = (props: { className?: string }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="m11 9l3 3l-3 3" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
      </g>
    </svg>
  );
};

export const IconChevronLeft = (props: { className?: string }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="m13 15l-3-3l3-3" />
        <path d="M21 12a9 9 0 1 0-18 0a9 9 0 0 0 18 0" />
      </g>
    </svg>
  );
};