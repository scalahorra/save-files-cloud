import React, { useState } from 'react';
import { fetchFiles } from '@/hooks/fetchFiles';
import { AiFillFileText } from 'react-icons/ai';
import styles from './ShowFiles.module.scss';

export default function ShowFiles() {
  const { fileList } = fetchFiles();
  console.log(fileList);

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  }

  return <div className={styles.filesGrid}>
    { fileList.map((file: { id: '', imageLink: '', imageName: '' }) => {
      return (
        <div key={file.id}>
          <div
            className={`${styles.files} bg-accent`}
            onClick={() => openFile(file.imageLink)}>
              {/* <AiFillFileText size={80} /> */}
              <img className={`${styles.imageLink} ${styles.hvrGrow}`} src={file.imageLink} />
          </div>
        </div>
      )
    }) }
  </div>
}
