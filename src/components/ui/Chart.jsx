import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export const ORANGE = "#FF8600";

export const LIGHT_ORANGE = "#FFB357";

const CHART_DATA = [
  { month: "JAN", value1: 650, value2: 720 },
  { month: "FEB", value1: 350, value2: 450 },
  { month: "MAR", value1: 540, value2: 460 },
  { month: "APR", value1: 360, value2: 530 },
  { month: "MAY", value1: 490, value2: 580 },
  { month: "JUN", value1: 650, value2: 860 },
  { month: "JUL", value1: 560, value2: 700 },
  { month: "AUG", value1: 460, value2: 620 },
  { month: "SEP", value1: 330, value2: 470 },
  { month: "OCT", value1: 490, value2: 700 },
  { month: "NOV", value1: 380, value2: 290 },
  { month: "DEC", value1: 510, value2: 600 },
];

const FILTERS = ["Robbin Hood", "Amreitrade", "Fidelity", "Charles"];

export const OverviewChart = ({
  activeFilter = "Robbin Hood",
  onFilterChange,
  data = CHART_DATA,
}) => (
  <div className="">
    <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
      <h2 className="text-base font-bold text-gray-900">Overview</h2>
      <div className="flex gap-2 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange?.(f)}
            className={`text-xs px-4 py-1.5 rounded-full font-medium transition-colors ${
              activeFilter === f
                ? "bg-[#FF8600] text-white"
                : "border border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} barGap={2} barCategoryGap="30%">
        <CartesianGrid
          vertical={false}
          stroke="#F3F4F6"
          strokeDasharray="3 3"
        />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10, fill: "#9CA3AF", fontWeight: 500 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10, fill: "#9CA3AF" }}
          domain={[0, 1000]}
          ticks={[0, 200, 400, 600, 800, 1000]}
        />
        <Tooltip
          cursor={{ fill: "rgba(0,0,0,0.02)" }}
          contentStyle={{
            borderRadius: 8,
            border: "1px solid #E5E7EB",
            fontSize: 12,
            padding: "6px 12px",
          }}
        />

        <Bar dataKey="value1" barSize={12} radius={[2, 2, 0, 0]}>
          {data.map((entry) => (
            <Cell
              key={entry.month}
              fill={entry.month === "JUN" ? LIGHT_ORANGE : "#F1F1F1"}
            />
          ))}
        </Bar>

        <Bar dataKey="value2" barSize={12} radius={[2, 2, 0, 0]}>
          {data.map((entry) => (
            <Cell
              key={entry.month}
              fill={entry.month === "JUN" ? ORANGE : "#E5E7EB"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);
