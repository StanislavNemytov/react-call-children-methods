export default function isValidateComponent(child) {
  return (
    (child.type &&
      child.type.render &&
      child.type.render.hasOwnProperty("displayName") &&
      child.type.render.displayName === "ValidateComponent") ||
    false
  );
}
