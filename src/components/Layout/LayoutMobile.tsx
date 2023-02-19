import React from "react";

function LayoutMobile({children} : {children: React.ReactNode}) {
  return (
    <div>
      Mobile
      {children}
    </div>
  );
}

export default LayoutMobile;
