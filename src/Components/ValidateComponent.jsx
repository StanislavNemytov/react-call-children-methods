import React, {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  isValidElement,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import isValidateComponent from "../helper";

function ValidateComponent({ children }, ref) {
  const [count, setText] = useState(0);

  const [refs, addNewRef] = useState([]);

  useImperativeHandle(ref, () => ({
    validate: () => {
      setText((prevState) => (prevState += 1));
    },
  }));

  const callMethodInEachRef = () => {
    refs.forEach((currentRef) => {
      if (currentRef.current) {
        currentRef.current.validate();
      }
    });
  };

  const findVC = (child) => {
    if (isValidateComponent(child)) {
      return 1;
    }

    const copyChild = cloneElement(child);
    if (copyChild.props.children) {
      return findAllValidateComponents(copyChild.props.children);
    }
    return 0;
  };

  const findAllValidateComponents = (children) => {
    return [].concat(children).reduce((sum, child) => sum + findVC(child), 0);
  };

  const renderWithChildren = (children, oldRef = null) => {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        const componentRef = oldRef || createRef();

        addNewRef((prevState) => [...prevState, componentRef]);

        if (isValidateComponent(child)) {
          return cloneElement(child, { ref: componentRef });
        }

        const arrOfRefs = [componentRef];

        if (child.props.children) {
          let childrenQuantity = findAllValidateComponents(
            child.props.children
          );

          while ((childrenQuantity -= 1) >= 0) {
            arrOfRefs.push(createRef());
          }

          addNewRef((prevState) => [...prevState, ...arrOfRefs.slice(1)]);
        }

        return cloneElement(child, {
          childRef: arrOfRefs,
        });
      }
      return null;
    });
  };

  const [classes, setClasses] = useState(`rendered-${count}`);

  useEffect(() => {
    setClasses("");
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      setClasses(`rendered-${count}`);
    }, 25);
  }, [classes, count]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const withChildren = useMemo(() => renderWithChildren(children), [children]);

  return (
    <div className="val-com" style={{ padding: 4 }}>
      {(children && refs && refs.length && (
        <p>
          <button onClick={callMethodInEachRef}>Big Click</button>
        </p>
      )) ||
        null}
      {children && withChildren}
      <p className={classes}>Clicked {count} times.</p>
    </div>
  );
}

ValidateComponent.displayName = "ValidateComponent";

export default forwardRef(ValidateComponent);
