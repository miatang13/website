
const CvPage = () => {
    const fileID = "1vxVktg2mDVQ-foRNr4U731Jt8EcPQeSJ"
    const fileUrl = "https://drive.google.com/file/d/" + fileID + "/preview";
    const downloadUrl = "https://drive.google.com/uc?export=download&id=" + fileID;
    const btnStyle = "font-normal text-slate-500 text-sm bg-pink-100 rounded-lg p-2 hover:bg-pink-200  hover:text-pink-400 transition duration-200 ease-in-out flex flex-row items-center space-x-3 w-fit center";
    return (
        <div className="mt-[60px] w-full flex flex-col items-center">

            <iframe
                src={fileUrl}
                className="w-full h-screen max-w-4xl md:w-[80%] md:rounded-lg md:border md:border-gray-200"
                title="Resume PDF"
                allow="autoplay"
            />

            <div className="w-full flex justify-center items-center mt-4">
                <a
                    href={downloadUrl}
                    className={`${btnStyle} flex flex-col items-center text-center space-y-1`}
                    download
                >
                    <div className="flex"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                        <path d="M13.75 7h-3v5.296l1.943-2.048a.75.75 0 0 1 1.114 1.004l-3.25 3.5a.75.75 0 0 1-1.114 0l-3.25-3.5a.75.75 0 1 1 1.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 0 0-1.5 0V7h-3A2.25 2.25 0 0 0 4 9.25v7.5A2.25 2.25 0 0 0 6.25 19h7.5A2.25 2.25 0 0 0 16 16.75v-7.5A2.25 2.25 0 0 0 13.75 7Z" />
                    </svg>
                        download curriculum vitae pdf</div>
                    <span className="text-xs text-pink-400"> updated 09/14/2024 </span>


                </a></div>

        </div>
    );
};

export default CvPage;