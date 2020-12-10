import * as React from "react";

export interface ImageProps {
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
}

export const Image = ({ imgSrc, imgAlt = "", className }: ImageProps) => (
  <img src={imgSrc} alt={imgAlt} className={className} />
);
