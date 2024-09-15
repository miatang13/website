const CvPage = () => {
    const resumePath = "/assets/personal/MiaTang_CV.pdf";
    return (
        <div className="mt-[60px] h-[calc(100vh-60px)] flex justify-center items-center">
            <iframe
                src={resumePath} // Make sure the path is correct and accessible
                className="w-full h-full max-w-6xl"
                title="Resume PDF"
            />
        </div>
    );
};

export default CvPage;
