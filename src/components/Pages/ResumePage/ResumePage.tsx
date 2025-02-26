// "use client";

// import React from "react";
// import Image from "next/image";
// import { FaDownload } from "react-icons/fa";
// import { StyledDiv, StyledMain, StyledImgWrapper, StyledLink } from "./Styled";

// const ResumePage: React.FC = () => {
//     return (
//         <StyledMain>
//             <StyledDiv>
//                 {/* Кнопка для завантаження резюме */}
//                 <StyledLink
//                     title="Download resume"
//                     target="_blank"
//                     href="https://res.cloudinary.com/dq0fwucoj/image/upload/v1740424077/Resume_jmmz2n.pdf"
//                     download="Bettina_Resume.pdf"
//                     rel="noopener noreferrer"
//                 >
//                     <FaDownload /> Download resume
//                 </StyledLink>



//                 {/* Відображення зображення резюме */}
//                 <StyledImgWrapper>
//                     <Image
//                         src="https://res.cloudinary.com/dq0fwucoj/image/upload/v1740422681/Resume_s0ja2l.png"
//                         alt="Resume Preview"
//                         width={600}
//                         height={800}
//                         priority
//                     />
//                 </StyledImgWrapper>
//             </StyledDiv>
//         </StyledMain>
//     );
// };

// export default ResumePage;



"use client";

import React from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { StyledDiv, StyledMain, StyledImgWrapper, StyledLink } from "./Styled";

const ResumePage: React.FC = () => {
    const cloudinaryPDFUrl = "https://res.cloudinary.com/dq0fwucoj/raw/upload/v1740503315/Resume_o994da_d4illn.pdf";
    const cloudinaryImageUrl = "https://res.cloudinary.com/dq0fwucoj/image/upload/v1740422681/Resume_s0ja2l.png";

    return (
        <StyledMain>
            <StyledDiv>
                {/* Кнопка для завантаження PDF */}
                <StyledLink 
                    title="Download resume" 
                    target="_blank" 
                    href={cloudinaryPDFUrl} 
                    download="Bettina_Resume.pdf" 
                    rel="noopener noreferrer"
                >
                    <FaDownload /> Download resume
                </StyledLink>

                {/* Відображення зображення резюме */}
                <StyledImgWrapper>
                    <Image 
                        src={cloudinaryImageUrl} 
                        alt="Resume Preview" 
                        width={600} 
                        height={800} 
                        priority
                    />
                </StyledImgWrapper>
            </StyledDiv>
        </StyledMain>
    );
};

export default ResumePage;






