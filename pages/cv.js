const CvPage = () => {
    const resumePath = "/assets/personal/MiaTang_CV.pdf";
    const fileID = "1vxVktg2mDVQ-foRNr4U731Jt8EcPQeSJ"
    // const fileUrl = "https://drive.google.com/uc?export=view&id=" + fileID;
    //const fileUrl = "https://drive.google.com/uc?export=view&id=1vxVktg2mDVQ-foRNr4U731Jt8EcPQeSJ"
    const fileUrl = "https://drive.google.com/uc?export=view&id=1vxVktg2mDVQ-foRNr4U731Jt8EcPQeSJ";

    return (
        <div className="mt-[60px] h-[calc(100vh-60px)] flex justify-center items-center">
            <iframe
                src="https://drive.google.com/file/d/1vxVktg2mDVQ-foRNr4U731Jt8EcPQeSJ/preview" // Direct Google Drive embed link
                className="w-full h-full max-w-4xl"
                title="Resume PDF"
                allow="autoplay"
            />
        </div>
    );
};

export default CvPage;
