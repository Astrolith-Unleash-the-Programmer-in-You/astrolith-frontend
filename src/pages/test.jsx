import React, { useCallback, useRef } from 'react';
// import {toPng} from 'html-to-image';
import domtoimage from 'dom-to-image-more';


export const CertificateImage = ({url,persistCertification,certificationDetails }) => {
  const certificateRef = useRef(null);

  certificationDetails = {...certificationDetails, firstName: 'santa', lastName: 'bashef', userName: 'seidls', userDID:"did:ion:EiCt83z1zr1WTxyRiJVbDBy3uOEuhTVQB2O2Y_jKGT23iQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiNGNBSlJtemNnd3luaF9nWmVPYy1hazM3M3EzNExZWHVUNGU1NHZZVHd3WSJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJ1TmFvcWpCLU56X1U5b2JENGhqaG9YNUFmb0VoOGMxYmlfVl9NNHI5NW1BIiwieSI6IktqWURGRGVIRXNVaW51TDUyNUhuMThGYUliQUUtdXZQSEJ3VDhZd1d1ZkEifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNiIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMSJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlDeTlQeDdKcm5KejFfdXluWk1nRzRGaFUwbjd0b3JZa1RmV3cwTmdkRVhKQSJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpRFZYc1BZQ2NlWkFRS2VyTG1TOHdRNUVBbDRhdXMtSnM3QW1tVldtemJoYlEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJvRUNKbEZYQjlyeVgwRmMzbWtnNERnMlN4U2VReTcyTVhZZm9uMWF4d3NRIn19",holder:certificationDetails.holder}

  console.log("this is a certificate credential",{...certificationDetails})

  const generateImage = useCallback(() => {
    if (certificateRef.current === null) {
      return
    }
    console.log("Generating Certificate",certificateRef.current)
    domtoimage.toPng(certificateRef.current)
      .then(async(dataUrl) => {
          console.log(dataUrl,"debugging image");
        const img = new Image();
        img.src = dataUrl;

        document.body.appendChild(img);
        console.log(img,"from test image");
        //save certificate to dwn
        console.log(JSON.stringify({...certificationDetails,image:dataUrl}))
        const wait = await persistCertification({...certificationDetails,image:"dataUrl"});
        console.log(wait,"to test image no retrun");
      })

      .catch((error) => {
        console.error('Error generating image:', error,error.message);
      });
  },[certificateRef]);

  return (
    <div>
      <h2>Certificates</h2>
      <h2>First Name: {certificationDetails.firstName}</h2>
      <h2>Last Name: {certificationDetails.lastName}</h2>
      <h2>User Name: {certificationDetails.userName}</h2>
      <img src={url} alt="Certificate" />
      <h2>This is to certify that {certificationDetails.userName} is a qualified developer</h2>

      <button className='border-2 ' onClick={generateImage}>Generate Image</button>

      <div ref={certificateRef}>
        {/* The HTML content you want to convert to an image */}
        <h2>Certificates</h2>
        <h2>First Name: {certificationDetails.firstName}</h2>
        <h2>Last Name: {certificationDetails.lastName}</h2>
        <h2>User Name: {certificationDetails.userName}</h2>
        <img src={url} alt="Certificate" />
        <h2>This is to certify that {certificationDetails.userName} is a qualified developer</h2>
      </div>
    </div>
  );
};

// export default CertificateImage;
