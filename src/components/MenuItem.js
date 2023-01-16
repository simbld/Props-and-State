import React, { useState } from 'react';

function MenuItem(props) {
  //create a state isFavorite that has the initial value of isFavorite that comes from the props
  const [isFavorite, setIsFavorite] = React.useState(props.isFavorite);

  const handleClickFavorite = (props) => {
    //set the value of the isFavorite state variable to its opposite when the user clicks on the favorite div
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          {/* the image will receive the url src from the props */}
          <img src="props.urlSrc" alt="" />
        </div>
        <div className="itemDescription">
          {/* the h3 will receive the item name from the props */}
          <h3>{props.itemName}</h3>
          {/* the p will receive the item description from the props */}
          <p>{props.itemDescription}</p>
        </div>
      </div>
      <div className="rightContainer">
        {/* the div will receive the item price from the props */}
        <div>{props.itemPrice} EUR</div>

        {/* the div with id favorite will have 2 attributes:
                - onClick, will call the method handleClickFavorite,
                - classname, that will be conditionally rendered, depending on the value of isFavorite from the component's state
            */}
        <div
          id="favorite"
          onClick={handleClickFavorite}
          className={isFavorite ? 'favorite' : ''}
        />
      </div>
    </div>
  );
}

export default MenuItem;
