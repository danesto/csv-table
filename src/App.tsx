import {useRef} from 'react';
import {ExportToCsvButton} from './components/ExportToCsvButton';
import {GrDocumentCsv} from 'react-icons/gr';
import styles from './styles.module.scss';

function App() {

  const tableRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <GrDocumentCsv className={styles.logoIcon} />
        <span className={styles.logoText}>
           csv-table;
        </span>  
      </div>
      <span className={styles.description}>Export any HTML table directly to CSV</span>
      <h1>Table of beginner friendly languages</h1>
      <table ref={tableRef}>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Language
            </th>
            <th>
              Learning Process
            </th>
          </tr>
        </thead>
        <tr>
          <td>1</td>
          <td>Python</td>
          <td>Easy</td>
        </tr>
        <tr>
          <td>2</td>
          <td>JavaScript</td>
          <td>Easy</td>
        </tr>
      </table>

      <ExportToCsvButton tableRef={tableRef} />
      <a href='https://github.com/danesto/csv-table' className={styles.documentation}>
        GitHub
      </a>
    </div>
  );
}

export default App;
