import pdf from "../../assets/pdf.png";
export const MessageWrapper = ({
  text,
  isSender,
  avatar,
  isFile,
  fileName,
}) => {
  return (
    <div
      className={`flex items-end gap-3 max-w-[50%]  ${isSender ? "ml-auto flex-row-reverse" : ""}`}
    >
      <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 mb-1">
        <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
      </div>

      <div
        className={` max-w-55 px-5 py-3 text-sm leading-[100%] ${
          isSender
            ? "bg-[#F3F4F6] text-[#FF8600] rounded-2xl  font-medium"
            : "bg-[#F3F4F6] text-gray-700 rounded-2xl "
        }`}
      >
        {isFile ? (
          <div className=" bg-white p-2 ">
            <img src={pdf} alt="pdf" />
            <div className="bg-black/50 inset-0 blur-md"></div>
            <p className="text-xs font-semibold text-gray-700 px-1 truncate">
              {fileName}
            </p>
          </div>
        ) : (
          text
        )}
      </div>
    </div>
  );
};
