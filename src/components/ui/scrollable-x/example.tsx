import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

export function TestScrollableX() {
  const [items] = useState(getItems);
  const [selected, setSelected] = useState<string[]>([]);
  // const [dragging, setDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  const isItemSelected = (id: string) => !!selected.find((el) => el === id);

  // const handleMouseDown = (e: React.MouseEvent) => {
  //   setDragging(true);
  //   setStartX(e.pageX - e.currentTarget.offsetLeft);
  //   setScrollLeft(e.currentTarget.scrollLeft);
  // };

  // const handleMouseLeave = () => {
  //   setDragging(false);
  // };

  // const handleMouseUp = () => {
  //   setDragging(false);
  // };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   if (!dragging) return;
  //   e.preventDefault();
  //   const x = e.pageX - e.currentTarget.offsetLeft;
  //   const walk = (x - startX) * 2; // scroll-fast
  //   e.currentTarget.scrollLeft = scrollLeft - walk;
  // };

  const handleClick = (id: any) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id),
    );
  };

  return (
    // <div
    //   onMouseDown={handleMouseDown}
    //   onMouseLeave={handleMouseLeave}
    //   onMouseUp={handleMouseUp}
    //   onMouseMove={handleMouseMove}
    //   style={{ overflowX: "auto", cursor: dragging ? "grabbing" : "grab" }}
    // >
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      itemClassName="grid gap-2"
      scrollContainerClassName="grid gap-2"
    >
      {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
    // </div>
  );
}

const LeftArrow = () => {
  const visibility = React.useContext(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", true);
  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => { visibility.scrollPrev(); }}
      className="left"
    >
      Left
    </button>
  );
};

const RightArrow = () => {
  const visibility = React.useContext(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);
  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => { visibility.scrollNext(); }}
      className="right"
    >
      Right
    </button>
  );
};

function Card({ onClick, selected, title, itemId }: { onClick: any; selected: any; title: any; itemId: any; }) {
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.useIsVisible(itemId, true);

  return (
    <button
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      className="bg-red-100"
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(visible)}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </button>
  );
}
