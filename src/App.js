import React, { useState } from "react";
import "./App.css";

function TabsComponent() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (value) => {
    if (value === activeTab) {
      return;
    }
    setActiveTab(value);
  };

  return (
    <div id="body" class="d-flex justify-content-center">
      <div className="form p-3 my-5 d-flex flex-column  text-aligh-center w-50" id="form-body">
      <div className="log-btn mb-3,my-3 d-flex flex-row ">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              className={`tab-link ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleClick("tab1") }
            >
              Register
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              className={`tab-link ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleClick("tab2")}
            >
              Login
            </button>
          </li>
        </ul>
      </div>

      <div>
        {activeTab === "tab1" && (
          <div className="tab-content">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-group">
                <label for="usename">UserName</label>
                <input
                  type="text"
                  class="form-control"
                  id="usename"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}

        {activeTab === "tab2" && (
          <div className="tab-content">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  
    </div>
  );
}

export default TabsComponent;
