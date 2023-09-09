import React, { ChangeEvent, useState } from 'react'
import Button from '../common/Button/Button';
import { fileUpload } from '@/Api/FileUpload';
import styles from "./UploadFiles.module.scss";

export default function UploadFiles() {

  const [isFileVisible, setFileVisible] = useState(false);
  const [file, setFile] = useState({})

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    let file = event.target.files?.[0];
    fileUpload(file);
  }

  return (
    <div className={styles.uploadMain}>
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

      <Button
        title='Crear carpeta'
        btnClass='btn-success'
      />
    </div>
  )
}
