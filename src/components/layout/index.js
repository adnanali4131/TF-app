
import React from "react";
import HeadBackgroundCommon from "../common/HeadBackgroundCommon"
import Heading2 from "../common/headings"
import { useHref } from "react-router-dom";

const LayoutPage = ({
  className = "",
  heading,
  subHeading,
  headingEmoji,
  children,
  color
}) => {
  return (
    <div
      className={`nc-LayoutPage relative ${className}`}
      data-nc-id="LayoutPage"
    >
      <HeadBackgroundCommon />
      <div className="container relative pt-10 pb-16 lg:pt-20 lg:pb-28">
        {/* HEADER */}
        <header className="text-center max-w-2xl mx-auto">
          <Heading2 emoji={headingEmoji}>{heading}</Heading2>
          {subHeading && (
            <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
              {subHeading}
            </span>
          )}
        </header>

        {/* CONTENT */}
        <div className="p-5 mx-auto bg-white rounded-[40px] shadow-lg sm:p-10 mt-10 lg:mt-20 lg:p-16 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
