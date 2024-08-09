import React from "react";
import style from "./contactsPage.module.css";

function ContactsPage() {
  return (
    <div className={`${style.container} ${style.contacts__container}`}>
      <h2 className={style.title}>Контакты</h2>

      <div className={style.img__wrapper}>
        <img
          src="https://images.unsplash.com/photo-1499159058454-75067059248a?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={style.contacts__img}
        />
      </div>

      <div className={style.contacts__info}>
        <h3 className={style.contacts__title}>Адрес:</h3>
        <p className={style.contacts__text}>
          Наш главный офис расположен по адресу: пр. Свободы, 56, офис 23. Мы находимся в самом центре города, что делает наш офис легко
          доступным для наших клиентов. Недалеко от офиса имеются удобные парковочные места, где вы можете бесплатно оставить свой
          автомобиль. Офис находится на третьем этаже современного делового центра, где созданы все условия для комфортного пребывания.
        </p>

        <h3 className={style.contacts__title}>Телефон:</h3>
        <p className={style.contacts__text}>
          Для связи с нами, пожалуйста, используйте следующий номер телефона: +7 (123) 456-78-90. Наш отдел поддержки клиентов работает
          ежедневно, чтобы гарантировать, что все ваши вопросы будут обработаны оперативно и профессионально. Если у вас возникнут срочные
          вопросы, не стесняйтесь звонить нам в любое время в рабочие часы.
        </p>
        <h3 className={style.contacts__title}>Электронная почта:</h3>
        <p className={style.contacts__text}>
          Если удобнее связаться с нами по электронной почте, вы можете написать нам на info@lampster.ru. Мы стремимся отвечать на все
          электронные письма в течение 24 часов. В случае возникновения сложных вопросов, требующих более детального рассмотрения, мы можем
          связаться с вами для получения дополнительной информации.
        </p>
        <h3 className={style.contacts__title}>График работы:</h3>
        <p className={`${style.contacts__text} ${style["contacts__text-info"]}`}>Наш офис будет рад приветствовать вас в следующие часы:</p>
        <p className={`${style.contacts__text} ${style["contacts__text-info"]}`}>Понедельник - Пятница: 09:00 - 18:00</p>
        <p className={`${style.contacts__text} ${style["contacts__text-info"]}`}>Суббота: 10:00 - 14:00</p>
        <p className={`${style.contacts__text} ${style["contacts__text-info"]}`}>Воскресенье: выходной</p>
        <p className={style.contacts__text}>
          В рабочие дни мы организовываем регулярные совещания для обсуждения инновационных идей и способов улучшения наших услуг. В субботу
          офис работает до обеда, чтобы у вас была возможность решить все важные вопросы перед выходными. Пожалуйста, учтите, что в
          воскресенье офис закрыт.
        </p>
      </div>
    </div>
  );
}

export default ContactsPage;
