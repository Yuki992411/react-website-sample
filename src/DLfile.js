import React from 'react';
import { FcDownload } from 'react-icons/fc';

function DLfile({
  _path,
  _file_name = null
}) {
  return (
    <>
      {_file_name === null ?
        <></>
        :
        <span>{_file_name}</span>
      }
      <a href={_path} target="_blank" rel="noreferrer" download>
        <FcDownload />
      </a>
    </>
  )
}

export default DLfile
