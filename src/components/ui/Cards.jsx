import { Heart, TrendingUp } from "lucide-react";
import comment from "../../assets/comment.png";
import share from "../../assets/next.png";
import chart from "../../assets/line-chart.png";

export const ORANGE = "#FF8600";

export const LIGHT_ORANGE = "#FFB357";

export const SectionHeader = ({ title, cta, onClick }) => (
  <div className="flex items-center justify-between mb-4 cursor-pointer">
    <h2 className="text-base font-bold text-gray-900">{title}</h2>
    {cta && (
      <button
        onClick={onClick}
        className="text-xs font-bold text-[#FF8600] hover:opacity-80 transition-opacity cursor-pointer"
      >
        {cta}
      </button>
    )}
  </div>
);

export const StatCard = ({
  value,
  label,
  icon: IconOrImage,
  iconBg,
  iconColor,
  hoverBg,
}) => {
  const isImageUrl = typeof IconOrImage === "string";

  return (
    <div
      className={`bg-white  rounded-2xl border border-gray-100 p-5 flex items-center justify-between transition-colors cursor-pointer ${hoverBg}`}
    >
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-400 mt-1">{label}</p>
      </div>
      <div
        className={`w-11 h-11 rounded-full flex items-center justify-center overflow-hidden ${iconBg}`}
      >
        {isImageUrl ? (
          <img
            src={IconOrImage}
            alt={label}
            className="w-5 h-5 object-center"
          />
        ) : (
          IconOrImage && <IconOrImage className={`w-5 h-5 ${iconColor}`} />
        )}
      </div>
    </div>
  );
};

export const WatchlistCard = ({ ticker, price, change, up }) => (
  <section className="bg-[#F6F6F6] rounded-xl border border-gray-100 px-4 py-3 flex items-center justify-between mb-4">
    <article>
      <div className="flex items-center ">
        <p className="text-sm font-bold text-gray-900">{ticker}</p>
        <p
          className={`ml-12 text-base mt-0.5 font-medium ${up ? "text-emerald-500" : "text-red-500"}`}
        >
          {up ? "↑" : "↓"}
        </p>
      </div>
      <p className="text-sm font-medium text-gray-700 mt-0.5">{price}</p>
      <p
        className={`text-xs mt-0.5 font-medium ${up ? "text-emerald-500" : "text-red-500"}`}
      >
        {change}
      </p>
    </article>
    <div className="w-38.5 h-14.75">
      <img src={chart} alt="chart" className="w-full h-full object-cover" />
    </div>
  </section>
);

export const RevenueCard = ({ amount, title, img, imgBg, imgAlt }) => (
  <div className="flex items-center justify-between py-3 border border-gray-100 rounded-xl px-4 mb-4">
    <div>
      <p className="text-base font-bold text-gray-900">{amount}</p>
      <p className="text-xs text-gray-400 mt-0.5">{title}</p>
    </div>
    <div
      className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold ${imgBg}`}
    >
      {img && <img src={img} alt={imgAlt} className="w-5 h-5 object-cover" />}
    </div>
  </div>
);

export const RevenueList = ({ children, title = "Revenue" }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-4">
    <SectionHeader title={title} />
    {children}
  </div>
);

export const TrendingPostCard = ({
  title,
  description,
  likes,
  comments,
  shares,
}) => (
  <div className="bg-white rounded-xl border border-[#F1F1F1] p-4 flex flex-col gap-5">
    <div>
      <p className="text-lg font-bold text-[#3B3B45] leading-snug mb-1.5">
        {title}
      </p>
      <p className="text-sm text-[#818187] leading-[150%] font-light">
        {description}
      </p>
    </div>
    <div className="flex items-center gap-4 pt-1 ">
      <span className="bg-[#F6F6F6] flex items-center gap-1.5 text-xs text-gray-500 border border-gray-100 rounded-full px-3 py-1">
        <Heart className="w-5 h-5 fill-red-400 text-red-400" />
        {likes}
      </span>
      <span className="bg-[#F6F6F6] flex items-center gap-1.5 text-xs text-gray-500 border border-gray-100 rounded-full px-3 py-1">
        <img src={comment} alt="comments" className="w-5 h-5" />
        {comments}
      </span>
      <span className="bg-[#F6F6F6] flex items-center gap-1.5 text-xs text-gray-500 border border-gray-100 rounded-full px-3 py-1">
        <img src={share} alt="comments" className="w-5 h-5" />
        {shares}
      </span>
    </div>
  </div>
);

export const TrendingNewsCard = ({ title, description, img, imgAlt = "" }) => (
  <section className="flex items-center gap-3 py-3 border rounded-xl p-4 mb-4 border-gray-100 ">
    <div className="w-12 h-12 rounded-lg bg-gray-100 shrink-0 overflow-hidden">
      {img ? (
        <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-200" />
      )}
    </div>
    <div className="min-w-53">
      <p className="text-xs font-bold text-gray-900 truncate">{title}</p>
      <p className="text-xs text-gray-400 mt-0.5 truncate">{description}</p>
    </div>
  </section>
);

export const TrendingNewsList = ({ children, title = "Trending News" }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-4">
    <SectionHeader title={title} />
    {children}
  </div>
);

export const MemberCard = ({
  name,
  handle,
  growth,
  avatar,
  initials,
  avatarBg = "bg-gray-100",
  avatarText = "text-gray-600",
}) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 w-33 h-40">
    <div
      className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center  text-sm font-bold ${avatarBg} ${avatarText}`}
    >
      {avatar ? (
        <img src={avatar} alt={name} className="w-full h-full object-center" />
      ) : (
        initials
      )}
    </div>
    <div className="text-center">
      <p className="text-sm font-bold text-[#3B3B45]">{name}</p>
      <p className="text-[11px] text-[#818187] mt-0.5">{handle}</p>
    </div>
    <p className="text-base font-semibold text-[#3B3B45] flex items-center gap-1.5">
      <TrendingUp className="w-5 h-5" className="text-teal-600" />
      {growth}
    </p>
  </div>
);
