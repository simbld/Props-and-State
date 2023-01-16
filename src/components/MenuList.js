import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';
import foodItems from '../services/DataList';

export default function MenuList() {
  return (
    <div>
      <div className="menulistContainer">
        {foodItems.map((item) => (
          <MenuItem
            key={item.itemName}
            item={item}
            description={item.description}
            foodImage={item.foodImage}
            price={item.price}
            isFavorite={item.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}
MenuList.propTypes = {
  foodItems: PropTypes.array.isRequired,
};
