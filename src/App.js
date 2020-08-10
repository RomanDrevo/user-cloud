import React, {useEffect} from 'react';
import style from './css/App.scss';
import {connect} from 'react-redux';
import {fetchItems} from './store/actions/registerActions';

const App = ({fetchItems}) => {

    useEffect(() => {
        fetchItems();
    }, []);

  return (
      <div className={style['app-wrapper']}>
        <PageLayout>
          <div className="main-page-content">
            Main
          </div>
        </PageLayout>
      </div>
  );
};

const mapStateToProps = state => {
    return {
        data: state.currData.data,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchItems: () => dispatch(fetchItems())
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
