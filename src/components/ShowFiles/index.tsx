import React from 'react';
import { fetchFiles } from '@/hooks/fetchFiles';
import { AiFillFileText } from 'react-icons/ai';
import styles from './ShowFiles.module.scss';

export default function ShowFiles() {
  let { fileList } = fetchFiles();

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  }

  return <div>
    { fileList.map((file: { imageLink: '', imageName: '' }) => {
      return (
        <div>
          <div
            className={`${styles.files} bg-accent`}
            onClick={() => openFile(file.imageLink)}>
              <AiFillFileText size={80} />
              <p>{ file.imageName }</p>
          </div>
          {/* <img className={styles.imageLink} src={file.imageLink} /> */}
        </div>
      )
    }) }
  </div>
}
