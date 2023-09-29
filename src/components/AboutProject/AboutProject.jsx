import React from 'react';
import './AboutProject.css'

function AboutProject() {

  return (
    <section className="about" id="about">
      <h1 className="about__title">О проекте</h1>
      <div className="about__table">
        <h2 className="about__subtitle about__subtitle_type_stage">Дипломный проект включал 5 этапов</h2>
        <p className="about__text about__text_type_stage">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h2 className="about__subtitle about__subtitle_type_time">На выполнение диплома ушло 5 недель</h2>
        <p className="about__text about__text_type_time">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>

      <div className="about__deadline">
        <div className="about__weeks about__weeks_style_green">1 неделя</div>
        <div className="about__weeks about__weeks_style_light-grey">4 недели</div>
        <div className="about__weeks about__weeks_style_none">Back-end</div>
        <div className="about__weeks about__weeks_style_none">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;