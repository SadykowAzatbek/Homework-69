import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {valueInfo} from '../ShowList/showSlice';
import {showList} from '../ShowList/showThunks';
import {Link, useParams} from 'react-router-dom';

const Home = () => {
  const params = useParams();

  const showValue = useSelector((state: RootState) => state.show.value);
  const showListData = useSelector((state: RootState) => state.showList.list);

  const dispatch: AppDispatch = useDispatch();

  const changeInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;

    dispatch(valueInfo(value));

    await dispatch(showList({value: value}));
  };

  console.log(params);

  return (
    <div className="row">
      <h3 className="col-5">Search for TV show</h3>
      <div className="col-7">
        <input className="w-75" value={showValue} onChange={changeInput} autoFocus />
        {showListData.map((item) => (
          <div key={item.show.id}>
            <div className="border border-dark mt-2 mb-2 ms-auto me-auto p-1 w-75">
              <Link to={"/shows/" + item.show.id} className="text-dark">{item.show.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;