import React from 'react'
import styles from './index.module.scss'
import Plot from '@/page/farm/components/Plot'

const Farm: React.FC<any> = props => {
  return (
    <div className={styles.farm}>
      {/* <div className={styles['farm-land']}> */}
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />

      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />

      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />

      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />

      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />

      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      <Plot plotCustomClassName={styles['plot-item']} />
      {/* </div> */}
    </div>
  )
}

export default Farm
