import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fetchCollageAction } from './../../store/actions/fetchCollageAction';
import './collage.scss';


class Collage extends Component {
  componentDidMount() {
    this.props.fetchCollageAction();
  }

  render() {
    const {collage} = this.props.collage;

    console.log(collage)

    return (
      <ReactCSSTransitionGroup
        transitionName='collageLoad'
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}>    
        <section className='collage'>
          <h2 className='collage-title section-title'>Inside company</h2>
          <div className='collage-list'>
            {
              collage.map((el, i) => {
                return <div key={i} className='collage-wrap'>
                    <div className="collage-item-top">
                      <img src={el[0].url} alt='' className='collage-item collage-item-1'/>
                    </div>
                  <div className="collage-item-bottom">
                    <img src={el[1].url} alt='' className='collage-item collage-item-2'/>
                    <img src={el[2].url} alt='' className='collage-item collage-item-3'/>
                  </div>
                </div>
              })
            }
          </div>
        </section>
      </ReactCSSTransitionGroup>
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
