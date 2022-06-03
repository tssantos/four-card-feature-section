import React from 'react';
import Card from './Card';

import styles from './App.module.css';
import { ReactComponent as IconCalculator } from './assets/icon-calculator.svg';
import { ReactComponent as IconKarma } from './assets/icon-karma.svg';
import { ReactComponent as IconSupervisor } from './assets/icon-supervisor.svg';
import { ReactComponent as IconBuilder } from './assets/icon-team-builder.svg';

function App() {
  return (
    <div className={styles.app}>
      <main>
        <h1>Reliable, efficient delivery</h1>
        <h1 className={styles.strong}>Powered by Technology</h1>
        <p className={styles.subtitle}>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        <div className={styles.cards}>
          <Card
            title='Supervisor'
            description='Monitors activity to identify project roadblocks'
            icon={IconSupervisor}
            color='green'/>

          <Card
            title='Team Builder'
            description='Scans our talent network to create the optimal team for your project'
            icon={IconBuilder}
            color='red'/>

          <Card
            title='Karma'
            description='Regularly evaluates our talent to ensure quality'
            icon={IconKarma}
            color='yellow'
          />

          <Card
            title='Calculator'
            description='Uses data from past projects to provide better delivery estimates'
            icon={IconCalculator}
            color='blue'
          />
        </div>
      </main >
    </div >
  );
}

export default App;
