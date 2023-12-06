import React from "react";
import Topbar from "./Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faUsersCog,
  faUserCog,
  faToolbox,
  faTasks,
  faHammer,
  faCog,
  faScrewdriver,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "./DarkModeContext";

const Setting = () => {
  const { isDark } = useDarkMode();
  return (
    <div className={isDark ? "bg-light" : "bg-dark"}>
      <Topbar />
      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-md-4 g-4">
          <div className="col mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faWrench} />
                  </span>
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faUsersCog} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faUserCog} />
                  </span>
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faToolbox} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faTasks} />
                  </span>
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faHammer} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faCog} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light  bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faScrewdriver} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faWrench} />
                  </span>
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faUsersCog} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faUserCog} />
                  </span>
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faToolbox} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faTasks} />
                  </span>
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faHammer} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faCog} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col  mt-4 transit">
            <div className="card  bg-gradient-warning">
              <div class="card-header text-light  bg-gradient-warning">
                Header
              </div>
              <div class="card-body text-light">
                <h5 class="card-title">
                  Lorem{" "}
                  <span>
                    <FontAwesomeIcon icon={faScrewdriver} />
                  </span>{" "}
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Setting;
