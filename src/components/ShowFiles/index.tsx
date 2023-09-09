import React from 'react';
import { fetchFiles } from '@/hooks/fetchFiles';
import { AiFillFileText, AiFillFolder } from 'react-icons/ai';
import styles from './ShowFiles.module.scss';

export default function ShowFiles() {
  const { fileList } = fetchFiles();
  console.log('Archivos recibidos', fileList);

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  }

  return <div className={ styles.fileGridAux }>
    { fileList.map((file: { id:'', imageLink:'', imageName:'', isFolder:false, folderName:'' }) => {
      return (

        <div className={ styles.fileAux } key={ file.id }>

        { file.isFolder ? (

          <div className={ `${styles.noImageAux} ${styles.hvrGrow}` }>
            <AiFillFolder size={ 80 } />
            <p>{ file.folderName }</p>
          </div>

        ) : (

          <img onClick={ () => openFile(file.imageLink) }
            className={`${ styles.imgAux } ${ styles.hvrGrow }`}
            src={ file.imageLink }/>

        ) }

        </div>

      )
    }) }

  </div>
}
