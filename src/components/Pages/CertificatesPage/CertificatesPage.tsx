"use client";

import React from "react";
import Image from "next/image";
import { CertificateWrapper, CertificateImage, CertificateContainer, StyledH2,} from "./Styled";

interface Certificate {
  id: number;
  src: string;
  alt: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dq0fwucoj/image/upload/v1740500094/Ironhack-certificate_gteawz.png",
    alt: "Certificate from Ironhack bootcamp"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dq0fwucoj/image/upload/v1740500005/58f849883add4d9bcd44582df51685f9IbFfQRTTWSLe7nqj-1_nj08gn.png",
    alt: "Certificate from Netherlands"
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dq0fwucoj/image/upload/v1740499986/58f849883add4d9bcd44582df51685f9IbFfQRTTWSLe7nqj-0_jpiyxd.png",
    alt: "Certificate from Netherlands"
  }
];

const CertificatesPage: React.FC = () => {
  return (
    
        <CertificateWrapper>
          <StyledH2>Certificates</StyledH2>
          <CertificateContainer>
            {certificates.map((cert) => (
              <CertificateImage key={cert.id}>
                <Image src={cert.src} alt={cert.alt} width={600} height={400} priority />
              </CertificateImage>
            ))}
          </CertificateContainer>
        </CertificateWrapper>
     
  );
};

export default CertificatesPage;
