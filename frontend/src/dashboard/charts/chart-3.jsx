import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

/* Theme: primary green, accent orange, blue accent */
const CHART_COLORS = {
  primary: '#006c45',
  accent: '#f99d1c',
  blue: '#4da2e7',
  grid: '#e5e5e5',
};

// #region Sample data per HG (HG 1–6)
const DATA_BY_HG = {
  1: [
    { name: 'Day 1', uv: 40, pv: 24, amt: 24 },
    { name: 'Day 2', uv: 30, pv: 13, amt: 22 },
    { name: 'Day 3', uv: 20, pv: 98, amt: 22 },
    { name: 'Day 4', uv: 27, pv: 39, amt: 20 },
    { name: 'Day 5', uv: 18, pv: 48, amt: 21 },
    { name: 'Day 6', uv: 23, pv: 38, amt: 25 },
    { name: 'Day 7', uv: 34, pv: 43, amt: 21 },
  ],
  2: [
    { name: 'Day 1', uv: 55, pv: 50, amt: 50 },
    { name: 'Day 2', uv: 42, pv: 45, amt: 48 },
    { name: 'Day 3', uv: 38, pv: 52, amt: 45 },
    { name: 'Day 4', uv: 50, pv: 48, amt: 52 },
    { name: 'Day 5', uv: 45, pv: 55, amt: 50 },
    { name: 'Day 6', uv: 52, pv: 50, amt: 48 },
    { name: 'Day 7', uv: 48, pv: 52, amt: 55 },
  ],
  3: [
    { name: 'Day 1', uv: 22, pv: 28, amt: 25 },
    { name: 'Day 2', uv: 35, pv: 30, amt: 28 },
    { name: 'Day 3', uv: 28, pv: 35, amt: 30 },
    { name: 'Day 4', uv: 32, pv: 28, amt: 32 },
    { name: 'Day 5', uv: 38, pv: 40, amt: 35 },
    { name: 'Day 6', uv: 30, pv: 32, amt: 30 },
    { name: 'Day 7', uv: 36, pv: 38, amt: 38 },
  ],
  4: [
    { name: 'Day 1', uv: 60, pv: 55, amt: 58 },
    { name: 'Day 2', uv: 58, pv: 62, amt: 60 },
    { name: 'Day 3', uv: 65, pv: 58, amt: 62 },
    { name: 'Day 4', uv: 62, pv: 65, amt: 65 },
    { name: 'Day 5', uv: 70, pv: 68, amt: 68 },
    { name: 'Day 6', uv: 68, pv: 70, amt: 70 },
    { name: 'Day 7', uv: 72, pv: 72, amt: 72 },
  ],
  5: [
    { name: 'Day 1', uv: 15, pv: 18, amt: 16 },
    { name: 'Day 2', uv: 20, pv: 15, amt: 18 },
    { name: 'Day 3', uv: 18, pv: 22, amt: 20 },
    { name: 'Day 4', uv: 25, pv: 20, amt: 22 },
    { name: 'Day 5', uv: 22, pv: 25, amt: 24 },
    { name: 'Day 6', uv: 28, pv: 26, amt: 26 },
    { name: 'Day 7', uv: 26, pv: 28, amt: 28 },
  ],
  6: [
    { name: 'Day 1', uv: 80, pv: 75, amt: 78 },
    { name: 'Day 2', uv: 78, pv: 82, amt: 80 },
    { name: 'Day 3', uv: 85, pv: 78, amt: 82 },
    { name: 'Day 4', uv: 82, pv: 88, amt: 85 },
    { name: 'Day 5', uv: 90, pv: 85, amt: 88 },
    { name: 'Day 6', uv: 88, pv: 90, amt: 90 },
    { name: 'Day 7', uv: 92, pv: 92, amt: 92 },
  ],
};
// #endregion

const HG_OPTIONS = [1, 2, 3, 4, 5, 6];

export default function Chart3() {
  const [selectedHg, setSelectedHg] = useState(1);
  const chartData = DATA_BY_HG[selectedHg] ?? DATA_BY_HG[1];

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
        <label htmlFor="chart3-hg-select" style={{ fontSize: 14, fontWeight: 500, color: '#26435c' }}>
          Harvester Group:
        </label>
        <select
          id="chart3-hg-select"
          value={selectedHg}
          onChange={(e) => setSelectedHg(Number(e.target.value))}
          style={{
            padding: '6px 12px',
            fontSize: 14,
            borderRadius: 6,
            border: '1px solid #e5e5e5',
            backgroundColor: '#fff',
            color: '#26435c',
            minWidth: 100,
            cursor: 'pointer',
          }}
        >
          {HG_OPTIONS.map((hg) => (
            <option key={hg} value={hg}>
              HG {hg}
            </option>
          ))}
        </select>
      </div>
      <div style={{ width: '100%', height: '320px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
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
            name="Expected # Bins"
            stroke={CHART_COLORS.blue}
            strokeWidth={2}
            dot={{ fill: CHART_COLORS.blue, r: 4 }}
            activeDot={{ r: 6, fill: '#4da2e7', stroke: '#26435c' }}
          />
          <Line
            type="monotone"
            dataKey="uv"
            name="Actual # Bins"
            stroke={CHART_COLORS.primary}
            strokeWidth={2}
            dot={{ fill: CHART_COLORS.primary, r: 4 }}
            activeDot={{ r: 6, fill: '#006c45', stroke: '#0e542d' }}
          />
          <RechartsDevtools />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}