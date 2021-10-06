import React from 'react'
import style from './index.module.scss'
import cs from 'classnames'

type Props = {
  plotCustomClassName: string
}

const Farm: React.FC<Props> = ({ plotCustomClassName }) => {
  return (
    <div className={cs(style.plot, plotCustomClassName)}>
      <img src='/src/assets/img/plot.png' alt='土地' />
    </div>
  )
}

export default Farm
