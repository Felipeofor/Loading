import React from "react";
import "./index.css";

const Loading = () => {
  const [completed, setCompleted] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const handleReset = () => {
    setCompleted(0);
    setShow(false);
  };

  React.useEffect(() => {
    if (completed !== 100) {
      setTimeout(() => {
        setCompleted(completed + 1);
      }, 50);
    } else {
      setShow(true);
    }
  }, [completed]);
  return (
    <>
      <div className="loading">
        <div style={{ width: `${completed}%` }}></div>
      </div>
      <div>
        {`Loading... ${completed}%`}
        <button style={{ marginLeft: "20px" }} onClick={handleReset}>
          Reset
        </button>
      </div>

      {show && (
        <img
          src="https://blog.kakaocdn.net/dn/emyS9G/btq8A7Lk3z8/MksqKNdKKMXBtS0ijuAqk1/img.gif"
          alt="completed"
        ></img>
      )}
    </>
  );
};

export default Loading;