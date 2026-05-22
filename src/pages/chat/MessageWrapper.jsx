import pdf from "../../assets/pdf.png";
export const MessageWrapper = ({
  text,
  isSender,
  avatar,
  isFile,
  fileName,
  highlighted,
}) => {
  return (
    <div
      className={`flex items-end gap-3 max-w-[75%]  ${isSender ? "ml-auto flex-row-reverse" : ""}`}
    >
      <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mb-1">
        <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
      </div>

      {isFile ? (
        <div className=" rounded-2xl overflow-hidden max-w-50">
          <div className="w-full h-18 overflow-hidden bg-white">
            <img
              src={pdf}
              alt="file preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-br-2xl">
            <p className="text-xs font-semibold text-gray-700 truncate">
              {fileName}
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`px-4 py-3 text-sm leading-relaxed rounded-2xl ${
            isSender
              ? `bg-[#F3F4F6] ${highlighted ? "text-[#FF8600]" : "text-gray-700"} font-medium`
              : "bg-[#F3F4F6] text-gray-700"
          }`}
        >
          {text}
        </div>
      )}
    </div>
  );
};
