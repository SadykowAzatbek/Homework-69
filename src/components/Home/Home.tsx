import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {valueInfo} from '../ShowList/showSlice';
import {showInfo, showList} from '../ShowList/showThunks';
import {Link, useLocation, useParams} from 'react-router-dom';
import Loader from "../Loader/Loader";

const Home = () => {
  const params = useParams();
  const location = useLocation();

  const showValue = useSelector((state: RootState) => state.show.value);
  const showListData = useSelector((state: RootState) => state.showList.list);
  const seriesData = useSelector((state: RootState) => state.showData.dataArray);
  const isLoading = useSelector((state: RootState) => state.showList.isLoading);
  const dispatch: AppDispatch = useDispatch();

  console.log(showListData);

  useEffect(() => {
    if (location.pathname === '/shows/' + params.id) {
      const show = async () => {
        await dispatch(showInfo({value: params.id}));
      };

      void show();
    }
  }, [dispatch, location.pathname, params.id]);

  const changeInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(valueInfo(value));
    await dispatch(showList({value}));
  };

  let content = ( isLoading ? <Loader /> :
    <div className="row">
      <h3 className="col-5">Search for TV show</h3>
      <div className="col-7">
        <input className="w-75" value={showValue} onChange={changeInput} autoFocus />
        {isLoading ? <Loader /> : showListData.map((item) => (
          <div key={item.show.id}>
            <div className="border border-dark mt-2 mb-2 ms-auto me-auto p-1 w-75">
              <Link to={"/shows/" + item.show.id} className="text-dark">{item.show.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  let image = (<div></div>);

  if (seriesData.image === null) {
    image = (
      <strong>Images not found</strong>
    )
  } else {
    image = (
      <div>
        {isLoading ? <Loader /> : seriesData.image && <img src={seriesData.image['original']} alt="show image" />}
      </div>
    )
  }

  if (location.pathname === '/shows/' + params.id) {
    content = (
      <div className="row">
        <div className="col-5">
          <h3>Search for TV show</h3>
          {image}
        </div>
        <div className="col-7">
          <input className="w-75" value={showValue} onChange={changeInput} />
          {showListData.map((item) => (
            <div key={item.show.id}>
              <div className="border border-dark mt-2 mb-2 ms-auto me-auto p-1 w-75">
                <Link to={"/shows/" + item.show.id} className="text-dark">{item.show.name}</Link>
              </div>
            </div>
          ))}
          <h3>{seriesData.name}</h3>
          {seriesData.summary}
        </div>
      </div>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Home;