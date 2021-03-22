import React, { Children, cloneElement, isValidElement, useMemo } from "react";
import isValidateComponent from "../helper";

export default function SomeComponent({ children, childRef }) {
  console.log("🚀 childRef.length", childRef.length);
  const renderChildren = useMemo(() => {
    return (
      <>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            if (isValidateComponent(child)) {
              return cloneElement(child, { ref: childRef.pop() });
            }

            if (childRef.length) {
              return cloneElement(child, { childRef });
            }

            return child;
          }
        })}
      </>
    );
  }, [children, childRef]);

  return (
    <div className="some-component" style={{ padding: 24 }}>
      {children && renderChildren}
    </div>
  );
}
