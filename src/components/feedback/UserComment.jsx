import React from "react";
import stars from "../../img/5-Star-Rating-PNG-File.png";

export default function UserComment() {
  return (
    <div className="cmtBox">
      <h4>@user_name</h4>
      <span>2023/04/22 13:19 PM</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos
        aliquam ducimus. Rem error autem excepturi, distinctio mollitia suscipit
        fuga.
      </p>
      <div className="cmtBoxRating">
        <h4>Rating :-</h4>
        <div className="stars">
          <img src={stars} alt="" style={{ height: "100%", width: "70%" }} />
        </div>
      </div>
    </div>
  );
}
