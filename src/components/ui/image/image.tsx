import * as React from "react";
import NextImage, { ImageProps } from "next/image";

const IMAGE_LAZY =
  "data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=";

export const Image: React.FC<ImageProps> = (props) => {
  return (
    <NextImage {...props} blurDataURL={IMAGE_LAZY} />
  );
};
Image.displayName = "Image";
