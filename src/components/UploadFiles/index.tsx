import React, { ChangeEvent, useState } from 'react'
import Button from '../common/Button/Button';
import CommonProgress from '../common/Progress/Progress';
import { fileUpload } from '@/Api/FileUpload';
import styles from "./UploadFiles.module.scss";

export default function UploadFiles() {

  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0)

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    let file = event.target.files?.[0];
    fileUpload(file, setProgress);
  }

  return (
    <div className={styles.uploadMain}>
      <Button
        title='Crear carpeta'
        btnClass='btn-success'
      />

      <Button
        onClick={ () => setFileVisible(!isFileVisible) }
        title='Añadir archivo'
        btnClass='btn-success m-2'
      />

      { isFileVisible ? (
        <input
          onChange={ (event) => uploadFile(event) }
          type='file'
          className='file-input w-full max-w-xs'
        />
      ) : ( <></> )

      }

      { progress === 0 || progress === 100 ? <></>
      : <CommonProgress progress={ progress } />
      }
    </div>
  )
}
