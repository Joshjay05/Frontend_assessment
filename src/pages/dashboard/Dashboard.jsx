import {
  StatCard,
  WatchlistCard,
  RevenueList,
  RevenueCard,
  TrendingPostCard,
  TrendingNewsList,
  TrendingNewsCard,
  MemberCard,
  SectionHeader,
} from "../../components/ui/Cards";
import {
  potentialMembers,
  statsItems,
  trendingPosts,
  watchListItems,
  revenueItems,
  trendingNews,
} from "../../constants";
import { OverviewChart } from "../../components/ui/Chart";
const Dashboard = () => {
  return (
    <main className="px-4 py-6  min-h-screen overflow-y-auto">
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <article className="xl:col-span-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statsItems.map(
              ({ label, value, icon, iconBg, iconColor, hoverBg }) => (
                <StatCard
                  key={label}
                  label={label}
                  value={value}
                  icon={icon}
                  iconBg={iconBg}
                  iconColor={iconColor}
                  hoverBg={hoverBg}
                />
              ),
            )}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <OverviewChart />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <SectionHeader title="Trending Posts" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              {trendingPosts.map(
                ({ title, author, description, likes, comments, shares }) => (
                  <TrendingPostCard
                    key={title}
                    title={title}
                    author={author}
                    description={description}
                    likes={likes}
                    comments={comments}
                    shares={shares}
                  />
                ),
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <SectionHeader title="Potential Members" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-2">
              {potentialMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  handle={member.handle}
                  growth={member.growth}
                  initials={member.initials}
                  avatar={member.avatar}
                />
              ))}
            </div>
          </div>
        </article>

        <article className="xl:col-span-4 flex flex-col gap-6 ">
          <div className="bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <SectionHeader title="Watchlist" cta="VIEW ALL" />
            <div className="flex flex-col gap-4 mt-2">
              {watchListItems.map((w) => {
                return (
                  <WatchlistCard
                    key={w.id}
                    ticker={w.ticker}
                    price={w.price}
                    change={w.change}
                    up={w.up}
                  />
                );
              })}
            </div>
          </div>

          <RevenueList>
            {revenueItems.map(({ id, title, amount, img, imgBg, imgAlt }) => (
              <RevenueCard
                key={id}
                title={title}
                amount={amount}
                img={img}
                imgBg={imgBg}
                imgAlt={imgAlt}
              />
            ))}
          </RevenueList>

          <TrendingNewsList>
            {trendingNews.map(({ id, title, description, img }) => (
              <TrendingNewsCard
                key={id}
                title={title}
                description={description}
                img={img}
              />
            ))}
          </TrendingNewsList>
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
