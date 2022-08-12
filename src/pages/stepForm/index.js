import React, { useState } from "react";
import style from "./style.module.scss";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const First = ({ setObj, obj }) => {
  return (
    <div className={style.firstMainContainer}>
      <div className={style.formBox}>
        <p className={style.firstheading}> Welcome to ghost house</p>
        {obj.page < 0 && (
          <button onClick={() => setObj({ ...obj, page: obj.page - 1 })}>
            go back
          </button>
        )}
        <div className={style.input}>
          <p>Enter Your Name</p>
          <input
            type="text"
            placeholder="e.g: John Doe"
            value={obj.name}
            onChange={(e) => {
              setObj({ ...obj, name: e.target.value });
            }}
          />
        </div>
        <div className={style.btn}>
          <button
            className={obj.name ? style.nextButton : style.nextButtonDisable}
            onClick={() => {
              obj.name && setObj({ ...obj, page: obj.page + 1 });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Second = ({ setObj, obj }) => {
  return (
    <div className={style.firstMainContainer}>
      <div className={style.formBox}>
        <div className={style.headingWithBackBtn}>
          {obj.page > 0 && (
            <button
              className={style.backBtn}
              onClick={() => setObj({ ...obj, page: obj.page - 1 })}
            >
              <IoArrowBack />
            </button>
          )}
          <p className={style.heading}> Welcome to ghost step 2</p>
        </div>
        <div className={style.input}>
          <p>Enter Your Email</p>
          <input
            type="text"
            placeholder="e.g: Johndoe@gmail.com"
            value={obj.email}
            onChange={(e) => {
              setObj({ ...obj, email: e.target.value });
            }}
          />
        </div>
        <div className={style.btn}>
          <button
            className={obj.email ? style.nextButton : style.nextButtonDisable}
            onClick={() => {
              obj.email && setObj({ ...obj, page: obj.page + 1 });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Third = ({ setObj, obj }) => {
  return (
    <div className={style.firstMainContainer}>
      <div className={style.formBox}>
        <div className={style.headingWithBackBtn}>
          {obj.page > 0 && (
            <button
              className={style.backBtn}
              onClick={() => setObj({ ...obj, page: obj.page - 1 })}
            >
              <IoArrowBack />
            </button>
          )}
          <p className={style.heading}> Welcome to ghost step 3</p>
        </div>
        <div className={style.input}>
          <p>Enter Your Job Role</p>
          <input
            type="text"
            placeholder="e.g: Project Manager"
            value={obj.jobrole}
            onChange={(e) => {
              setObj({ ...obj, jobrole: e.target.value });
            }}
          />
        </div>
        <div className={style.btn}>
          <button
            className={obj.jobrole ? style.nextButton : style.nextButtonDisable}
            onClick={() => {
              obj.jobrole && setObj({ ...obj, page: obj.page + 1 });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Fourth = ({ setObj, obj }) => {
  return (
    <div className={style.firstMainContainer}>
      <div className={style.formBox}>
        <div className={style.headingWithBackBtn}>
          {obj.page > 0 && (
            <button
              className={style.backBtn}
              onClick={() => setObj({ ...obj, page: obj.page - 1 })}
            >
              <IoArrowBack />
            </button>
          )}
          <p className={style.heading}> Welcome to ghost step 4</p>
        </div>
        <div className={style.input}>
          <p>Select Your Birth Date</p>
          <input
            type="date"
            placeholder="25/03/2001"
            value={obj.DOB}
            onChange={(e) => {
              setObj({ ...obj, DOB: e.target.value });
            }}
          />
        </div>
        <div className={style.btn}>
          <button
            className={obj.DOB ? style.nextButton : style.nextButtonDisable}
            onClick={() => {
              obj.DOB && setObj({ ...obj, page: obj.page + 1 });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Fifth = ({ setObj, obj }) => {
  return (
    <div className={style.firstMainContainer}>
      <div className={style.formBox}>
        <div className={style.headingWithBackBtn}>
          {obj.page > 0 && (
            <button
              className={style.backBtn}
              onClick={() => setObj({ ...obj, page: obj.page - 1 })}
            >
              <IoArrowBack />
            </button>
          )}
          <p className={style.heading}> Welcome to ghost step 5</p>
        </div>
        <div className={style.input}>
          <p>Enter Your Password</p>
          <input
            type="password"
            placeholder="******"
            value={obj.password}
            onChange={(e) => {
              setObj({ ...obj, password: e.target.value });
            }}
          />
        </div>
        <div className={style.btn}>
          <button
            className={
              obj.password ? style.nextButton : style.nextButtonDisable
            }
            onClick={() => {
              obj.name && setObj({ ...obj, page: obj.page + 1 });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Last = ({ setObj, obj }) => {
  const navigate = useNavigate();
  console.log(obj);

  const handleSubmit = () => {
    // var signupdata = JSON.parse(localStorage.getItem("profile")) || [];
    // signupdata.push(obj);
    localStorage.setItem("profile", JSON.stringify(obj));
  };

  return (
    <div className={style.firstMainContainer}>
      <div className={style.formBox}>
        <div className={style.headingWithBackBtn}>
          {obj.page > 0 && (
            <button
              className={style.backBtn}
              onClick={() => setObj({ ...obj, page: obj.page - 1 })}
            >
              <IoArrowBack />
            </button>
          )}
          <p className={style.heading}> lets finish!</p>
        </div>
        <div>
          <b>Name:</b> {obj.name}
        </div>
        <div>
          <b>Email:</b> {obj.email}
        </div>
        <div>
          <b>Date Of Birth:</b> {obj.DOB}
        </div>
        <div>
          <b>Role:</b> {obj.jobrole}
        </div>
        <div>
          <b>Password:</b> {obj.password}
        </div>

        <div className={style.btn}>
          <button
            className={style.nextButton}
            onClick={() => {
              handleSubmit();
              console.log(obj);
              navigate("/");
              toast.success("Form Submit successfully");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const StepForm = () => {
  const [obj, setObj] = useState({
    page: 0,
    name: "",
    email: "",
    jobrole: "",
    DOB: "",
    password: "",
  });

  const conditionalComponent = () => {
    console.log(obj.page);
    switch (obj.page) {
      case 0:
        return <First setObj={setObj} obj={obj} />;
      case 1:
        return <Second setObj={setObj} obj={obj} />;
      case 2:
        return <Third setObj={setObj} obj={obj} />;
      case 3:
        return <Fourth setObj={setObj} obj={obj} />;
      case 4:
        return <Fifth setObj={setObj} obj={obj} />;
      default:
        return <Last setObj={setObj} obj={obj} />;
    }
  };

  return (
    <div>
      {conditionalComponent()}

      <button onClick={() => setObj({ ...obj, page: obj.page + 1 })}>
        Next
      </button>
    </div>
  );
};

export default StepForm;
