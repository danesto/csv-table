import React, {useState, useEffect} from 'react';
import {CSVLink} from 'react-csv';
import {GrDocumentCsv} from 'react-icons/gr';
import styles from './styles.module.scss';
import classnames from 'classnames';

interface Props {
    tableRef: React.MutableRefObject<any>;
    buttonClassName?: string;
}

export const ExportToCsvButton = ({tableRef, buttonClassName}: Props) => {

    const [csvModel, setCsvModel] = useState([]);

    useEffect(() => {
        if(tableRef) {
            setCsvModel(tableRef.current.innerText.split('\n').map((data:any) => data.split('\t')));
        }
    }, [tableRef])

    console.log('model', csvModel);

    return (
        <button className={classnames(styles.csvButton, buttonClassName)}>
            <div className={styles.icon}>
                <GrDocumentCsv color='#fff' className={styles.icon} />
            </div>
            <CSVLink data={csvModel}>Export to CSV</CSVLink>
        </button>
    )
}