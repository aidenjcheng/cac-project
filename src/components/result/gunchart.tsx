"use client";

import { Crosshair } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartConfig, ChartContainer } from "../ui/chart";

console.log("[GunChart] Module loaded");

interface GunChartProps {
  totalDetections: number | undefined;
  title?: string;
}

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

console.log("[GunChart] chartConfig defined:", chartConfig);

export function Component({
  totalDetections,
  title = "Number of firearms detected",
}: GunChartProps) {
  console.log("[GunChart] Component function called with props:", {
    totalDetections,
    title,
  });

  const chartData = [
    {
      browser: "safari",
      visitors: totalDetections,
      fill: "var(--color-safari)",
    },
  ];
  console.log("[GunChart] chartData created:", chartData);

  console.log("[GunChart] Rendering component");
  return (
    <Card className="flex flex-col rounded-[20px] h-[360px]">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            {console.log("[GunChart] Rendering PolarGrid")}
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            {console.log("[GunChart] Rendering RadialBar")}
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            {console.log("[GunChart] Rendering PolarRadiusAxis")}
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  console.log(
                    "[GunChart] Label content function called with viewBox:",
                    viewBox
                  );
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    console.log("[GunChart] Rendering text in Label");
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {(chartData[0].visitors || 0).toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Firearms detected
                        </tspan>
                      </text>
                    );
                  }
                  console.log(
                    "[GunChart] ViewBox conditions not met, returning null"
                  );
                  return null;
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total firearm detections{" "}
          <span className="inline-flex align-middle">
            <Crosshair className="size-4" />
          </span>
          .
        </div>
      </CardFooter>
    </Card>
  );
}

console.log("[GunChart] Component exported");

export default Component;
