"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const chartData = [
  { date: "2000-01-01", school_shootings: "23" },
  { date: "2001-01-01", school_shootings: "16" },
  { date: "2002-01-01", school_shootings: "23" },
  { date: "2003-01-01", school_shootings: "32" },
  { date: "2004-01-01", school_shootings: "32" },
  { date: "2005-01-01", school_shootings: "32" },
  { date: "2006-01-01", school_shootings: "54" },
  { date: "2007-01-01", school_shootings: "27" },
  { date: "2008-01-01", school_shootings: "33" },
  { date: "2009-01-01", school_shootings: "24" },
  { date: "2010-01-01", school_shootings: "18" },
  { date: "2011-01-01", school_shootings: "15" },
  { date: "2012-01-01", school_shootings: "33" },
  { date: "2013-01-01", school_shootings: "42" },
  { date: "2014-01-01", school_shootings: "43" },
  { date: "2015-01-01", school_shootings: "46" },
  { date: "2016-01-01", school_shootings: "56" },
  { date: "2017-01-01", school_shootings: "79" },
  { date: "2018-01-01", school_shootings: "96" },
  { date: "2019-01-01", school_shootings: "118" },
  { date: "2020-01-01", school_shootings: "76" },
  { date: "2021-01-01", school_shootings: "93" },
  { date: "2022-01-01", school_shootings: "35" },
  { date: "2023-01-01", school_shootings: "51" },
  { date: "2024-01-01", school_shootings: "38" },
];

const chartConfig = {
  school_shootings: {
    label: "Shootings",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Component() {
  const maxValue = Math.max(
    ...chartData.map((item) => parseInt(item.school_shootings))
  );

  // Round up to the nearest 50 for a nice upper bound
  const yAxisMax = Math.ceil(maxValue / 50) * 50;

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Number of School Shootings Over Time</CardTitle>
          <CardDescription>From 2000-2024</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[400px] w-full"
        >
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="fillSchoolShootings"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={`hsl(var(--chart-1))`}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={`hsl(var(--chart-1))`}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", { year: "numeric" });
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, yAxisMax]}
              allowDataOverflow={true}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      year: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="school_shootings"
              type="natural"
              fill="url(#fillSchoolShootings)"
              stroke={`hsl(var(--chart-1))`}
              strokeWidth={2}
              isAnimationActive={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
export default Component;
