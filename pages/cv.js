const CvPage = () => {
    return (
        <div className="mt-[60px] h-[calc(100vh-60px)] flex justify-center items-center">
            <embed
                src="/assets/personal/MiaTang_CV.pdf" // Make sure the file path matches your actual file location
                type="application/pdf"
                width="80%"
                height="90%"
            />
        </div>
    );
};

export default CvPage;
