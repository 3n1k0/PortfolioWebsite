import { Image, ImageContainer} from './Ui'
import React from 'react'; 

const UploadcareImage = ({uuid, alt}) => {
    return (
      <picture>
        <source
          srcset={`https://ucarecdn.com/${uuid}/-/preview/-/format/webp/`}
          type="image/webp"
          loading="lazy"
        />
        <img
          alt={alt}
          src={`https://ucarecdn.com/${uuid}/-/preview/-/format/auto/`}
          loading="lazy"
        ></img>
      </picture>


    )}

export default UploadcareImage