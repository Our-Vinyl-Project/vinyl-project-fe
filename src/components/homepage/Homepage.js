import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWants } from '../../data/selectors/wantsSelector';
// import PropTypes from 'prop-types';
import Controls from './Controls';
import SalesList from '../sale/SalesList';
// import SaleDetail from '../sale/SaleDetail';
function Homepage() {
  const wants = useSelector(selectWants);
  useEffect(() => {
    console.log(wants);
  }, [wants]);
  console.log(wants);
  if(!wants){
    return (
      <div>
        <Controls />
      </div>
    );
  }

  return (
    <div>
      <Controls />
      <SalesList wants={wants} />
      {/* < SaleDetail /> */}
    </div>
  );
}

Homepage.propTypes = {
  
};

export default Homepage;
