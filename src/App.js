import React, { useEffect, useState, useRef } from "react";

export default function App() {
  const [visibility, setVisibility] = useState(false);
  const refElement = useRef(null);

  useEffect(() => {
    document.addEventListener("click", documentClickTrack);
    () => {
      document.removeEventListener("click", documentClickTrack);
    };
  });

  const documentClickTrack = (event) => {
    if (
      refElement.current === null ||
      !refElement.current.contains(event.target)
    ) {
      setVisibility(false);
    }
    console.log(refElement.current.contains(event.target));
    //console.log(event.target);
  };

  let dropDownClass = "dropdown-menu p-0 shadow";
  if (visibility) {
    dropDownClass += " show";
  }
  return (
    <ul
      className="navbar-nav m-auto"
      style={{ width: "200px" }}
      ref={refElement}
    >
      <li className="nav-item dropdown">
        <div
          className="d-flex"
          style={{ cursor: "pointer" }}
          onClick={() => setVisibility(true)}
        >
          <span className="nav-link dropdown-toggle"> displayName</span>
        </div>
        <div className={dropDownClass}>
          <span className="dropdown-item d-flex p-2">My Profile</span>
          <span
            className="dropdown-item  d-flex p-2"
            style={{ cursor: "pointer" }}
          >
            Logout
          </span>
        </div>
      </li>
    </ul>
  );
}
