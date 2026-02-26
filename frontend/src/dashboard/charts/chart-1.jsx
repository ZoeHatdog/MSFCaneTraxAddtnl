import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

/* Theme: primary green, accent orange, blue accent */
const CHART_COLORS = {
  primary: '#006c45',
  accent: '#f99d1c',
  blue: '#4da2e7',
  grid: '#e5e5e5',
};

// #region Sample data
const data = [
  {
    name: 'Today',
    uv:30,
    pv: 54,
    amt: 45,
  },
  {
    name: 'Day 1',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: 'Day 2',
    uv: 20,
    pv: 25,
    amt: 22,
  },
  {
    name: 'Day 3',
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: 'Day 4',
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: 'Day 5',
    uv: 23,
    pv: 38,
    amt: 25,
  },
  {
    name: 'Day 6',
    uv: 34,
    pv: 43,
    amt: 21,
  },
];
// #endregion

export default function Chart1() {
  return (
    <div style={{ width: '100%', height: '320px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 8, right: 16, left: 0, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
          <XAxis dataKey="name" stroke="#26435c" fontSize={12} />
          <YAxis width={36} stroke="#26435c" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#101c26' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Line
            type="monotone"
            dataKey="pv"
            name="Avg Overall Bin Rate HG"
            stroke={CHART_COLORS.blue}
            strokeWidth={2}
            dot={{ fill: CHART_COLORS.blue, r: 4 }}
            activeDot={{ r: 6, fill: '#4da2e7', stroke: '#26435c' }}
          />
          <Line
            type="monotone"
            dataKey="uv"
            name="AVG Overall Bin Rate QUBE"
            stroke={CHART_COLORS.primary}
            strokeWidth={2}
            dot={{ fill: CHART_COLORS.primary, r: 4 }}
            activeDot={{ r: 6, fill: '#006c45', stroke: '#0e542d' }}
          />
          <RechartsDevtools />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}