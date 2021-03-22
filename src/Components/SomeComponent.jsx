import React, { Children, cloneElement, isValidElement, useMemo } from "react";
import isValidateComponent from "../helper";

export default function SomeComponent({ children, childRef }) {
  const renderChildren = useMemo(() => {
    return (
      <>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            if (isValidateComponent(child)) {
              return cloneElement(child, { ref: childRef && childRef.pop() });
            }
            return cloneElement(child, { childRef });
          }
        })}
      </>
    );
  }, [children]);

  return (
    <div className="some-component" style={{ padding: 24 }}>
      {children && renderChildren}
    </div>
  );
}
