import React from "react";

//Children here is the body.
function LayoutDesktop({children} : {children: React.ReactNode}) {
  return (
    <div>
      Desktop
      {children}
    </div>
  );
}

export default LayoutDesktop;
