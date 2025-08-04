import React from "react";
}
const Title = ({ children, className }: Props) => {
  return (
    <h2 className={className)}>{children}</h2>
  );
};

export default Title;
