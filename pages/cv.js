const CvPage = () => {
    const fileUrl = "https://drive.google.com/file/d/1vxVktg2mDVQ-foRNr4U731Jt8EcPQeSJ/preview"

    return (
        <div className="mt-[60px] h-[calc(100vh-60px)] flex justify-center items-center">
            <iframe
                src={fileUrl} Direct Google Drive embed link
                className="w-full h-full max-w-4xl md:w-[80%] md:h-[85vh] md:rounded-lg md:border md:border-gray-200"
                title="Resume PDF"
                allow="autoplay"
            />
        </div>
    );
};

export default CvPage;
