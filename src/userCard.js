import React from "react";
import { userList } from "./dataUser";
const productCard = () => {
  return (
    <>
      <div class="card-deck">
        <div class="card">
          <img
            class="card-img-top"
            src="http://www.orseu-concours.com/451-615-thickbox/selor-test-de-raisonnement-abstrait-niveau-a.jpg"
            alt="Company logo"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-briefcase" style="font-size:20px;"></i> Company
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-user" style="font-size:20px;"></i> Role
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-map-marker" style="font-size:20px;"></i>{" "}
                Location
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-clock-o" style="font-size:20px;"></i> Duration
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-inr" style="font-size:20px;"></i> Cost
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default productCard;
