import React, { Component } from 'react';
import settings from "./../../images/settings.svg";
import like from "./../../images/like.svg";
import phoneCall from "./../../images/phone-call.svg";
import envelope from "./../../images/envelope.svg";
import placeholder from "./../../images/placeholder.svg";
import shoppingCart from "./../../images/shopping-cart.svg";
import {fetchVacanciesAction} from "../../store/actions/fetchVacanciesAction";
import connect from "react-redux/es/connect/connect";
import './vacancy.scss';


class Vacancy extends Component {
  componentDidMount() {
    this.props.fetchVacanciesAction();
  }

  moreVacanies = () => {
    this.props.fetchVacanciesAction();
  };

  render() {
    let { vacancies } = this.props.vacancies;
    let icons = [settings, like, phoneCall, envelope, placeholder, shoppingCart];

    vacancies.map((el, i) => {
      return el.icon =  icons[i]
    });


    return (
      <section className='vacancy'>
        <h2 className='vacancy-title section-title'>Hot vacancies</h2>

        <ul className='news-list'>
          {
            vacancies.map((item, i) => {
              return (
                <li key={i}>
                  <a href="https://www.google.com.ua">
                    <img src={item.icon} alt='' />
                    <div className="vacancy-desc">
                      <span>{item.name}</span>
                      <h5>{item.body}</h5>
                      <p>{item.email}</p>
                    </div>
                  </a>
                </li>
              )
            })
          }
        </ul>

        <div className="more-vacancy more">
          <button onClick={this.moreVacanies}
            className="button">
            <span>More Vacancies </span>
          </button>
        </div>
      </section>
    );
  }
}


const mapStateToProps = store => ({
  vacancies: store.vacancies
});

const mapDispatchToProps = dispatch => ({
  fetchVacanciesAction: vacancies => dispatch(fetchVacanciesAction(vacancies))
});

export default connect(mapStateToProps, mapDispatchToProps)(Vacancy);