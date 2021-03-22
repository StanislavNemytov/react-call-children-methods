import React, { Children, cloneElement, isValidElement, useMemo } from "react";
import isValidateComponent from "../helper";

export default function SomeComponent({ children, childRef }) {
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
    <div className="some-component" style={{ padding: 4 }}>
      {children && renderChildren}
    </div>
  );
}
