import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import { fetchCollageAction } from './../../store/actions/fetchCollageAction';
import './collage.scss';


class Collage extends Component {
  componentDidMount() {
    this.props.fetchCollageAction();
  }

  render() {
    const {collage} = this.props.collage;

    let temparray = [];
    for (let i=0; i<collage.length; i+=3) {
      temparray.push(collage.slice(i,i+3))
    }

    return (
      <section className='collage'>
        <h2 className='collage-title section-title'>Inside company</h2>
        <ul className='collage-list'>
          {
            temparray.map((el, i) => {
              return <ul key={el.i} className='collage-wrap'>
                  <img src={el[0].url} alt='' className='collage-item-1'/>
                  <img src={el[1].url} alt='' className='collage-item-2'/>
                  <img src={el[2].url} alt='' className='collage-item-3'/>
              </ul>
            })
          }
        </ul>
      </section>
    );
  }
}


const mapStateToProps = store => ({
  collage: store.collage
});

const mapDispatchToProps = dispatch => ({
  fetchCollageAction: collage => dispatch(fetchCollageAction(collage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collage);
