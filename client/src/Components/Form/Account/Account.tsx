import React, { FC } from 'react'
import styles from './Account.module.scss'

export interface handleFormProps {
  rap: any
  goo: any
}

const Account: FC<handleFormProps> = ({ rap, goo }) => {
  console.log(goo)
  return (
    <div className={styles.cont}>
      <div className={styles.info}>
        <div className={styles.info__el}>
          <p>Вес: </p>
          <p>{goo?.weight}г.</p>
        </div>
        <div className={styles.info__el}>
          <p>Размер:</p>
          <p>{goo?.height}см х {goo?.width}см х {goo?.length}см</p>
        </div>
        <div className={styles.info__el}>
          <p>Стоимость*:</p>
          <p>{rap?.at(0)?.priceByCurrency} руб.</p>
        </div>
        <div className={styles.info__el}>
          <p>Срок доставки:</p>
          <p>{rap?.deliveryPeriodMin ? +(rap?.deliveryPeriodMin) : 0} дней</p>
        </div>
      </div>
      <p className={styles.text}>
        * - Стоимость является ориентировочной. Точная стоимость будет
        рассчитана при физической сдаче заказа
      </p>
    </div>
  )
}

export default Account
