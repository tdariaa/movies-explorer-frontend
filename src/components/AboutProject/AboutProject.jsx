import React from 'react';
import './AboutProject.css'

function AboutProject() {

  return (
    <section className="about" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__table">
        <h3 className="about__subtitle about__subtitle_type_stage">Дипломный проект включал 5 этапов</h3>
        <p className="about__text about__text_type_stage">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className="about__subtitle about__subtitle_type_time">На выполнение диплома ушло 5 недель</h3>
        <p className="about__text about__text_type_time">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>

      <div className="about__deadline">
        <p className="about__weeks about__weeks_style_green">1 неделя</p>
        <p className="about__weeks about__weeks_style_light-grey">4 недели</p>
        <p className="about__weeks about__weeks_style_none">Back-end</p>
        <p className="about__weeks about__weeks_style_none">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;